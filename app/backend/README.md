# API Endpoints
Essa API possui os endpoints abaixo:

## DATABASE
Depois de criar o db no docker ou inserir suas informações no .env

Inicie o banco de dados
  - npm run db:reset

Rodando localmente:

 - npm run dev

<br/>

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

## 1 - Login (`/login`)
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

## 2 - GET (`/login/validate`)
#### [GET `/login/validate`]

Com Authorization já cadastrado

<details>

    {
	    "name": "Craig",
	    "email": "cmccoy2@bluehost.com"
    }

+ Response 200 OK (application/json)

    {
      "id": 3
    }

</details>

## 3 - GET (`/client`)
#### [GET `/client`]

<details>

  + Response 200 OK (application/json)

    [
      {
        "id": 1,
        "first_name": "Laura",
        "last_name": "Richards",
        "email": "lrichards0@reverbnation.com",
        "gender": "Female",
        "company_id": 1,
        "city_id": 1,
        "title_id": 1,
        "company": {
          "name": "Meezzy"
        },
        "city": {
          "name": "Warner, NH"
        },
        "office": {
          "name": "Biostatistician III"
        }
      },
      {
        "id": 2,
        "first_name": "Margaret",
        "last_name": "Mendoza",
        "email": "mmendoza1@sina.com.cn",
        "gender": "Female",
        "company_id": 4,
        "city_id": 3,
        "title_id": 2,
        "company": {
          "name": "Bubblemix"
        },
        "city": {
          "name": "Lyon, WV"
        },
        "office": {
          "name": "VP Marketing"
        }
      },
      {
        "id": 3,
        "first_name": "Craig",
        "last_name": "Mccoy",
        "email": "cmccoy2@bluehost.com",
        "gender": "Male",
        "company_id": 4,
        "city_id": 3,
        "title_id": 3,
        "company": {
          "name": "Bubblemix"
        },
        "city": {
          "name": "Lyon, WV"
        },
        "office": {
          "name": "Senior Sales Associate"
        }
      },
      {
        "id": 4,
        "first_name": "James",
        "last_name": "Moore",
        "email": "jmoore3@apache.org",
        "gender": "Male",
        "company_id": 4,
        "city_id": 4,
        "title_id": 4,
        "company": {
          "name": "Bubblemix"
        },
        "city": {
          "name": "Willow Run, IL"
        },
        "office": {
          "name": "Physical Therapy Assistant"
        }
      },
      ...
    ]

</details>

## 4 - GET (`/client/:id`)
#### [GET `/client/:id`]


<details>

+ Response 200 OK (application/json)

    {
      "id": 3,
      "first_name": "Craig",
      "last_name": "Mccoy",
      "email": "cmccoy2@bluehost.com",
      "gender": "Male",
      "company_id": 4,
      "city_id": 3,
      "title_id": 3,
      "company": {
        "name": "Bubblemix"
      },
      "city": {
        "name": "Lyon, WV"
      },
      "office": {
        "name": "Senior Sales Associate"
      }
    }

</details>

## 5 - PATCH (`/client/:id`)
#### [PATCH `/client/:id`]


<details>

+ Request (application/json)
+ Body

    {
      "email": "poa@dmdm.com.cn",
      "gender": "Masculino",
      "companyId": 2,
      "cityId": 2,
      "titleId": 3
    }

+ Response 200 OK (application/json)

    "Updated"

</details>

## 6 - GET (`/client/city`)
#### [GET `/client/city`]


<details>
  + Request (application/json)
  + Body

    {
      "name": "East Natchitoches, PA"
    }


+ Response 200 OK (application/json)

    [
      {
        "id": 2,
        "first_name": "Margaret",
        "last_name": "Mendoza",
        "email": "poa@dmdm.com.cn",
        "gender": "Masculino",
        "company_id": 2,
        "city_id": 2,
        "title_id": 3,
        "company": {
          "name": "Skipfire"
        },
        "city": {
          "id": 2,
          "name": "East Natchitoches, PA"
        },
        "office": {
          "name": "Senior Sales Associate"
        }
      },
      {
        "id": 3,
        "first_name": "Craig",
        "last_name": "Mccoy",
        "email": "poa@dmdm.com.cn",
        "gender": "Masculino",
        "company_id": 2,
        "city_id": 2,
        "title_id": 3,
        "company": {
          "name": "Skipfire"
        },
        "city": {
          "id": 2,
          "name": "East Natchitoches, PA"
        },
        "office": {
          "name": "Senior Sales Associate"
        }
      }
    ]

</details>

</details>
