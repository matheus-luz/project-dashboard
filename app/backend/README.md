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

## 1 - Login (`/login`)
#### [POST `/login`]

<details>

+ Request (application/json)
+ Body

    {
	    "email": "luz.matheus11@gmail.com",
	    "password": "12345"
    }

+ Response 201 Created (application/json)

    {
	    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1ei5tYXRoZXVzMTFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NSIsImlhdCI6MTY2Nzk3Mzc5MiwiZXhwIjoxNjY4NTc4NTkyfQ.msMDR0J5sypS-Vx4e7655NxGGD17NpQgdlV_1INRv1E"
    }

</details>

## 2 - GET (`/city`)
#### [GET `/city`]

<details>

+ Response 200 OK (application/json)

  [
    {
      "id": 1,
      "name": "Warner, NH"
    },
    {
      "id": 2,
      "name": "East Natchitoches, PA"
    },
    {
      "id": 3,
      "name": "Lyon, WV"
    },
    {
      "id": 4,
      "name": "Willow Run, IL"
    },
    {
      "id": 5,
      "name": "Conyersville, AZ"
    },
    {
      "id": 6,
      "name": "Mount Baker, NY"
    },
  ]

</details>

## 3 - GET (`/city/id`)
#### [GET `/city/1`]

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
          "id": 1,
          "name": "Warner, NH"
        },
        "office": {
          "name": "Biostatistician III"
        }
      }
  ]

</details>

## 4 - GET (`/client`)
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

## 5 - GET (`/client/:id`)
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

## 6 - PATCH (`/client/`)
#### [PATCH `/client/`]


<details>

+ Request (application/json)
+ Body

    {
      "email": "lrichards0@reverbnation.com",
      "gender": "Masculino",
      "companyId": 2,
      "cityId": 2,
      "titleId": 3
    }

+ Response 200 OK (application/json)

    "Updated"

</details>

</details>
