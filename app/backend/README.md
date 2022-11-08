# API Endpoints
Essa API possui os endpoints abaixo:

<details>

|  | Método | Descrição |
|---|---|---|
| 01 | `POST - http://localhost:3001/login` | Efetua o login do cliente, faz a verificação no banco de dados e retorna o token do cliente. |
| 02 | `GET - http://localhost:3001/login/validate` | Retorna o id do cliente que fez o login  |
| 03 | `GET - http://localhost:3001/client` | Busca todos os clientes  |
| 04 | `GET - http://localhost:3001/client/city` | Busca todos os cliente por cidade. |
| 07 | `GET - http://localhost:3001/client/city` | Busca um pedido específico. |
| 08 | `PATCH - http://localhost:3001/client/:id` | Atualiza os dados do cliente. |


</details>

<br/>

## Validando Token

<details>

- Se o token for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

            {
              "message": "Token not found"
            }

 - Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

            {
              "message": "Token must be a valid token"
            }

</details>

<br/>

## Usando a API
Os exemplos a seguir utilizam o [Isomnia](https://insomnia.rest/) para fazer as requisições, no entanto você pode utilizar a ferramenta que preferir.

## I - Login (`/login`)
#### [POST `/login`]

<details>

+ Request (application/json)
+ Body

    {
	    "name": "Craig",
	    "email": "cmccoy2@bluehost.com"
    }

+ Response 201 Created (application/json)

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.     eyJuYW1lIjoiQ3JhaWciLCJlbWFpbCI6ImNtY2NveTJAYmx1ZWhvc3QuY29tIiwiaWF0IjoxNjY3ODc4NTc2LCJleHAiOjE2Njg0ODMzNzZ9.adSWyEjZ04QmFzvCBAX13S4qm55GAhjmthwhNlO9w6g"
    }

</details>

</details>
