## RANDOM-ORGANIZER-SERVER

**CREATE NEW USER**

----
  
* **URL**

  `http://localhost:3000/users/register` 

* **Method:**
  
  POST
  
*  **URL Params**

   NONE

* **Data Params**

*   **Required:**

  ```javascript
  {
    "email": "mama@mama.com",
    "username": "mamamia",
    "password": "heyylo"
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
      "message": "SUCCESS"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Please fill the email field"`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Please use the email format"`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Please fill the password field"`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Please fill the username field"`

  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----
**LOGIN**
----
  
* **URL**

  `http://localhost:3000/users` 

* **Method:**
  
  POST
  
*  **URL Params**

   NONE

* **Data Params**

*   **Required:**

  ```javascript
  {
    "email": "mama@mama.com",
    "password": "heyylo"
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
      "token": "e8w8a76dg5f65asd4f657asf39f8bsd90j8d",
      "username": "mamamia"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Please fill the email field"`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Please use the email format"`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Please fill the password field"`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Password / email wrong. Please try again"`

  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**GOOGLE LOGIN**

----
  
* **URL**

  `http://localhost:3000/users/googlesign` 

* **Method:**
  
  GET
  
*  **URL Params**

   NONE

*  **HEADERS**

    **Required:**

    `token=[string]`

* **Data Params**

    NONE

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
      "token": "e8w8a76dg5f65asd4f657asf39f8bsd90j8d",
      "username": "mamamia"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**DISPLAY ALL ACTIVITIES**
----
  
* **URL**

  `http://localhost:3000/activities`

* **Method:**

  `GET`
  
*  **URL Params**

    None

*  **URL headers**

    **Required:**

    `token=[string]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      data: "data": [
        {
            id: 5,
            title: "puasa full gk bolong bolong",
            description: "puasa harus full jangan mampir ke warteg",
            status: false,
            due_date: "2020-03-03T16:35:19.171Z",
            UserId: 5,
            GroupId: null,
            createdAt: "2020-03-03T16:35:19.171Z",
            updatedAt: "2020-03-03T16:35:19.171Z",
            User: {
                id: 5,
                username: "user",
                email: "user@mail.com",
                password: "$2a$10$xpb6EM68AqYdRAByKQ/cVeq4ritqH9EJIyNSxI52o0sIzklA9rY7q",
                createdAt: "2020-03-03T16:35:19.141Z",
                updatedAt: "2020-03-03T16:35:19.141Z"
            }
        }
      ]
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`
