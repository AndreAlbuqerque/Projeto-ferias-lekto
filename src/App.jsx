import React, { useState, useMemo, useEffect } from 'react';
import { Users, Calendar, AlertTriangle, TrendingUp, Plus, Download, X, ChevronRight, CheckCircle2, Clock, Search, Filter, Trash2, LogOut, Lock } from 'lucide-react';
import { db } from './firebaseClient';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';

// ============================================================
// MOTOR DE CÁLCULO
// ============================================================
const HOJE = new Date();
const TETO = 45;
const DIAS_POR_AQUISITIVO = 15;
const MESES_POR_AQUISITIVO = 6;

function diffMeses(inicio, fim) {
  const a = new Date(inicio);
  const b = new Date(fim);
  let meses = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
  if (b.getDate() < a.getDate()) meses--;
  return Math.max(0, meses);
}

function diffDias(inicio, fim) {
  const a = new Date(inicio);
  const b = new Date(fim);
  return Math.round((b - a) / (1000 * 60 * 60 * 24)) + 1;
}

function calcularSaldo(colaborador, feriasDoColaborador) {
  const meses = diffMeses(colaborador.dataAdmissao, HOJE);
  const periodosCompletos = Math.floor(meses / MESES_POR_AQUISITIVO);
  const totalAdquirido = periodosCompletos * DIAS_POR_AQUISITIVO;
  const totalUsufruido = feriasDoColaborador.reduce((acc, f) => acc + diffDias(f.dataInicio, f.dataFim), 0);
  const saldoBruto = totalAdquirido - totalUsufruido;
  const saldoEfetivo = Math.min(saldoBruto, TETO);
  const diasPerdidos = Math.max(0, saldoBruto - saldoEfetivo);
  const adm = new Date(colaborador.dataAdmissao);
  const proxAquisitivo = new Date(adm);
  proxAquisitivo.setMonth(adm.getMonth() + (periodosCompletos + 1) * MESES_POR_AQUISITIVO);
  let status = 'saudavel';
  if (saldoEfetivo >= TETO) status = 'critico';
  else if (saldoEfetivo >= 35) status = 'atencao';
  return { totalAdquirido, totalUsufruido, saldoBruto, saldoEfetivo, diasPerdidos, periodosCompletos, proxAquisitivo, status, tempoEmpresa: meses };
}

