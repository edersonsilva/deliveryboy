# DeliveryBoy

Sistema de gerenciamento de entregas desenvolvido com Node.js, TypeScript e Prisma.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Docker

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- Docker e Docker Compose
- Yarn ou npm

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
cd boyentrega
```

2. Instale as dependências:

```bash
yarn install
```

3. Configure o banco de dados:

```bash
yarn prisma generate
```

4. Inicie os containers do Docker:

```bash
docker-compose up -d
```

## 🏃‍♂️ Executando o projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
yarn dev
```

O servidor estará rodando em `http://localhost:3000`

## 📦 Estrutura do Projeto

```
deliveryboy/
├── src/            # Código fonte da aplicação
├── prisma/         # Configurações e migrações do Prisma
├── .vscode/        # Configurações do VS Code
├── docker-compose.yml
├── Dockerfile
├── package.json
└── tsconfig.json
```

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DATABASE_URL="postgresql://user:password@localhost:5432/boyentrega"
JWT_SECRET="sua_chave_secreta"
```

## 📝 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
