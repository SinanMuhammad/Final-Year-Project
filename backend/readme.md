# Backend for Folks Analytica

## Install dependencies

Run the command 
    
    npm install

### Dependenicies

    body-parser
    cors
    express
    mysql2
    sequelize

## How to run
    
Run the command
    
    npm start

or
    
    node server.js

## API

### Request Services

----

API to store `Customer Information`, `Services Required` and `Optional Message`.

* **URL**
    
    /services/register

* **Method**
    
    `POST`

* **Data Params**

    **Required:**

    `name=[string]`

    `email=[string]`

    `seo=[boolean]`

    `ssm=[boolean]`

    `ppc=[boolean]`

    `sem=[boolean]`

    `email_marketing=[boolean]`

    `web_dev=[boolean]`

    `branding=[boolean]`

    `seller_support=[boolean]`

    `remarketing=[boolean]`

    `e_commerce=[boolean]`

    `content_marketing=[boolean]`

    `analytics=[boolean]`

    **Optional:**

    `message=[string]`

* **Success Response**
  
  * **Code:** 200 <br />
    **Content:** `{ message: "Message sent" }`
 
* **Error Response:**

  * **Code:** 400  <br />
    **Content:** `{ error : "Couldn\'t send message' "+ error }`