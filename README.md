# 📁 ProjectInBio

Projeto desenvolvido com Next.js, React e TypeScript, focado em criação e gerenciamento de links personalizados para páginas de perfil (estilo link-in-bio).

---

## 🚀 Tecnologias Utilizadas

- **Next.js** (App Router)
- **React** com componentes reutilizáveis
- **TypeScript**
- **Tailwind CSS** para estilização
- **Firebase** (suporte incluído no projeto)
- **ESLint + Prettier**
- **Auth.js** (estrutura para autenticação via `/api/auth`)

---

## 📂 Estrutura do Projeto

```
projectinbio/
├── app/                    # Rotas principais (App Router)
│   ├── criar/              # Página para criação de links
│   ├── [profileId]/        # Página dinâmica de perfis
│   ├── layout.tsx          # Layout base
│   └── page.tsx            # Página inicial
│
├── actions/                # Funções assíncronas como criação/verificação de links
│
├── api/                    # Rotas de API (Next.js)
│   └── auth/               # Auth.js route handler
│
├── components/             # Componentes reutilizáveis
│   ├── commons/            # Ex: Landing page
│   └── ui/                 # Inputs, botões, etc.
│
├── lib/                    # Arquivos auxiliares (ex: auth, firebase)
│
├── public/                 # Imagens públicas
│
├── styles/                 # Estilos globais (via globals.css)
│
├── .env                    # Variáveis de ambiente
├── tailwind.config.ts      # Configuração do Tailwind
├── tsconfig.json           # Configuração TypeScript
└── README.md               # Este arquivo :)
```

---

## 📌 Funcionalidades já implementadas

- Formulário de criação de link com validação
- Verificação assíncrona se o link já está em uso
- Componente `TextInput` e `Button` reutilizáveis
- Organização modular e escalável

---

## ▶️ Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar o projeto em modo dev
npm run dev
```

> Certifique-se de ter um arquivo `.env` com suas configurações do Firebase e autenticação.

---

## 📄 Licença

Este projeto é open-source. Sinta-se livre para usar, estudar e melhorar.
