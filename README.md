# Sender - Sistema de Gerenciamento de Contatos e Mensagens

## 📋 Descrição
O Sender é uma aplicação web completa para gerenciamento de contatos e mensagens, com recursos de importação/exportação e integração com WhatsApp.

## 🏗️ Estrutura do Projeto

### Frontend (`/frontend`)
Interface do usuário desenvolvida com:
- React.js
- Material-UI para componentes de interface
- Sistema de tradução integrado (i18n)

#### Principais Funcionalidades do Frontend:
- Gerenciamento de Contatos
  - Importação via CSV
  - Exportação para CSV
  - Visualização em lista
  - Edição e exclusão de contatos
- Relatórios
  - Tickets
  - Grupos
  - Exportação em PDF

### Backend (`/backend`)
API RESTful desenvolvida com:
- Node.js
- Express
- TypeScript
- Integração com banco de dados

#### Principais Funcionalidades do Backend:
- API para gerenciamento de contatos
- Processamento de arquivos CSV
- Validação de números de telefone
- Sistema de autenticação
- Integração com WhatsApp

## 🚀 Recursos Principais

### Gerenciamento de Contatos
- Importação de contatos via CSV
  - Formato padronizado com delimitador ";"
  - Campos: nome, número e email
- Exportação de contatos para CSV
  - Mesmo formato da importação para garantir compatibilidade
- Validação automática de números de telefone
- Verificação de duplicatas

### Sistema de Mensagens
- Integração com WhatsApp
- Gerenciamento de tickets
- Suporte a mensagens em grupo

### Relatórios
- Geração de relatórios em PDF
- Estatísticas de mensagens
- Análise de grupos

## 🛠️ Tecnologias Utilizadas

### Frontend
- React.js
- Material-UI
- React Query
- i18n (Internacionalização)
- Axios

### Backend
- Node.js
- Express
- TypeScript
- Multer (upload de arquivos)
- CSV Parser
- XLSX (processamento de planilhas)

## 🔧 Configuração e Instalação

### Requisitos
- Node.js
- NPM ou Yarn
- Banco de dados compatível

### Instalação

1. Clone o repositório
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Frontend
```bash
cd frontend
npm install
npm start
```

3. Backend
```bash
cd backend
npm install
npm run dev
```

## 📄 Licença
Este projeto está sob a licença incluída no arquivo LICENSE.txt

## 🤝 Contribuição
Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter pull requests. 