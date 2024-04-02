# Varcel frontend link : 
# Next.js : https://simple-bookstore-next-jpetta-jovi-petras-projects.vercel.app
# React : https://simple-bookstore-js.vercel.app/

# Running the Frontend
- cd to frontend/simple-bookstore
- run "npm start"

# Running the Backend Server

## 1. Config, Migrate and Seed the Database

Use the Sequelize CLI to migrate the database schema and seed the database with initial data:

- change the config/config.json to your local postgres username and password
- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all

## 2. Start the Server
- Run the following command to start the backend server:
- run "npm run start"

## Endpoints

### User Endpoints
#### Create User
- Endpoint: POST /api/users/register
-- Request Body: JSON object containing user data (username, password, role)

#### Login User
- Endpoint: POST /api/users/login
-- Request Body: JSON object containing username and password

### Book Endpoints
#### Create Book
- Endpoint: POST /api/books
  - Headers: ```{ token : "test_token" }```
  - Request Body: JSON object containing book data (title, writer, cover_image, point, tag)
  - ```
    "title": "The Hobbit",
    "writer": "J.R.R. Tolkien",
    "cover_image": "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
    "point": 9,
    "tag": [
        "fiction",
        "fantasy"
    ]
    ```
    
#### Get All Books
- Endpoint: GET /api/books
  - Headers: ```{ token : "test_token" }```

#### Get Book by ID
- Endpoint: GET /api/books/:id
  - Headers: ```{ token : "test_token" }```

#### Update Book
- Endpoint: PUT /api/books/:id
  - Headers: ```{ token : "test_token" }```
  - Request Body: JSON object containing updated book data
  - ```
    "title": "The Hobbit",
    "writer": "J.R.R. Tolkien",
    "cover_image": "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
    "point": 9,
    "tag": [
        "fiction",
        "fantasy"
    ]
    ```

#### Delete Book
- Endpoint: DELETE /api/books/:id
  - Headers: ```{ token : "test_token" }```

### Transaction Endpoints
#### Create Transaction
- Endpoint: POST /api/transactions
  - Headers: { token : "test_token" }
  - Request Body: JSON object containing book_id
  - ```
    {
      "book_id": "1"
    }
    ```

#### Get All Transactions
- Endpoint: GET /api/transactions
  - Headers: { token : "test_token" }

#### Delete Transaction
- Endpoint: DELETE /api/transactions/:id
  - Headers: { token : "test_token" }
