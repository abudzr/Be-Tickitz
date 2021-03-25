<p align="center">
  <a href="" rel="noopener">
 <img width=400px height=200px src="https://bookingtickitz.netlify.app/assets/img/logo.png" alt="logo"></a>
</p>

<h3 align="center">Backend Booking Tickitz - Arkademy</h3>

---

## ✏️ About

This is the repository Backend of the Bootcamp Arkademy task

#### User Endpoint

|  METHOD  |             API             |                    REMARKS                    |
| :------: | :-------------------------: | :-------------------------------------------: |
|  `POST`  |       /users/register       |      Register User and Activation Email       |
|  `POST`  | /users/auth/activate/:token |  Activation Email and input token from email  |
|  `POST`  |        /users/login         |        Sign in with a verified account        |
|  `POST`  |   /users/forgot-password    | Enter your email, if you forget your password |
|  `POST`  |    /users/password-reset    |  check email and enter new token & password   |
|  `GET`   |       /users/:userId        |              Get Data By userID               |
|  `GET`   |           /users            |               Get All Data User               |
|  `PUT`   |       /users/:userId        |              Edit Data By userID              |
| `DELETE` |       /users/:userId        |             Delete Data By userID             |

#### Ticket Endpoint

|  METHOD  |                      API                       |                    REMARKS                    |
| :------: | :--------------------------------------------: | :-------------------------------------------: |
|  `POST`  |                    /tickets                    |          Input Data To Table Ticket           |
|  `GET`   | /tickets/details/movie/:userId&?movie=:movieId |        Get Ticket By userID & movieID         |
|  `GET`   |         /tickets/details/user/:userId          |           Get All Ticket By userID            |
|  `GET`   | /tickets/details/user/:userId?page=xx&limit=xx |     Get Ticket By userID With Pagination      |
|  `GET`   |        /tickets/:userId?name=:movieName        | Get Ticket By userID With Spesific Movie Name |
|  `GET`   |           /tickets?ticketId:ticketId           |            Get Ticket By ticketId             |
|  `PUT`   |      /tickets/:userId?ticketId=:ticketId       |       Edit Ticket By userID & ticketID        |
| `DELETE` |      /tickets/:userId?ticketId=:ticketId       |      Delete Ticket By userID & ticketID       |

### Other endpoints are still in the documentation process

## 💻 Installation

Follow the steps below

1. Clone this repo

```
git clone https://github.com/abudzr/Week4-RestFulAPI.git
cd BE-Ticktiz
```

2. Install module & Import Database

##### Install Module

```
npm install
```

##### Import Database

Import `tickitz.sql` To Your Databases

3. Create env file

```
# ---------------------------------------
#               CONFIG DB
# ---------------------------------------
DB_HOST= #host database
DB_USER= #user database
DB_PASS= #pass database
DB_NAME= #database name

SECRET_KEY = #your secret key
RESET_PASSWORD_KEY = #your secret key

EMAIL_USER = #email
EMAIL_PASSWORD = #email pass

# ---------------------------------------
#            CONFIG GENERAL
# ---------------------------------------
PORT= #port app
HOST= #host/domain app
```

Detail CONFIG GENERAL
| EXAMPLE URL | [http://localhost:8000]() |
| :-------------: |:-------------:|
| PORT | 6000 |
| HOST | [http://localhost]() |

4. Done, You can run it in the way below

##### Developer Mode (with nodemon)

```
npm run dev
```

##### Production Mode (only node)

```
npm start
```

## 🔖 Standard Response & Preview Request By Postman

#### Standard Response API

```json
{
    "status": true,
    "message": "login success",
    "data": [object Object]
}
```

Object data contains content according to the request

#### Preview Request By Postman

![Preview](https://i.ibb.co/McdR01S/sample.png)

## ⛏️ Built Using

- [ExpressJS](https://expressjs.com)
- [MySQL2 Package](https://www.npmjs.com/package/mysql2)
- [CORS Package](https://www.npmjs.com/package/cors)
- [Body Parser Package](https://www.npmjs.com/package/body-parser)
- [Morgan Package](https://www.npmjs.com/package/morgan)
- [DotEnv Package](https://www.npmjs.com/package/dotenv)
- [Nodemon Package](https://www.npmjs.com/package/nodemon)
- [bcryptjs Package](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [multer](https://www.npmjs.com/package/multer)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [redis](https://www.npmjs.com/package/redis)
- [uuid](https://www.npmjs.com/package/uuid)

## 💭 Documentation

[Click Here](https://www.getpostman.com/collections/6b9dbd558d3e28e4e72d)

## ✍️ Authors

- [@abudzr](https://github.com/abudzr)
