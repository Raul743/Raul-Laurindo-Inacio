# Raul-Laurindo-Inacio
This repository was created to make a mamboo challenge, this test require make a api to list tasks, create, update, get one task and remove task.

# Docker, NodeJS, Typescript, DDD, MongoDB, Auth
> RESTful api with Domain Driven Design

## Features
* Docker
* NodeJS (+14)
* Typescript
* MongoDB
* EXPRESSJS
* Eslint
* NPM
* YARN

> ## Design Patterns
* Dependency Injection
* Singleton

> ## Designs
* Clean Architecture
* Conventional Commits
* Use Cases

## Getting Started

Run in development:
1. `docker-compose build/sudo docker-compose build` - no windows/Linux
2. `docker-compose up -d/sudo docker-compose up -d` - Para rodar a o container em backGround
3. `docker-compose up/docker-compose up` - Para rodar a aplicação também
4. Rode um `docker ps/sudo docker ps` - Para verificar se os containers estão rodando

Para rodar a aplicação siga os seguintes passos:
Primeiro: Crie as variáveis de ambiente `.env`, e dentro delas configure as variáveis de ambiente existentes no `.env.example`, é importante copiar esses dados: 
``` JWT_SECRET=d54155e2afdd17f23bbfb7ca6348e69c ```
``` MONGO_INITDB_ROOT_USERNAME=raul233 ```
``` MONGO_INITDB_ROOT_PASSWORD=Laurindo233 ```

## Tech

- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- [Express](https://expressjs.com/) - Node Framweork.
- [CORS](https://github.com/expressjs/cors) - a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Lib to help you hash passwords
- [Json Webtoken](https://github.com/auth0/node-jsonwebtoken) - An implementation of JSON Web Tokens.

### Logging
- [winston](https://github.com/winstonjs/winston) - a multi-transport async logging library for Node.js. It is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each instance of a winston logger can have multiple transports configured at different levels. For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file.
- [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for Node.js. A helper that collects logs from your server, such as your request logs.

