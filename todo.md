# Bairro Solidário - TODO

## Funcionalidades Principais

### Autenticação e Onboarding
- [ ] Tela de login com email/telefone
- [ ] Confirmação de localização do bairro
- [ ] Tela de boas-vindas

### Navegação Principal
- [x] Tab bar com 5 abas (Início, Mapa, Emergência, Chat, Perfil)
- [x] Ícones customizados para cada aba
- [ ] Transições suaves entre abas

### Tela Inicial (Home)
- [x] Resumo de alertas recentes
- [x] Botão de emergência flutuante (FAB) destacado em vermelho
- [x] Lista de atividades próximas
- [ ] Notificações de eventos comunitários

### Mapa do Bairro
- [ ] Integração com expo-maps
- [x] Filtros por tipo de ocorrência (suspeita, furto, acidente, iluminação, barulho, etc.)
- [ ] Marcadores de ocorrências no mapa
- [ ] Detalhes ao tocar em marcador
- [ ] Botão para adicionar nova ocorrência
- [ ] Atualização em tempo real de marcadores

### Sistema de Ocorrências
- [ ] Modal para adicionar nova ocorrência
- [ ] Seleção de tipo de ocorrência
- [ ] Campo de descrição (máx 280 caracteres)
- [ ] Captura de foto/vídeo
- [ ] Confirmação automática de localização
- [ ] Sistema de confirmação (3+ confirmações = alerta elevado)
- [ ] Timestamp de cada ocorrência

### Botão de Ajuda Imediata (Emergência)
- [x] Botão grande e destacado na tela de emergência
- [ ] Compartilhamento automático de localização
- [ ] Alerta para vizinhos próximos
- [ ] Chat rápido com vizinhos
- [x] Integração com números de emergência (polícia, SAMU)
- [x] Histórico de emergências

### Chat por Rua/Bairro/Emergência
- [x] Abas: Chat da Rua | Chat do Bairro | Chat de Emergência
- [x] Lista de mensagens com timestamps
- [x] Campo de input para mensagens
- [ ] Indicador de digitação
- [ ] Notificações de novas mensagens
- [ ] Persistência de mensagens

### Rede de Câmeras Voluntárias
- [ ] Mapa com marcadores de câmeras cadastradas
- [ ] Modal para cadastrar nova câmera
- [ ] Informações da câmera (endereço, tipo, horários)
- [ ] Histórico de compartilhamento de gravações
- [ ] Sistema de solicitação de gravações

### Alerta de Veículos Suspeitos
- [ ] Lista de veículos suspeitos registrados
- [ ] Modal para adicionar novo veículo
- [ ] Campos: placa, modelo, cor, foto
- [ ] Contador de avistamentos
- [ ] Alerta automático ao atingir 3+ confirmações
- [ ] Histórico de avistamentos

### Rede de Apoio Comunitária
- [ ] Categorias de apoio (carona, idoso, cachorro perdido, objeto encontrado, etc.)
- [ ] Modal para criar novo pedido de apoio
- [ ] Lista de pedidos ativos
- [ ] Chat direto com quem oferece ajuda
- [ ] Marcação de pedidos como resolvidos

### Perfil do Usuário
- [x] Exibição de informações do morador
- [x] Configurações de notificações
- [x] Histórico de contribuições
- [x] Configurações de privacidade
- [x] Logout

### Backend e Banco de Dados
- [ ] Schema de usuários
- [ ] Schema de ocorrências
- [ ] Schema de mensagens
- [ ] Schema de câmeras
- [ ] Schema de veículos suspeitos
- [ ] Schema de pedidos de apoio
- [ ] API endpoints para CRUD
- [ ] Autenticação com JWT
- [ ] Validação de dados

### UI/UX e Polimento
- [ ] Tema de cores customizado
- [ ] Feedback haptic em ações principais
- [ ] Animações suaves
- [ ] Loading states
- [ ] Error handling
- [ ] Empty states
- [ ] Responsividade mobile

### Testes
- [ ] Testes unitários de componentes
- [ ] Testes de integração de API
- [ ] Testes de fluxos principais
