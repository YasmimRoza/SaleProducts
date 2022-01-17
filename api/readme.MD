# Configurações para utilizar o projeto

1 - Vá ao terminal e faça:

- npm i

2 - Vá a pasta "config/config.json" e adicione:
- sua senha
- nome do banco
- e o seu host.

3 - Vá ao Mysql e crie o banco nele, com o mesmo nome que informado no config.json

- Tudo isso feito

4 - Vá ao terninal e execute

- npx sequelize-cli db:migrate

- Ele irá criar as tabelas

## Configurando as rotas

1 - Rota padrão, use "json" todas as rotas :

- http://localhost:8000

2 - Fazendo o CRUD de Usuarios

- Post:   /user
  - Para colocar no Body:
{
	"name": "Yasmim Roza",
	"email": "yasmimroza@teste.com.br",
	"password": "soumaravilhosa"
}

- Update: /user/" informe o id"

  - use um dos campos acima no body

- Get: /user

  - Irá listar todos os usuarios

- Get: /user/"informe o id"

  - Irá procurar o usuario com esse id

- Delete: /user/"informe o id"

3 - Fazendo o CRUD de Produtos

- Post:   /product/user/"informe o id do usuario"
  - Para colocar no Body:
{
	"name": "Bola",
	"category": "Brinquedo",
	"describe": "Feito de plástico",
	"stock": 100,
	"price": 30
}

- Update: /product/"id do produto"/user/"id do usuario"

  - use um dos campos acima no body

- Get: /product

  - Irá listar todos os product

- Get: /product/"id do usuario"

  - Irá procurar todos os produtos cadastrados por esse usuario

- Delete: /product/"id do produto"/user/"id do usuario"


4 - Fazendo o Create, Delete e ListSearch de Images

  - Create: /image/"id do produto"

    - Use Multipart Form, não use o json
    - campo: "files"
    - Você pode adicionar até 5 imagens em um produto
    - Tipos: jpeg, jpg e png

  - Get : /image/"id do produto"

    - Irá listar todos as imagens dos produtos

  - Delete : /image/"id do produto"

    - Irá deletar todos as imagens dos produtos
