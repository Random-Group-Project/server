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

**LIST ACTIVITIES**
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
    [
      {
        "id": 3,
        "name": "Go to an escape room",
        "gif_url": "https://media3.giphy.com/media/l0OWistc2HUjf6PKM/giphy.gif?cid=78d249f9fd967b41c0c420a945a4904eadb1b3cf35d8f048&rid=giphy.gif",
        "UserId": 3,
        "createdAt": "2020-03-06T08:10:30.134Z",
        "updatedAt": "2020-03-06T08:10:30.134Z"
      }
    ]
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

----

**GENERATE ACTIVITIES**
----
  
* **URL**

  `http://localhost:3000/activities/create`

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
      "message": "Generate activity successful",
      "newActivity": {
          "id": 3,
          "UserId": 3,
          "name": "Go to an escape room",
          "gif_url": "https://media3.giphy.com/media/l0OWistc2HUjf6PKM/giphy.gif?cid=78d249f9fd967b41c0c420a945a4904eadb1b3cf35d8f048&rid=giphy.gif",
          "updatedAt": "2020-03-06T08:10:30.134Z",
          "createdAt": "2020-03-06T08:10:30.134Z"
        }
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`
