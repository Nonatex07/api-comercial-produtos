# 📦 API Comercial de Produtos

Esta é uma API REST desenvolvida para a disciplina de Back-end, com o objetivo de gerenciar um catálogo de produtos. O projeto demonstra a integração completa entre um servidor **Node.js** e um banco de dados relacional **PostgreSQL**.

## 🚀 Funcionalidades (CRUD)

A API permite realizar as quatro operações fundamentais:
* **POST /produtos**: Cadastra um novo produto (nome e preço).
* **GET /produtos**: Lista todos os produtos cadastrados.
* **PUT /produtos/:id**: Atualiza os dados de um produto existente.
* **DELETE /produtos/:id**: Remove um produto do sistema.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework para construção das rotas da API.
* **PostgreSQL**: Banco de dados relacional para persistência dos dados.
* **node-postgres (pg)**: Driver de conexão entre Node e PostgreSQL.
* **Postman**: Ferramenta utilizada para testes das requisições.

## 📋 Como Executar o Projeto

### 1. Requisitos
* Ter o [Node.js](https://nodejs.org/) instalado.
* Ter o [PostgreSQL](https://www.postgresql.org/) rodando na sua máquina.

### 2. Configuração do Banco de Dados
Abra o seu **pgAdmin** ou terminal SQL e execute o script contido no arquivo:
`database.sql`
*(Este comando criará a tabela `produtos` necessária para o funcionamento).*

### 3. Instalação
Clone este repositório ou baixe os arquivos e, na pasta raiz, execute:
```bash
npm install
