<<<<<<< HEAD
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
=======
# Sender 3.0

<p align="center">
  <img src="https://whatsapp.com/favicon.ico" width="100" alt="WhatsApp Logo">
</p>

<p align="center">
  Sistema completo de atendimento multiusuário via WhatsApp com recursos avançados de automação e gestão de atendimento.
</p>

---

## 📑 Índice

1. [Visão Geral](#-visão-geral)
2. [Recursos](#-recursos)
3. [Tecnologias](#-tecnologias)
4. [Arquitetura](#-arquitetura)
5. [Instalação](#️-instalação)
6. [Configuração](#-configuração)
7. [Uso](#-uso)
8. [API](#-api)
9. [Desenvolvimento](#-desenvolvimento)
10. [Implantação](#-implantação)
11. [Suporte](#-suporte)

## 👀 Visão Geral

O WhaTicket Saas é uma plataforma completa para gestão de atendimento via WhatsApp, desenvolvida para empresas que necessitam de uma solução robusta e escalável para comunicação com clientes. O sistema oferece recursos avançados de automação, integração com IA e uma interface moderna e intuitiva.

### 🎯 Objetivos
- Centralizar atendimentos via WhatsApp
- Automatizar respostas e processos
- Gerenciar equipes de atendimento
- Monitorar performance e métricas
- Integrar com sistemas externos

### 💼 Casos de Uso
- Suporte ao Cliente
- Vendas e Marketing
- Atendimento Automatizado
- Gestão de Equipes
- Análise de Desempenho

## ✨ Recursos

### 🤖 Integrações
- **DialogFlow**: Chatbot inteligente com processamento de linguagem natural
- **N8N**: Automação de fluxos de trabalho
- **WebHooks**: Integração com sistemas externos
- **TypeBot**: Criação de fluxos de conversação
- **ChatGPT**: Respostas inteligentes com IA

### 🚀 Funcionalidades Principais
- **Sistema de Tickets**
  - Fila de atendimento
  - Priorização automática
  - Tags e categorização
  - Histórico completo

- **Gestão de Usuários**
  - Múltiplos níveis de acesso
  - Times e departamentos
  - Metas e métricas
  - Horários de trabalho

- **Automação**
  - Respostas rápidas
  - Mensagens programadas
  - Fluxos automatizados
  - Chatbots integrados

- **Relatórios e Métricas**
  - Dashboard em tempo real
  - Relatórios personalizados
  - Métricas de desempenho
  - Exportação de dados

## 🔧 Arquitetura

### Backend (Node.js + TypeScript)
- **API RESTful**: Express.js
- **Banco de Dados**: Sequelize ORM
- **Websockets**: Socket.io
- **Filas**: Bull + Redis
- **Autenticação**: JWT

### Frontend (React)
- **UI Framework**: Material-UI
- **Estado**: Context API
- **Roteamento**: React Router
- **Formulários**: Formik + Yup
- **Internacionalização**: i18next

## ⚙️ Requisitos do Sistema

### Mínimo
- Node.js 20.x
- MySQL 5.7+ ou PostgreSQL 10+
- Redis 6+
- 4 vCPUs
- 6 GB RAM
- 100 GB SSD

### Recomendado
- Node.js 20.x LTS
- PostgreSQL 14+
- Redis 7+
- 6 vCPUs
- 12 GB RAM
- 200 GB SSD NVMe

## 📚 API

### Endpoints Principais

\`\`\`
POST   /api/auth/login            # Autenticação de usuário
GET    /api/tickets              # Lista de tickets
POST   /api/tickets              # Criar novo ticket
GET    /api/tickets/:id          # Detalhes do ticket
PUT    /api/tickets/:id          # Atualizar ticket
POST   /api/messages            # Enviar mensagem
GET    /api/contacts            # Lista de contatos
GET    /api/reports             # Relatórios
\`\`\`

## 🛠️ Desenvolvimento

### Estrutura do Projeto
\`\`\`
backend/
  ├── src/
  │   ├── controllers/     # Controladores da API
  │   ├── services/        # Lógica de negócios
  │   ├── models/          # Modelos do banco
  │   ├── routes/          # Rotas da API
  │   └── config/          # Configurações
frontend/
  ├── src/
  │   ├── pages/          # Páginas da aplicação
  │   ├── components/     # Componentes React
  │   ├── services/       # Chamadas à API
  │   └── context/        # Contextos globais
\`\`\`

### Fluxo de Desenvolvimento
1. Clone o repositório
2. Configure o ambiente
3. Instale as dependências
4. Execute as migrações
5. Inicie os serviços

## 🚀 Implantação

### Usando Docker
\`\`\`bash
# Em desenvolvimento
\`\`\`

### Instalação Manual
1. **Backend**
\`\`\`bash
cd backend
npm install
npm run build
npm start
\`\`\`

2. **Frontend**
\`\`\`bash
cd frontend
npm install
npm run build
npm start
\`\`\`

## 🔒 Segurança

- Autenticação JWT
- Rate Limiting
- Validação de Entrada
- Sanitização de Dados
- CORS Configurável
- Logs de Auditoria

## 📈 Monitoramento

- Logs do Sistema
- Métricas de Performance
- Alertas Automáticos
- Monitoramento de Erros
- Status das Conexões

## 🤝 Suporte

### Canais de Suporte
- Documentação Online
- Suporte por Email
- Base de Conhecimento
- Atualizações Regulares

### SLA
- Resposta inicial: 24h
- Resolução de bugs: 48h
- Atualizações de segurança: Imediato

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.txt) para mais detalhes.

## ⚠️ Notas Importantes

- Versão atual: 6.0.0
- Última atualização: Maio/2025
- Compatibilidade garantida com Node.js 20.x
- Backup diário recomendado
- Monitoramento constante das conexões WhatsApp
>>>>>>> 0331f79abcaf0ec860627c4b7fed05989ce8e724
