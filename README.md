# API Jr.Entregas

## Descrição:
Back-end do app da empresa Jr.Entregas,
uma empresa de gerenciamento de entregas por aplicativo. 

## Tecnologias principais utilizadas:
Node.JS, Typescript, Postgres, Typeorm, JWT, Docker, Jest. 


# Como executar o projeto:
Clone o repositório. <br>
No terminal do diretório do projeto execute o comando "yarn".

PARA CRIAR O BANCO DE DADOS <br>
Com o docker instalado, execute o comando "docker-compose up", <br>
e comando "yarn typeorm migration:run".


# Cadastro de pedidos

**RF**
Deve ser possível cadastrar um novo pedido.

**RN**
Não deve ser possível cadastrar o mesmo pedido mais de uma vez.
O usuário deverá estar logado no sistema para cadastrar.


# Listagem de pedidos

**RF**
Deverá ser possivel listar os pedidos pendentes de acordo com as respectivas cidades.

**RN**
Apenas entregadores deverão ter acesso a listagem.
O entregador deverá estar logado no sistema.


# Cadastro de cidades

**RF**
Deve ser possível cadastrar uma nova cidade.
Deve ser possível listar todas as cidades.

**RN**
Não deve ser possível cadastrar uma cidade já existente no sistema.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de formas de pagamento

**RF**
Deve ser possível cadastrar uma nova forma de pagamento.
Deve ser possível listar todas as formas de pagamento.

**RN**
Não deve ser possivel cadastrar uma forma de pagamento já existente no sistema.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Entregas

**RF**
Deve ser possível aceitar uma nova entrega de acordo com um pedido.

**RN**
O processo de entrega terá duração mínima de 24 horas.
Não deve ser possível que o entregador aceite o mesmo pedido mais de uma vez.
