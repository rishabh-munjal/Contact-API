# Contact Management System API

## Description
The Contact Management System API allows users to manage their contacts efficiently. It provides authentication and CRUD operations for contacts using Node.js, Express, and JWT-based authentication.

## Features
- User authentication (Register/Login)
- Create, Read, Update, and Delete (CRUD) contacts
- Fetch contacts by user ID
- Secure routes with authentication middleware

## Tech Stack
- Node.js
- Express.js
- MongoDB 
- JWT Authentication

## Installation

1. Clone the repository:
   

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure the following variables:
   ```env
   PORT=3000
   MONGO_DB=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Routes

### User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Login user and receive a JWT token |

### Contact Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact/new` | Create a new contact (Authenticated) |
| GET | `/api/contact/` | Get all contacts |
| GET | `/api/contact/:id` | Get a specific contact by ID |
| PUT | `/api/contact/:id` | Update a contact by ID (Authenticated) |
| DELETE | `/api/contact/:id` | Delete a contact by ID (Authenticated) |
| GET | `/api/contact/userid/:id` | Get contacts by user ID |

## Authentication
- Authentication is handled via JWT tokens.
- Users must include a valid token in the `Authorization` header for protected routes.
- Example:
  ```bash
  Auth: Bearer your_jwt_token
  ```

## Middleware
- `isAuthenticated`: Ensures the user is logged in before accessing protected routes.

## Future Enhancements
- Implement pagination for large contact lists.
- Add search and filtering options.
- Integrate a frontend for easier management.

## License
This project is open-source and available under the MIT License.

