# CRUD com Sequelize

## 🎯 Objetivo

Criar um CRUD Usando Typescritpt, princípios SOLID juntamente com banco de dados Postgres e ORM Sequelize

## ⛏️ Ferramentas Utilizadas

-   [Express](https://expressjs.com/)
-   [NodeJs](https://nodejs.dev/) com [Typescript](https://www.typescriptlang.org/)
-   [JWT](https://jwt.io/)
-   [Docker](https://www.docker.com/)
-   [Postgresql](https://www.postgresql.org/)
-   [Sequelize](http://sequelize.org/)
-   [YUP](https://github.com/jquense/yup)

### Pré-requisitos

Para a execução do projeto é necessário possuir o [Node.JS](https://nodejs.org/en/download/) (na sua versão 14.x ou superior), junto com [Docker](https://docs.docker.com/get-docker/).

## 🐋 Usando Docker

Caso esteja utilize Docker para executar o projeto utilize os seguintes comandos:

```bash
docker-compose up # para subir o container e executar junto com a aplicação
docker-compose down # para parar o container após utilizar a aplicação
```

## ⚙ Arquivo de configuração

Aqui você irá criar o arquivo `.env` igual o `.env.example`inserindo os dados conforme é mostrado abaixo:

```bash
PORT=  # porta que a API vai usar
APP_SECRET= # Chave secreta que a aplicação irá usar

# abaixo ira definir os dados de entrada par a conexão com o banco de dados
POSTGRES_PASSWORD=
POSTGRES_USER=
POSTGRES_DB=
POSTGRES_HOST=
POSTGRES_PORT=
```

## 🚀 Instalação

Para instalar as dependências deve usar o seguinte comando:

```bash
yarn
# ou
npm install
```

## 🤖 Executar o projeto

Para executar o projeto utilize o comando:

```
yarn dev
```

## Acesso ao projeto

Após executar o projeto o mesmo poderá ser visualizado através da URL:

`http://localhost:{PORT}/api`

<font color="RED">Para executar sem que ocorrá o `PORT` do arquivo `.env` deve estar setado!</font>

## API

Para acessar a rotas deverá utilizar [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) passando os valores como esta descrito abaixo

### Metódo POST `/login`

Logar o usuário

##### Request

-   Body

```json
{ "email": "Robson@gmail.com", "password": "asdfasdfasdfasdf" }
```

##### Response

```json
{ "token": "token jwt" }
```

### Metódo GET `/logout`

-   desloga o usuário

### Metódo POST `/users`

Criar usuário

```json
{
    "name": "robson",
    "email": "robson@gmail.com",
    "password": "12345678"
}
```

### Metódo GET `/users`

Buscar todos os usuário

-   sem body

### Metódo PATCH `/users`

Alterar um usuário

```json
{
    "id": 1, -> caso ide não seja passado ele irá retornar um erro
    "name": "robson",
    "email": "robson@gmail.com",
    "password": "12345678"
}
```

### Metódo GET `/users/:id`

Alterar um usuário um usuario

### Metódo DELETE `/users/:id`

Deleta um usuário
