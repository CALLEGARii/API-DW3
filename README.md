📚 Projeto Salas de Aula
Este é um projeto simples, desenvolvido com Node.js, Express e Sequelize, para gerenciar salas de aula. Ele utiliza o EJS como motor de template e Bootstrap para estilização.

🚀 Como Usar
Pré-requisitos
Certifique-se de ter Node.js e MySQL instalados.

1. Configurar o Banco de Dados
Crie um banco de dados chamado escola_db no seu MySQL.

Observação: As credenciais de acesso padrão no config/db.js são root sem senha. Altere se necessário.
-----------------------------------------------------------------------------------------------------
2. Instalar as Dependências
Abra o terminal na pasta do projeto e execute:

npm install
----------------------------------------------------------------------------------------------------
3. Iniciar o Servidor
Execute o comando:

npm run dev
O servidor será iniciado em http://localhost:3000.
---------------------------------------------------------------------------------------------------
4. Acessar a Aplicação
Acesse a URL http://localhost:3000/salas no seu navegador para ver a lista de salas.

🛠️ Tecnologias
Node.js

Express

Sequelize

EJS

Bootstrap
---------------------------------------------------------------------------------------
📂 Estrutura do Projeto
projeto/
├── config/              # Configuração do banco de dados
├── controllers/         # Lógica de negócio da API
├── models/              # Modelos de dados do Sequelize
├── routes/              # Rotas da API
├── views/               # Páginas EJS
├── package.json         # Dependências e scripts
└── server.js            # Arquivo principal do servidor
