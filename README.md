# RESTful API

Implemenntation of common known API methods

## JWT authentication

current available routes and methods

| Methods |       Route        |  Access   |              Description |
| ------- | :----------------: | :-------: | -----------------------: |
| POST    |     /api/users     |  Public   |            Register user |
| POST    |  /api/users/auth   |  Public   |        Authenticate user |
| POST    | /api/users/logout  |  Public   |              Logout user |
| GET     | /api/users/profile | Protected | Get current user profile |
| PUT     | /api/users/profile | Protected | Update current user data |
