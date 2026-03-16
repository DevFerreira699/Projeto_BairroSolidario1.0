# Design do Bairro Solidário

## Visão Geral
O **Bairro Solidário** é um aplicativo de segurança e solidariedade comunitária que conecta moradores através de um mapa interativo, alertas em tempo real e canais de comunicação. O design segue as diretrizes de interface do iOS (HIG) com foco em usabilidade mobile em orientação portrait (9:16) e uso com uma mão.

---

## Paleta de Cores

| Elemento | Cor | Uso |
|----------|-----|-----|
| **Primary** | `#DC2626` (Vermelho Alerta) | Botão de emergência, alertas críticos |
| **Secondary** | `#2563EB` (Azul Confiança) | Ações secundárias, informações |
| **Success** | `#16A34A` (Verde Confirmação) | Confirmações, status positivo |
| **Warning** | `#EA580C` (Laranja Aviso) | Avisos, ocorrências moderadas |
| **Background** | `#FFFFFF` (Branco) | Fundo principal (light mode) |
| **Surface** | `#F3F4F6` (Cinza Claro) | Cards, superfícies elevadas |
| **Foreground** | `#1F2937` (Cinza Escuro) | Texto principal |
| **Muted** | `#6B7280` (Cinza Médio) | Texto secundário, placeholders |
| **Border** | `#E5E7EB` (Cinza Borda) | Divisores, bordas |

---

## Lista de Telas

### 1. **Tela de Autenticação (Auth)**
- Entrada para novos moradores
- Login com email/telefone
- Confirmação de localização do bairro

### 2. **Tela Inicial (Home)**
- Resumo de alertas recentes
- Botão de emergência flutuante (FAB) destacado
- Acesso rápido às principais funcionalidades
- Notificações de atividades próximas

### 3. **Mapa do Bairro (Map)**
- Visualização do bairro com marcadores de ocorrências
- Filtros por tipo de ocorrência (suspeita, furto, acidente, etc.)
- Detalhes ao tocar em marcador
- Botão para adicionar nova ocorrência

### 4. **Tela de Emergência (Emergency)**
- Botão grande de "Pedir Ajuda"
- Localização automática
- Chat rápido com vizinhos próximos
- Opção de ligar para polícia/SAMU

### 5. **Chat por Rua (Street Chat)**
- Abas: Rua Atual | Bairro | Emergência
- Lista de mensagens com timestamps
- Campo de input para mensagens
- Indicador de digitação

### 6. **Rede de Câmeras (Cameras)**
- Mapa com marcadores de câmeras cadastradas
- Cadastro de nova câmera
- Histórico de compartilhamento de gravações

### 7. **Alertas de Veículos (Vehicle Alerts)**
- Lista de veículos suspeitos registrados
- Placa, modelo, cor, foto
- Contador de avistamentos
- Alerta automático ao atingir limite

### 8. **Rede de Apoio (Community Support)**
- Pedidos de ajuda (carona, idoso, cachorro perdido, objeto encontrado)
- Categorias de apoio
- Chat direto com quem oferece ajuda

### 9. **Perfil do Usuário (Profile)**
- Informações do morador
- Configurações de notificações
- Histórico de contribuições
- Configurações de privacidade

---

## Fluxos de Usuário Principais

### Fluxo 1: Reportar uma Ocorrência
1. Usuário toca no mapa ou no botão "Adicionar Ocorrência"
2. Seleciona tipo de ocorrência (suspeita, furto, acidente, etc.)
3. Adiciona descrição (máx 280 caracteres)
4. Opcionalmente adiciona foto/vídeo
5. Confirma localização
6. Ocorrência é publicada no mapa
7. Outros usuários podem confirmar

### Fluxo 2: Pedir Ajuda de Emergência
1. Usuário toca no botão vermelho "Pedir Ajuda"
2. Localização é compartilhada automaticamente
3. Vizinhos próximos recebem alerta
4. Chat rápido é aberto
5. Usuário pode ligar para polícia/SAMU
6. Vizinhos podem oferecer ajuda via chat

### Fluxo 3: Comunicação por Rua
1. Usuário abre a aba de chat
2. Seleciona "Chat da Rua", "Chat do Bairro" ou "Emergência"
3. Escreve mensagem
4. Mensagem é entregue em tempo real
5. Outros moradores veem e podem responder

### Fluxo 4: Registrar Veículo Suspeito
1. Usuário toca em "Adicionar Veículo"
2. Insere placa, modelo, cor
3. Opcionalmente adiciona foto
4. Confirma localização
5. Veículo é registrado
6. Sistema monitora avistamentos
7. Alerta automático ao atingir 3+ confirmações

---

## Componentes de Interface

### Botão de Emergência (FAB)
- **Tamanho**: 64px × 64px
- **Cor**: Vermelho (#DC2626)
- **Ícone**: Telefone ou ponto de exclamação
- **Posição**: Canto inferior direito (com padding seguro)
- **Feedback**: Haptic feedback ao tocar

### Card de Ocorrência
- **Estrutura**: Ícone | Tipo | Descrição | Horário | Confirmações
- **Altura**: ~100px
- **Borda**: Cinza claro, sem sombra
- **Feedback**: Opacity 0.7 ao tocar

### Marcador no Mapa
- **Tamanho**: 40px × 40px
- **Cores por tipo**: Vermelho (suspeita), Laranja (acidente), Verde (câmera)
- **Animação**: Pulse suave ao aparecer

### Campo de Mensagem
- **Altura**: 44px
- **Borda**: Cinza claro, rounded 8px
- **Botão enviar**: Azul, ícone de papel de avião
- **Placeholder**: "Escreva uma mensagem..."

---

## Padrões de Navegação

- **Tab Bar**: 5 abas principais (Início, Mapa, Emergência, Chat, Perfil)
- **Modal**: Usado para adicionar ocorrências, registrar câmeras
- **Stack Navigation**: Dentro de cada aba para detalhes

---

## Princípios de Design

1. **Velocidade**: Qualquer ação crítica (emergência, alerta) deve ser feita em < 3 toques
2. **Clareza**: Ícones + texto para todas as ações principais
3. **Confiança**: Cores vermelhas/laranjas para urgência, verdes para confirmação
4. **Acessibilidade**: Tamanho mínimo de toque 44px × 44px
5. **Consistência**: Mesmos padrões de interação em todas as telas
