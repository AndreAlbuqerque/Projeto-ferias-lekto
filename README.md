# Gestão de Férias · Lekto (Protótipo)

Protótipo navegável do sistema de gestão de férias. Construído com **React + Vite + Tailwind**.

> ⚠️ Os dados deste protótipo são **100% fictícios**. Nenhum colaborador real da Lekto está representado aqui.

---

## Pré-requisitos

Você precisa ter o **Node.js 18 ou superior** instalado.

### Como verificar se já tem
Abra um terminal e rode:
```bash
node --version
```
Se aparecer algo como `v18.x.x` ou maior, você está pronto. Se der erro de "command not found", siga abaixo.

### Como instalar (caso não tenha)
- **macOS:** instale via [Homebrew](https://brew.sh): `brew install node`
- **Windows:** baixe o instalador em [nodejs.org](https://nodejs.org) (versão LTS)
- **Linux:** `sudo apt install nodejs npm` (ou via [nvm](https://github.com/nvm-sh/nvm))

---

## Como rodar o projeto

Abra um terminal **na pasta deste projeto** (onde está o arquivo `package.json`) e rode:

### 1. Instalar as dependências (só na primeira vez)
```bash
npm install
```
Isso vai baixar React, Vite, Tailwind e Lucide. Demora cerca de 1-2 minutos. Vai criar uma pasta `node_modules/` com tudo dentro.

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Vai aparecer algo assim no terminal:
```
  VITE v5.x.x  ready in 420 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

O navegador deve abrir sozinho na URL `http://localhost:5173`. Se não abrir, copie esse endereço e cole no navegador.

### 3. Parar o servidor
No terminal, aperte `Ctrl + C`.

---

## Estrutura do projeto

```
lekto-ferias/
├── index.html              ← HTML raiz
├── package.json            ← Dependências e scripts
├── vite.config.js          ← Configuração Vite
├── tailwind.config.js      ← Configuração Tailwind
├── postcss.config.js       ← Configuração PostCSS
└── src/
    ├── main.jsx            ← Entry point (não mexer)
    ├── index.css           ← CSS global (Tailwind)
    └── App.jsx             ← TUDO está aqui: telas, lógica, dados
```

**Todo o código do sistema está em `src/App.jsx`.** Conforme você quiser evoluir, vale quebrar em arquivos menores (componentes separados, motor de cálculo isolado, etc.), mas pra o protótipo está tudo num arquivo só pra facilitar leitura.

---

## O que está implementado

✅ Dashboard com métricas e alertas
✅ Listagem de colaboradores com filtro e busca
✅ Detalhe individual com saldo visual e histórico
✅ Registrar período de férias (com validação de saldo)
✅ Cadastrar novo colaborador
✅ Excluir registro de férias
✅ Export CSV
✅ Motor de cálculo aplicando regras de negócio (15 dias a cada 6 meses, teto de 45)

## O que NÃO está implementado (é protótipo)

❌ Banco de dados — dados ficam só na memória, somem quando você atualiza a página
❌ Autenticação / login
❌ Backend / API
❌ Notificações por e-mail
❌ Edição de cadastro de colaborador
❌ Desligamento

---

## Próximos passos sugeridos

Quando quiser virar isso num sistema real:

1. **Backend:** Node + Postgres é uma boa combinação (alinhado com a stack que vocês já usam em outras coisas). Frameworks como NestJS ou Fastify funcionam bem.
2. **Autenticação:** SSO Google (vocês já têm `@lekto.com.br` no Google Workspace).
3. **Hospedagem inicial:** Vercel/Railway pro frontend, Render/Railway pro backend e banco. Custo baixo.
4. **Roadmap:** ver seção 7 do documento de especificação.

---

## Troubleshooting

**"npm: command not found"** → Node.js não está instalado. Volte para "Pré-requisitos".

**Erro ao rodar `npm install`** → tente apagar a pasta `node_modules/` (se existir) e o arquivo `package-lock.json`, depois rode `npm install` de novo.

**Porta 5173 já em uso** → o Vite vai sugerir outra porta automaticamente, é só aceitar.

**Tela em branco** → abra o console do navegador (F12, aba "Console") e veja a mensagem de erro. Geralmente é alguma dependência que não instalou direito — rode `npm install` de novo.

---

## Documento de especificação

A especificação técnica completa (regras, modelo de dados, casos de uso, roadmap) está no arquivo `Spec_Sistema_Ferias_Lekto.docx` que foi entregue separadamente.
