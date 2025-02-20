# Projeto Listagem de Vendas

## Ideia
O objetivo deste projeto é permitir que o usuário liste, cadastre, edite e exclua vendas.

## Requisitos
- Ao **editar** uma venda, um modal deve ser aberto com os dados já preenchidos.
- Ao **deletar** uma venda, apenas aquela venda específica deve ser removida.
- Ao clicar em **"Novo"**, o usuário deve ser redirecionado para uma nova tela de cadastro de vendas.
- Ao clicar no botão **"Salvar"**, o usuário deve ser redirecionado para a tela de listagem de vendas.
- O projeto inicia com 3 dados **mockados**, contendo os campos **Nome**, **Valor** e **ID**.

## Tecnologias Utilizadas
- **React** com **Next.js**
- **Zustand** para gerenciamento de estado
- **Zod** para validação de formulário
- **React Hook Form** para manipulação de formulários
- **UUID** para geração de IDs únicos

## Estrutura do Projeto
O projeto é estruturado de forma modular, contendo os seguintes componentes principais:

### **1. Formulário de Vendas (`SaleForm.tsx`)**
Componente responsável por capturar os dados de uma venda e validá-los antes do envio.

### **2. Estado Global (`useSalesStore.ts`)**
Gerenciamento centralizado das vendas utilizando a biblioteca **Zustand**, garantindo manipulação eficiente dos dados.

### **3. Listagem de Vendas (`SalesList.tsx`)**
Componente responsável por exibir a lista de vendas, possibilitando edição e remoção.

### **4. Tela de Cadastro de Venda (`NewSaleForm.tsx`)**
Interface onde novas vendas podem ser adicionadas.

## Como Rodar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/pedrocarvalho3/sales-list.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. Acesse o projeto no navegador em `http://localhost:3000`

## Melhorias Futuras
- Integração com uma API para persistência dos dados.
- Implementação de autenticação de usuários.
- Adição de filtros e ordenação na listagem de vendas.

## Autor
- Nome: Pedro Vinícius de Carvalho