function formatarData(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// ============================================================
// TELA DE LOGIN
// ============================================================
function TelaLogin({ onLogin }) {
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(false);

  const entrar = () => {
    if (senha === import.meta.env.VITE_APP_PASSWORD) {
      sessionStorage.setItem('lekto:auth', '1');
      onLogin();
    } else {
      setErro(true);
      setSenha('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-sm p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-xl font-bold text-slate-900">Gestão de Férias</h1>
          <p className="text-sm text-slate-500 mt-1">Lekto Educação · RH</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-slate-700 mb-1 block">Senha de acesso</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                value={senha}
                onChange={e => { setSenha(e.target.value); setErro(false); }}
                onKeyDown={e => e.key === 'Enter' && entrar()}
                className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${erro ? 'border-rose-400' : 'border-slate-200'}`}
                placeholder="••••••••"
                autoFocus
              />
            </div>
            {erro && <p className="text-xs text-rose-600 mt-1">Senha incorreta</p>}
          </div>
          <button
            onClick={entrar}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export default function App() {
  const [autenticado, setAutenticado] = useState(() => sessionStorage.getItem('lekto:auth') === '1');
  const [colaboradores, setColaboradores] = useState([]);
  const [ferias, setFerias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [telaAtiva, setTelaAtiva] = useState('dashboard');
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState(null);
  const [modalNovaFerias, setModalNovaFerias] = useState(false);
  const [modalNovoColab, setModalNovoColab] = useState(false);
  const [busca, setBusca] = useState('');
  const [filtroTime, setFiltroTime] = useState('todos');

  // Carrega dados do Supabase
  useEffect(() => {
    if (!autenticado) return;
    async function carregar() {
      setCarregando(true);
      const [colaboradoresSnap, feriasSnap] = await Promise.all([
        getDocs(collection(db, 'colaboradores')),
        getDocs(collection(db, 'ferias')),
      ]);
      setColaboradores(colaboradoresSnap.docs.map(d => {
        const c = d.data();
        return {
          id: d.id,
          nome: c.nome,
          cargo: c.cargo,
          time: c.time,
          email: c.email,
          dataAdmissao: c.dataAdmissao,
          status: c.status,
        };
      }));
      setFerias(feriasSnap.docs.map(d => {
        const f = d.data();
        return {
          id: d.id,
          colaboradorId: f.colaboradorId,
          dataInicio: f.dataInicio,
          dataFim: f.dataFim,
          observacao: f.observacao || '',
        };
      }));
      setCarregando(false);
    }
    carregar();
  }, [autenticado]);

  const sair = () => {
    sessionStorage.removeItem('lekto:auth');
    setAutenticado(false);
  };

  const colaboradoresComSaldo = useMemo(() => {
    return colaboradores.map(c => {
      const saldo = calcularSaldo(c, ferias.filter(f => f.colaboradorId === c.id));
      return { ...c, ...saldo, statusSaldo: saldo.status, status: c.status };
    });
  }, [colaboradores, ferias]);

  const colaboradoresFiltrados = useMemo(() => {
    return colaboradoresComSaldo.filter(c => {
      const matchBusca = c.nome.toLowerCase().includes(busca.toLowerCase()) || c.cargo.toLowerCase().includes(busca.toLowerCase());
      const matchTime = filtroTime === 'todos' || c.time === filtroTime;
      return matchBusca && matchTime && c.status === 'ativo';
    });
  }, [colaboradoresComSaldo, busca, filtroTime]);

  const metricas = useMemo(() => {
    const ativos = colaboradoresComSaldo.filter(c => c.status === 'ativo');
    const totalDias = ativos.reduce((s, c) => s + c.saldoEfetivo, 0);
    const criticos = ativos.filter(c => c.statusSaldo === 'critico').length;
    const atencao = ativos.filter(c => c.statusSaldo === 'atencao').length;
    const emFerias = ferias.filter(f => {
      const ini = new Date(f.dataInicio);
      const fim = new Date(f.dataFim);
      return ini <= HOJE && HOJE <= fim;
    }).length;
    return { totalAtivos: ativos.length, totalDias, criticos, atencao, emFerias };
  }, [colaboradoresComSaldo, ferias]);

  const adicionarFerias = async (dados) => {
    const novoId = 'f' + Date.now();
    await setDoc(doc(db, 'ferias', novoId), {
      colaboradorId: dados.colaboradorId,
      dataInicio: dados.dataInicio,
      dataFim: dados.dataFim,
      observacao: dados.observacao || '',
    });
    setFerias(prev => [...prev, { id: novoId, ...dados }]);
    setModalNovaFerias(false);
  };

  const adicionarColaborador = async (dados) => {
    const novoId = String(Date.now());
    await setDoc(doc(db, 'colaboradores', novoId), {
      nome: dados.nome,
      email: dados.email,
      cargo: dados.cargo,
      time: dados.time,
      dataAdmissao: dados.dataAdmissao,
      status: 'ativo',
    });
    setColaboradores(prev => [...prev, { id: novoId, status: 'ativo', ...dados }]);
    setModalNovoColab(false);
  };

  const removerFerias = async (id) => {
    await deleteDoc(doc(db, 'ferias', id));
    setFerias(prev => prev.filter(f => f.id !== id));
  };

  const removerColaborador = async (id) => {
    const colab = colaboradores.find(c => c.id === id);
    if (!colab) return;
    if (!window.confirm(`Excluir ${colab.nome}? Todos os registros de férias também serão removidos.`)) return;
    const feriasDoColab = ferias.filter(f => f.colaboradorId === id);
    await Promise.all(feriasDoColab.map(f => deleteDoc(doc(db, 'ferias', f.id))));
    await deleteDoc(doc(db, 'colaboradores', id));
    setColaboradores(prev => prev.filter(c => c.id !== id));
    setFerias(prev => prev.filter(f => f.colaboradorId !== id));
    setColaboradorSelecionado(null);
  };

  const exportarCSV = () => {
    const linhas = ['Nome,Cargo,Time,Admissão,Adquirido,Usufruído,Saldo,Status'];
    colaboradoresComSaldo.forEach(c => {
      linhas.push([c.nome, c.cargo, c.time, formatarData(c.dataAdmissao), c.totalAdquirido, c.totalUsufruido, c.saldoEfetivo, c.statusSaldo].join(','));
    });
    const blob = new Blob([linhas.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ferias_lekto_' + new Date().toISOString().slice(0, 10) + '.csv';
    a.click();
  };

  if (!autenticado) return <TelaLogin onLogin={() => setAutenticado(true)} />;

  if (carregando) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-slate-500">Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">Gestão de Férias</h1>
              <p className="text-xs text-slate-500 -mt-0.5">Lekto Educação · RH</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={exportarCSV} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition">
              <Download className="w-4 h-4" /> Exportar
            </button>
            <div className="w-px h-6 bg-slate-200" />
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100">
              <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-700">RH</div>
              <span className="text-sm text-slate-700 font-medium">Recursos Humanos</span>
            </div>
            <button onClick={sair} className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition" title="Sair">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-6 flex gap-1">
          {[{ id: 'dashboard', label: 'Dashboard' }, { id: 'colaboradores', label: 'Colaboradores' }].map(t => (
            <button
              key={t.id}
              onClick={() => { setTelaAtiva(t.id); setColaboradorSelecionado(null); }}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition ${telaAtiva === t.id && !colaboradorSelecionado ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-600 hover:text-slate-900'}`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* DASHBOARD */}
        {telaAtiva === 'dashboard' && !colaboradorSelecionado && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Visão geral</h2>
            <p className="text-sm text-slate-500 mb-6">Dados atualizados em {formatarData(HOJE)}</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <MetricCard icon={Users} cor="indigo" label="Colaboradores ativos" valor={metricas.totalAtivos} />
              <MetricCard icon={TrendingUp} cor="emerald" label="Dias em haver" valor={metricas.totalDias} sufixo="dias" />
              <MetricCard icon={Clock} cor="sky" label="Em férias agora" valor={metricas.emFerias} />
              <MetricCard icon={AlertTriangle} cor="amber" label="Atenção ao teto" valor={metricas.criticos + metricas.atencao} hint={`${metricas.criticos} crítico(s) · ${metricas.atencao} atenção`} />
            </div>

            {(metricas.criticos > 0 || metricas.atencao > 0) && (
              <div className="bg-white rounded-xl border border-slate-200 mb-6 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">Colaboradores próximos ao teto de {TETO} dias</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Ação recomendada: agendar férias para evitar perda de dias</p>
                  </div>
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <div className="divide-y divide-slate-100">
                  {colaboradoresComSaldo
                    .filter(c => c.status === 'ativo' && (c.statusSaldo === 'critico' || c.statusSaldo === 'atencao'))
                    .sort((a, b) => b.saldoEfetivo - a.saldoEfetivo)
                    .slice(0, 5)
                    .map(c => (
                      <button key={c.id} onClick={() => setColaboradorSelecionado(c.id)} className="w-full px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition text-left">
                        <div className="flex items-center gap-3">
                          <Avatar nome={c.nome} />
                          <div>
                            <p className="font-medium text-slate-900 text-sm">{c.nome}</p>
                            <p className="text-xs text-slate-500">{c.cargo} · {c.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <SaldoBadge saldo={c.saldoEfetivo} status={c.statusSaldo} />
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-900">Próximos períodos aquisitivos (60 dias)</h3>
                <p className="text-xs text-slate-500 mt-0.5">Colaboradores que vão receber +{DIAS_POR_AQUISITIVO} dias em breve</p>
              </div>
              <div className="divide-y divide-slate-100">
                {colaboradoresComSaldo
                  .filter(c => c.status === 'ativo' && (c.proxAquisitivo - HOJE) / (1000 * 60 * 60 * 24) <= 60 && c.proxAquisitivo >= HOJE)
                  .sort((a, b) => a.proxAquisitivo - b.proxAquisitivo)
                  .slice(0, 5)
                  .map(c => (
                    <button key={c.id} onClick={() => setColaboradorSelecionado(c.id)} className="w-full px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition text-left">
                      <div className="flex items-center gap-3">
                        <Avatar nome={c.nome} />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">{c.nome}</p>
                          <p className="text-xs text-slate-500">{c.cargo} · {c.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-900">{formatarData(c.proxAquisitivo)}</p>
                        <p className="text-xs text-emerald-600">+15 dias</p>
                      </div>
                    </button>
                  ))}
                {colaboradoresComSaldo.filter(c => (c.proxAquisitivo - HOJE) / (1000 * 60 * 60 * 24) <= 60 && c.proxAquisitivo >= HOJE).length === 0 && (
                  <div className="px-5 py-8 text-center text-sm text-slate-500">Nenhum aquisitivo nos próximos 60 dias</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* LISTA DE COLABORADORES */}
        {telaAtiva === 'colaboradores' && !colaboradorSelecionado && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Colaboradores</h2>
                <p className="text-sm text-slate-500 mt-1">{colaboradoresFiltrados.length} de {colaboradoresComSaldo.length} colaboradores</p>
              </div>
              <button onClick={() => setModalNovoColab(true)} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-sm">
                <Plus className="w-4 h-4" /> Novo colaborador
              </button>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-200 flex items-center gap-3">
                <div className="relative flex-1 max-w-xs">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input value={busca} onChange={e => setBusca(e.target.value)} placeholder="Buscar por nome ou cargo..." className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-slate-400" />
                  <select value={filtroTime} onChange={e => setFiltroTime(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="todos">Todos os times</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Operações">Operações</option>
                    <option value="Administrativo">Administrativo</option>
                    <option value="Educação">Educação</option>
                  </select>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                    <th className="text-left px-5 py-3 font-medium">Nome</th>
                    <th className="text-left px-5 py-3 font-medium">Time</th>
                    <th className="text-left px-5 py-3 font-medium">Admissão</th>
                    <th className="text-left px-5 py-3 font-medium">Adquirido</th>
                    <th className="text-left px-5 py-3 font-medium">Usufruído</th>
                    <th className="text-left px-5 py-3 font-medium">Saldo</th>
                    <th className="w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {colaboradoresFiltrados.map(c => (
                    <tr key={c.id} onClick={() => setColaboradorSelecionado(c.id)} className="hover:bg-slate-50 cursor-pointer transition">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar nome={c.nome} />
                          <div>
                            <p className="font-medium text-slate-900 text-sm">{c.nome}</p>
                            <p className="text-xs text-slate-500">{c.cargo}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-sm text-slate-700">{c.time}</td>
                      <td className="px-5 py-3 text-sm text-slate-700">{formatarData(c.dataAdmissao)}</td>
                      <td className="px-5 py-3 text-sm text-slate-700">{c.totalAdquirido} dias</td>
                      <td className="px-5 py-3 text-sm text-slate-700">{c.totalUsufruido} dias</td>
                      <td className="px-5 py-3"><SaldoBadge saldo={c.saldoEfetivo} status={c.statusSaldo} /></td>
                      <td className="px-2"><ChevronRight className="w-4 h-4 text-slate-400" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DETALHE DO COLABORADOR */}
        {colaboradorSelecionado && (() => {
          const c = colaboradoresComSaldo.find(x => x.id === colaboradorSelecionado);
          if (!c) return null;
          const feriasDoColab = ferias.filter(f => f.colaboradorId === c.id).sort((a, b) => new Date(b.dataInicio) - new Date(a.dataInicio));
          return (
            <div>
              <button onClick={() => setColaboradorSelecionado(null)} className="text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1">← Voltar</button>
              <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar nome={c.nome} grande />
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{c.nome}</h2>
                      <p className="text-sm text-slate-500">{c.cargo} · {c.time}</p>
                      <p className="text-xs text-slate-400 mt-1">{c.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => removerColaborador(c.id)} className="flex items-center gap-2 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg transition border border-rose-200">
                      <Trash2 className="w-4 h-4" /> Excluir
                    </button>
                    <button onClick={() => setModalNovaFerias(true)} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-sm">
                      <Plus className="w-4 h-4" /> Registrar férias
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
                  <InfoItem label="Admissão" valor={formatarData(c.dataAdmissao)} />
                  <InfoItem label="Tempo de casa" valor={`${Math.floor(c.tempoEmpresa / 12)}a ${c.tempoEmpresa % 12}m`} />
                  <InfoItem label="Períodos aquisitivos" valor={`${c.periodosCompletos} concluídos`} />
                  <InfoItem label="Próximo aquisitivo" valor={formatarData(c.proxAquisitivo)} destaque="emerald" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4">Saldo de férias</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div><p className="text-xs text-slate-500">Adquirido</p><p className="text-2xl font-bold text-slate-900">{c.totalAdquirido}</p></div>
                  <div><p className="text-xs text-slate-500">Usufruído</p><p className="text-2xl font-bold text-slate-900">{c.totalUsufruido}</p></div>
                  <div><p className="text-xs text-slate-500">Saldo atual</p><p className={`text-2xl font-bold ${c.statusSaldo === 'critico' ? 'text-rose-600' : c.statusSaldo === 'atencao' ? 'text-amber-600' : 'text-emerald-600'}`}>{c.saldoEfetivo}</p></div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1"><span>0</span><span>Teto: {TETO} dias</span></div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full transition-all ${c.statusSaldo === 'critico' ? 'bg-rose-500' : c.statusSaldo === 'atencao' ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${Math.min(100, (c.saldoEfetivo / TETO) * 100)}%` }} />
                  </div>
                  {c.diasPerdidos > 0 && (
                    <p className="mt-2 text-xs text-rose-600 flex items-center gap-1"><AlertTriangle className="w-3 h-3" />{c.diasPerdidos} dia(s) já foram desconsiderados por exceder o teto</p>
                  )}
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900">Histórico de férias</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{feriasDoColab.length} registro(s)</p>
                </div>
                {feriasDoColab.length === 0 ? (
                  <div className="px-5 py-12 text-center text-sm text-slate-500">Nenhum período registrado ainda</div>
                ) : (
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                        <th className="text-left px-5 py-3 font-medium">Período</th>
                        <th className="text-left px-5 py-3 font-medium">Dias</th>
                        <th className="text-left px-5 py-3 font-medium">Observação</th>
                        <th className="w-10"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {feriasDoColab.map(f => (
                        <tr key={f.id}>
                          <td className="px-5 py-3 text-sm text-slate-900">{formatarData(f.dataInicio)} → {formatarData(f.dataFim)}</td>
                          <td className="px-5 py-3 text-sm font-medium text-slate-900">{diffDias(f.dataInicio, f.dataFim)}</td>
                          <td className="px-5 py-3 text-sm text-slate-500">{f.observacao || '—'}</td>
                          <td className="px-2"><button onClick={() => removerFerias(f.id)} className="text-slate-400 hover:text-rose-600 p-1"><X className="w-4 h-4" /></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          );
        })()}
      </main>

      {modalNovaFerias && (
        <ModalNovaFerias
          colaborador={colaboradoresComSaldo.find(c => c.id === colaboradorSelecionado)}
          onClose={() => setModalNovaFerias(false)}
          onSalvar={adicionarFerias}
        />
      )}
      {modalNovoColab && (
        <ModalNovoColaborador
          onClose={() => setModalNovoColab(false)}
          onSalvar={adicionarColaborador}
        />
      )}
    </div>
  );
}

// ============================================================
// SUBCOMPONENTES (idênticos ao original)
// ============================================================
function MetricCard({ icon: Icon, cor, label, valor, sufixo, hint }) {
  const cores = { indigo: 'bg-indigo-50 text-indigo-600', emerald: 'bg-emerald-50 text-emerald-600', sky: 'bg-sky-50 text-sky-600', amber: 'bg-amber-50 text-amber-600' };
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${cores[cor]}`}><Icon className="w-5 h-5" strokeWidth={2} /></div>
      </div>
      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
      <p className="text-3xl font-bold text-slate-900 mt-1">{valor} <span className="text-base font-normal text-slate-400">{sufixo}</span></p>
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

function Avatar({ nome, grande }) {
  const iniciais = nome.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  const hash = nome.charCodeAt(0) + nome.charCodeAt(1);
  const cores = ['bg-indigo-100 text-indigo-700', 'bg-emerald-100 text-emerald-700', 'bg-amber-100 text-amber-700', 'bg-rose-100 text-rose-700', 'bg-sky-100 text-sky-700', 'bg-purple-100 text-purple-700'];
  return (
    <div className={`${grande ? 'w-14 h-14 text-base' : 'w-9 h-9 text-xs'} rounded-full ${cores[hash % cores.length]} flex items-center justify-center font-semibold`}>
      {nome.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase()}
    </div>
  );
}

function SaldoBadge({ saldo, status }) {
  const estilos = { saudavel: 'bg-emerald-50 text-emerald-700 border-emerald-200', atencao: 'bg-amber-50 text-amber-700 border-amber-200', critico: 'bg-rose-50 text-rose-700 border-rose-200' };
  const icons = { saudavel: <CheckCircle2 className="w-3.5 h-3.5" />, atencao: <Clock className="w-3.5 h-3.5" />, critico: <AlertTriangle className="w-3.5 h-3.5" /> };
  return <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-semibold ${estilos[status]}`}>{icons[status]}{saldo} dias</span>;
}

function InfoItem({ label, valor, destaque }) {
  return (
    <div>
      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{label}</p>
      <p className={`text-sm font-semibold mt-1 ${destaque === 'emerald' ? 'text-emerald-600' : 'text-slate-900'}`}>{valor}</p>
    </div>
  );
}

function ModalNovaFerias({ colaborador, onClose, onSalvar }) {
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [observacao, setObservacao] = useState('');
  const dias = dataInicio && dataFim ? diffDias(dataInicio, dataFim) : 0;
  const saldoAposRegistro = colaborador ? colaborador.saldoEfetivo - dias : 0;
  const excedeSaldo = colaborador && dias > colaborador.saldoEfetivo;
  const podeSalvar = dataInicio && dataFim && dias > 0 && !excedeSaldo;
  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div><h3 className="font-bold text-slate-900">Registrar férias</h3><p className="text-xs text-slate-500 mt-0.5">{colaborador?.nome}</p></div>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-lg"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-700 mb-1 block">Data início</label>
              <input type="date" value={dataInicio} onChange={e => setDataInicio(e.target.value)} className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-700 mb-1 block">Data fim</label>
              <input type="date" value={dataFim} onChange={e => setDataFim(e.target.value)} className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-700 mb-1 block">Observação (opcional)</label>
            <textarea value={observacao} onChange={e => setObservacao(e.target.value)} rows={2} className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Ex: férias de inverno" />
          </div>
          {dias > 0 && (
            <div className={`p-3 rounded-lg text-sm ${excedeSaldo ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-slate-50 text-slate-700'}`}>
              <div className="flex justify-between"><span>Dias do período:</span><strong>{dias}</strong></div>
              <div className="flex justify-between"><span>Saldo atual:</span><strong>{colaborador?.saldoEfetivo}</strong></div>
              <div className="flex justify-between border-t border-slate-200 mt-2 pt-2"><span>Saldo após registro:</span><strong>{Math.max(0, saldoAposRegistro)}</strong></div>
              {excedeSaldo && <p className="text-xs mt-2 flex items-center gap-1"><AlertTriangle className="w-3 h-3" />Período excede saldo disponível</p>}
            </div>
          )}
        </div>
        <div className="px-6 py-4 border-t border-slate-200 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">Cancelar</button>
          <button disabled={!podeSalvar} onClick={() => onSalvar({ colaboradorId: colaborador.id, dataInicio, dataFim, observacao })} className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed">Salvar</button>
        </div>
      </div>
    </div>
  );
}

function ModalNovoColaborador({ onClose, onSalvar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [time, setTime] = useState('Tecnologia');
  const [dataAdmissao, setDataAdmissao] = useState('');
  const podeSalvar = nome && email && cargo && dataAdmissao;
  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Novo colaborador</h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-lg"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-6 space-y-4">
          <div><label className="text-xs font-medium text-slate-700 mb-1 block">Nome completo</label><input value={nome} onChange={e => setNome(e.target.value)} className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
          <div><label className="text-xs font-medium text-slate-700 mb-1 block">E-mail</label><input value={email} onChange={e => setEmail(e.target.value)} placeholder="nome@lekto.com.br" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
          <div><label className="text-xs font-medium text-slate-700 mb-1 block">Cargo</label><input value={cargo} onChange={e => setCargo(e.target.value)} className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
          <div>
            <label className="text-xs font-medium text-slate-700 mb-1 block">Time</label>
            <select value={time} onChange={e => setTime(e.target.value)} className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Tecnologia</option><option>Operações</option><option>Administrativo</option><option>Educação</option>
            </select>
          </div>
          <div><label className="text-xs font-medium text-slate-700 mb-1 block">Data de admissão</label><input type="date" value={dataAdmissao} onChange={e => setDataAdmissao(e.target.value)} className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
        </div>
        <div className="px-6 py-4 border-t border-slate-200 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">Cancelar</button>
          <button disabled={!podeSalvar} onClick={() => onSalvar({ nome, email, cargo, time, dataAdmissao })} className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed">Cadastrar</button>
        </div>
      </div>
    </div>
  );
}