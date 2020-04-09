![logo](https://img.elo7.com.br/product/original/1C553C0/painel-festa-2x1m-dragon-ball-super-goku.jpg)

# Dragon Ball API - BR (Em construção)
Dragon Ball API - BR é uma API RESTful inspirada na série de televisão Dragon Ball. Uma base de dados colaborativa com as principais informações dos personagens como: nome, planeta de origem, saga de origem e raça.
Após registro e autenticação, o usuário será limitado a 100 consultas a cada 15 minutos e 5 operações de escrita a cada 10 minutos.

## Como obter e executar uma cópia local

### Pré-requisitos 
Certifique-se que tenha instalado em sua máquina
* [Node.Js](https://nodejs.org/en/download/)  
* Npm
* [Docker](https://docs.docker.com/)
* [Git](https://git-scm.com/downloads)

### Clonando o projeto
``` bash
 $ git clone https://github.com/magomes-dev/db-api-br.git
```
### Criando uma instância do MariaDb em um container Docker
``` bash
 $ docker pull mariadb
```
``` bash
 $ docker run -d --name maria -e MARIADB_PASSWORD=root -e MARIADB_USER=dbapi -e MARIADB_DATABASE=db-api-br -p 3306:3306  mariadb
```
### Instalando as dependências do projeto
``` bash
 $ npm install
```
### Executando o projeto
``` bash
 $ npm start
```

### Pronto, a aplicação estará disponível em: localhost:3000

## Uso da API
[Consulte aqui](https://documenter.getpostman.com/view/2137744/SzYbzHpb) a documentação completa da API 

## Construído com:
* Node.JS
* Express.Js - Rotas
* ExpressJwt, JsonWebToken - Autenticação JWT
* Express-rate-limit - Limitar operações por IP
* MariaDb - Banco de dados
* Sequelize - ORM

## RoadMap
* Implementar teste de unidade.
* Implementar uma interface web.

### Autor
* **Matheus Gomes** - [LinkedIn](https://www.linkedin.com/in/matheusandradegomes/) - [Instagram](https://www.instagram.com/gomesreal/)

## Agradecimentos
* [Allan Webber](https://github.com/allanweber) - Por ser uma referência pra mim e por sempre estar disponível para tirar minhas dúvidas técnicas.
* [Paul](https://github.com/phalt) - Criador da [SWAPI](https://swapi.co) e [PokéAPI](https://pokeapi.co) - Inspiração para este projeto.
