# WhaTicket SaaS v6.0.0

<div align="center">
<img src="frontend/src/assets/logo.png" alt="WhaTicket" width="350" height="auto">
</div>

## 📋 Índice

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Requisitos do Sistema](#-requisitos-do-sistema)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Integrações](#-integrações)
- [Atualizações](#-atualizações)
- [Suporte](#-suporte)
- [Licença](#-licença)

## 📝 Sobre

WhaTicket é uma solução SaaS (Software as a Service) para gestão de atendimento multiusuário via WhatsApp. O sistema permite gerenciar múltiplos atendentes e filas de atendimento, com suporte a diversos recursos avançados como Kanban, modo noturno e integrações com várias plataformas.

## ✨ Funcionalidades

- 👥 Gestão de múltiplos atendentes
- 📊 Sistema Kanban para organização de tickets
- 🌙 Modo Noturno
- 📱 Múltiplas conexões de WhatsApp
- 🤖 Chatbot com IA
- 📊 Dashboard e relatórios
- 🔄 Respostas rápidas
- 📅 Sistema de agendamento
- 👑 Painel administrativo
- 🌐 Multi-empresa (SaaS)
- 📲 Notificações em tempo real

## 🛠 Tecnologias

### Backend
- Node.js
- TypeScript
- Express
- Sequelize
- PostgreSQL
- Socket.IO

### Frontend
- React.js
- Material-UI
- Context API
- Socket.IO Client

## 💻 Requisitos do Sistema

### Recomendação de VPS
- **BASIC**: 4 vCores, 6 GB RAM, 100 GB SSD NVMe
- **STANDARD**: 6 vCores, 12 GB RAM, 200 GB SSD NVMe

### Software
- Node.js 20.x
- PostgreSQL
- Redis (opcional)

## 🔌 Integrações

O sistema oferece integração com diversas plataformas:
- 🗣️ DialogFlow
- 🔄 N8N
- 🌐 WebHooks
- 🤖 TypeBot
- 💬 ChatGPT

## 📦 Atualizações Recentes

### 📅 Versão 6.0.0 (16/04/2025)
- 🌑 Melhorias no Darkmode
- 📊 Nova Dashboard
- 🎟️ Layout de tickets atualizado
- ⚡ Novo sistema de respostas rápidas
- 🌍 Suporte a traduções
- 📆 Sistema de agendamento aprimorado

### 📅 Versão 5.5.0 (13/12/2024)
- 📊 Dashboard reformulado
- 📈 Nova página de relatórios
- 🗂️ Kanban atualizado
- 🎧 Melhorias no áudio
- 📲 Gestão de filas aprimorada

## 🆘 Suporte

O sistema inclui suporte básico para questões técnicas. Para suporte adicional ou personalizado, entre em contato com nossa equipe.

## 📄 Licença

Este projeto está sob a licença especificada no arquivo LICENSE.txt.

---

💡 **Nota**: Mantenha seu sistema sempre atualizado para aproveitar as últimas funcionalidades e correções de segurança.

# WhaTicket Versão Saas com Módulo Kanban, Modo Noturno e as seguintes integrações:</br>

🗣️ DialogFlow</br>
🔄 N8N</br>
🌐 WebHooks</br>
🤖 TypeBot</br>
💬 ChatGPT</br>

Sugestão de VPS:

BASIC: 4 vCores, 6 GB de RAM e 100 GB de SSD NVMe $4.99 USD Mensal com taxa de setup de $4.99.

STANDARD: 6 vCores, 12 GB de RAM e 200 GB de SSD NVMe $9.99 USD Mensal com taxa de setup de $5.99.

Informações Importantes:
Apenas Suporte Básico

Notas Internas:</br>
Nova Atualização de Maio de 2025</br>
Mantido Versão 6.0.0</br>
Avaliaremos se os seguintes bugs das versão beta e a de abril foram corrigidos pelo próprio desenvolvedor: 
Erro de Conexão, Erro Mensagem Fora do Expediente, Nome dos dias no modal de filas (ok), não criar faturas (ok), não editar empresas (ok), importar contatos do telefone (nok), não enviar e-mail de recuperação de senha (não testado).

📅 16/04/2025 – Versão 6.0.0

🌑 Correções no Darkmode (dentro das mensagens)</br>
🔄 Botão Light/Dark movido (está no perfil)</br>
📊 Estilos dos cards da Dashboard alterados (removido botão de impressão)</br>
🎟️ Estilo de ticket alterado</br>
⚡ Respostas rápidas (layout novo)</br>
📂 Correção no envio de menu (filas) – na 3ª tentativa é enviado automaticamente para a 1ª fila</br>
🌍 Botão de tradução</br>
⚠️ Aviso de contato (caso o ticket esteja aberto, é emitido um aviso)</br>
🔧 Página de conexão reformulada</br>
👑 Adicionada opção de SuperAdmin (dentro do popup do usuário)</br>
📆 Correção no agendamento (agora envia imagem com texto)</br>
♻️ Agendamento reformulado (com suporte a ciclos)</br> 
🔐 Novo layout da tela de login</br>
📝 Novo layout da tela de signup</br>
🛠️ Correção de vazamento no WebSocket</br>

📅 13/12/2024 – Versão 5.5.0

🛠️ Correção ao redimensionar área de ticket</br>
✅ Validação de número no ContactModal</br>
🔄 Regressão OpenAI para versão 3.3.0 e wbotMessageListener.ts</br>
🎧 Áudio no iPhone</br>
📵 Recusando chamadas automaticamente</br>
📲 Filas da conexão ao requisitar novo QR Code</br>
📊 Dashboard reformulado</br>
📈 Página de relatórios</br>
🗂️ Kanban reformulado</br>

📅 07/11/2024 – Versão 5.3.5

📅 Correção da Data de Vencimento no Topo: Data agora permanece fixa. </br>
🔄 Automação em Grupos: Não envia automações para grupos. </br>
🚫 Botão disableBot: Desabilita bots ou automações. </br>
✉️ Correção de Mensagem Citada. </br>
🔗 Permissão para Conexões com Mesmo Nome. </br>
⏳ Expiração de Conexões: Desconexão automática após vencimento da empresa. </br>
🗑️ Seleção para Deletar Contatos: Opção de seleção para exclusão na página "Contatos". </br>
🎵 Correção no Envio de Áudio OGG em respostas rápidas. </br>
📂 Visualização de Tickets Fechados por Operador: Aba removida do painel de usuários. </br>
📜 Visualização de Grupos por Operador: Aba removida do painel de usuários. </br>
💸 Atualização Financeira após Alteração de Plano: Valor ajustado automaticamente na lista do Financeiro. </br>

24/07/2024 – Versão 5.2.6

✅ Fechar todos os tickets abertos ou em espera. </br>
👍 Reagir a uma mensagem. </br>
🔄 Encaminhar mensagens para outro ticket. </br>
🎨 Aparência do menu aprimorada. </br>
🚪 Botão "Sair" adicionado ao menu. </br>
🗑️ Notificação quando uma mensagem é apagada no WhatsApp, informando no chat. </br>
🔄 API atualizada. </br>
🆕 Novo layout da página de login. </br>
💬 Indicação "Digitando" ou "Gravando" aparece no ticket, no canto inferior direito, ao lado do nome. </br>

Biblioteca Baileys Atualizada:</br>

V 6.7.16

Instalador atualizado, versao NodeJS 20:
