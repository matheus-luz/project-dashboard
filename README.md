# Bem vindo ao repositório Dashboard Native!

Projeto desenvolvido para o desafio técnico da empresa [Native IP](https://nativeip.com.br/)


Criação de uma API REST NodeJS, para consumir informações de clientes e um dashboard para visualizar essas informações em React.js.

<details>
<summary><strong>Estrutura do projeto</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Será um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.
  - Durante a execução dos testes sempre vai ser acessado pelo `sequelize` e via porta `3002` do `localhost`; 
  - Você também pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no docker-compose no serviço `db`.

2️⃣ **Back-end:**
 - Será o ambiente que você realizará a maior parte das implementações exigidas. 
 - Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
 - Sua aplicação deve ser inicializada a partir do arquivo `app/backend/src/server.ts`;
 
3️⃣ **Front-end:**
  - O front se comunica com serviço de back-end pela url `http://localhost:3001`.

4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up` ou `npm run compose:up:dev`;
  - Você **deve** configurar as `Dockerfiles` corretamente nas raízes do `front-end` e `back-end`, para conseguir inicializar a aplicação;
  
<br/>

# Orientações


<details>
<summary><strong>Iniciar o projeto</strong></summary><br />

  1. Clone o repositório
	* `git clone git@github.com:matheus-luz/project-dashboard-native.git`.
- Entre na pasta do repositório que você acabou de clonar:
	* `cd project-dashboard-native`

</details>



<details id='Variaveis-de-ambiente'>
<summary><strong>Variáveis de ambiente </strong></summary><br />

  **No diretório `app/backend/` renomeie o arquivo `.env.example` para `.env` e configure os valores de acordo com o cenário do seu ambiente (credenciais de banco de dados, secrets desejadas e etc)**. Isso vai permitir que você inicialize a aplicação fora do _container_ e ela se conecte com seu banco local caso deseje. 
 > `./app/backend/.env.example` 
  ```txt
  JWT_SECRET=jwt_secret
  APP_PORT=3001
  DB_USER=seu_user
  DB_PASS=sua_senha
  DB_HOST=localhost 
  DB_PORT=3306
  ```


  **⚠️ Não defina variável de ambiente para o nome do banco, o mesmo deve se manter com o nome `DASHBOARD_NATIVE`. ⚠️**

</details>


<details>
  <summary><strong>Dicas e comandos úteis </strong></summary><br />

  - Quando um Workspace é inicializado na raiz do projeto, são apresentados alguns erros no Typescript. Para que o editor consiga sincronizar corretamente as configurações do `tsconfig.json`, é necessário iniciar um novo Workspace dentro do diretório `backend`.  Sempre que o VSCode apresentar algum erro de configuração do Typescript, certifique-se de que está usando o Workspace correto. 
  - Ao rodar o comando `npm install` na pasta raiz do projeto você automaticamente estará **instalando suas aplicações (front e back)**;
  - Você pode **instalar suas aplicações (front e back)** rodando o comando `npm run install:apps` na pasta raiz do projeto;
  - Você pode rodar o avaliador **mostrando as operações que o navegador vai fazer no front-end** durante os testes E2E utilizando o comando `npm run test:browser`;
  - Você pode **debugar alguns erros do avaliador** (como por exemplo a validação do banco de dados, ou da compilação do TS), onde são *printadas* na tela algumas infos adicionais, utilizando o comando `npm run test:debug`;
  - Você pode **subir ou descer uma aplicação do compose**, utilizando `npm run` com os scripts `compose:up`, `compose:down`, ou `compose:up:dev`, `compose:down:dev`;

</details>
</details>


<details>
<summary><strong>Tecnologias</strong></summary><br />

  **Ferramentas Utilizadas**
- Docker
- Eslint
- React.js
- context API
- Node.js
- Express
- MySQL
- ORM Sequelize
- Typescript
- Json Web Token

