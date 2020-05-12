![logo](https://img.elo7.com.br/product/original/1C553C0/painel-festa-2x1m-dragon-ball-super-goku.jpg)

# Dragon Ball API - BR ![Node.js CI](https://github.com/magomes-dev/db-api-br/workflows/Node.js%20CI/badge.svg) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6U8D2DA5C4N6N&source=url)
Dragon Ball API - BR é uma API RESTful inspirada na série de televisão Dragon Ball. Uma base de dados colaborativa com as principais informações dos personagens como: nome, planeta de origem, saga de origem e raça.

## Uso da API
A API está disponivel em https://db-api-br.herokuapp.com/ </br>
[Consulte aqui](https://documenter.getpostman.com/view/2137744/SzYbzHpb) a documentação completa da API 

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
### Docker Compose
No terminal navegue até a raiz do projeto
``` bash
 $ docker-compose up
```

### Migrations
Após subir os containers no docker, em uma nova janela do terminal navegue até a raiz do projeto:
``` bash
 $ npx sequelize db:migrate  
```

### Seeds
Para popular a base de dados local com alguns dados iniciais:
``` bash
 $ npx sequelize db:seed:all  
```
### Acesso
 - A API estará rodando localhost na porta 8080, você pode logar com o usuário: admin, senha: 123456
 - O banco de dados estará rodando localhost na porta 3306, você pode logar com o usuário: root, senha: root

## Construído com:
* Node.JS
* Express.Js - Rotas
* ExpressJwt, JsonWebToken - Autenticação JWT
* Joi - Schemas das entidades para POST e PUT
* Express-rate-limit - Limitar operações por IP
* MariaDb - Banco de dados
* Sequelize - ORM

## RoadMap
* Implementar teste de unidade.
* Implementar uma interface web.

### Autor
* **Matheus Gomes** - [LinkedIn](https://www.linkedin.com/in/matheusandradegomes/) - [Instagram](https://www.instagram.com/gomesreal/)

## Agradecimentos
* [Allan Webber](https://github.com/allanweber) - Por ser uma referência tecnica pra mim e por sempre estar disponível para tirar minhas dúvidas técnicas.
* [Paul](https://github.com/phalt) - Criador da [SWAPI](https://swapi.co) e [PokéAPI](https://pokeapi.co) - Inspiração para este projeto.

## Doação :gift_heart:
Se você gostou deste projeto ou apenas se sente generoso, considere me pagar um café :coffee: ou me presentear com uma cerveja :beer: </br> </br>
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6U8D2DA5C4N6N&source=url"><img src="https://svgshare.com/i/KVP.svg" height="40"></a>  


