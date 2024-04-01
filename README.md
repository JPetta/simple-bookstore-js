# Running the Backend Server

## 1. Migrate and Seed the Database

Use the Sequelize CLI to migrate the database schema and seed the database with initial data:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
2. Start the Server
Run the following command to start the backend server:

bash
Copy code
npm run start
Endpoints
Book Endpoints
Create Book

Endpoint: POST /api/books
Request Body: JSON object containing book data (title, writer, cover_image, point, tag)
Get All Books

Endpoint: GET /api/books
Get Book by ID

Endpoint: GET /api/books/:id
Update Book

Endpoint: PUT /api/books/:id
Request Body: JSON object containing updated book data
Delete Book

Endpoint: DELETE /api/books/:id
User Endpoints
Create User

Endpoint: POST /api/users
Request Body: JSON object containing user data (username, password, role)
Login User

Endpoint: POST /api/users/login
Request Body: JSON object containing username and password
Transaction Endpoints
Create Transaction

Endpoint: POST /api/transactions
Request Body: JSON object containing user_id and book_id
Get All Transactions

Endpoint: GET /api/transactions
Delete Transaction

Endpoint: DELETE /api/transactions/:id
Make sure to replace /api with your actual API route prefix if applicable. Adjust the endpoint URLs and request/response formats according to your backend implementation.
