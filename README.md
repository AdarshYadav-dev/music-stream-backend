#  Music Stream Backend using Node.js, Express & MongoDB

A backend API for a music streaming platform built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT (JSON Web Tokens)**, **bcryptjs**, and **Cookies**.

This project demonstrates how authentication works in modern web applications, including user registration, login, password hashing, JWT token generation, cookie-based authentication, and database integration.

---

##  Features

- User Registration API
- User Login API
- MongoDB Database Integration
- Password Hashing using bcryptjs
- JWT Token Generation
- Cookie-Based Authentication
- Environment Variables Configuration
- MVC Architecture
- Mongoose Models
- Error Handling
- Modular Folder Structure

---

##  Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- JSON Web Token (JWT)
- bcryptjs
- Cookie Parser

### Environment Management

- Dotenv

---

##  Project Structure

```bash
music-stream-backend/
│
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── models/
│   │   │── user.model.js
│   │
│   ├── routes/
│   │   │── auth.routes.js
│   │   │── music.routes.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AdarshYadav-dev/music-stream-backend.git
```

### 2. Navigate to Project Directory

```bash
cd music-stream-backend
```

### 3. Install Dependencies

```bash
npm install
```

---

##  Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8080

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

##  Running the Application

Start the server:

```bash
npm start
```

For development:

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:8080
```

---

##  API Endpoints

### Register User

**POST**

```http
/api/auth/register
```

#### Request Body

```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "123456",
  "role": "user"
}
```

#### Success Response

```json
{
  "message": "user registered successfully",
  "user": {
    "id": "...",
    "username": "testuser",
    "email": "test@example.com",
    "role": "user"
  }
}
```

---

### Login User

**POST**

```http
/api/auth/login
```

#### Request Body

```json
{
  "username": "testuser",
  "password": "123456"
}
```

#### Success Response

```json
{
  "message": "User logged in successfully",
  "user": {
    "id": "...",
    "username": "testuser",
    "email": "test@example.com",
    "role": "user"
  }
}
```

---

##  Authentication Flow

### Step 1: User Registration

```http
POST /api/auth/register
```

### Step 2: Hash Password

```javascript
const hash = await bcrypt.hash(password, 10);
```

### Step 3: Store User Data

User information is stored securely in MongoDB.

### Step 4: Generate JWT Token

```javascript
const token = jwt.sign(
  {
    id: user._id,
    role: user.role,
  },
  process.env.JWT_SECRET
);
```

### Step 5: Store Token in Cookie

```javascript
res.cookie("token", token);
```

### Step 6: Verify Password

```javascript
const isPasswordValid = await bcrypt.compare(password, user.password);
```

### Step 7: Authenticate User

If the credentials are valid, access is granted.

---

##  Concepts Practiced

- Express Routing
- Controllers
- MongoDB Integration
- Mongoose Models
- JWT Authentication
- Password Hashing
- Cookie-Based Authentication
- Environment Variables
- Async/Await
- Error Handling
- REST APIs
- MVC Architecture

---

##  Upcoming Features

- Authentication Middleware
- Protected Routes
- Authorization
- Role-Based Access Control
- Music APIs
- Playlist APIs
- Artist Dashboard

---

##  Connect With Me

- GitHub: [AdarshYadav-dev](https://github.com/AdarshYadav-dev)
- LinkedIn: [Adarsh Yadav](https://www.linkedin.com/in/adarsh-yadav-%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-7aa9a1276/)

---

##  License

This project is licensed under the MIT License.
