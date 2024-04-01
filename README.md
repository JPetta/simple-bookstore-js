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
- Endpoint: POST /api/users
-- Request Body: JSON object containing user data (username, password, role)

#### Login User
- Endpoint: POST /api/users/login
-- Request Body: JSON object containing username and password

### Book Endpoints
#### Create Book
- Endpoint: POST /api/books
-- Headers: Token {{token}}
-- Request Body: JSON object containing book data (title, writer, cover_image, point, tag)

#### Get All Books
- Endpoint: GET /api/books
-- Headers: Token {{token}}

#### Get Book by ID
- Endpoint: GET /api/books/:id
-- Headers: Token {{token}}

#### Update Book
- Endpoint: PUT /api/books/:id
-- Headers: Token {{token}}
-- Request Body: JSON object containing updated book data

#### Delete Book
- Endpoint: DELETE /api/books/:id
-- Headers: Token {{token}}

### Transaction Endpoints
#### Create Transaction
- Endpoint: POST /api/transactions
-- Headers: Token {{token}}
-- Request Body: JSON object containing user_id and book_id

#### Get All Transactions
- Endpoint: GET /api/transactions
-- Headers: Token {{token}}

#### Delete Transaction
- Endpoint: DELETE /api/transactions/:id
-- Headers: Token {{token}}
