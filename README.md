# 🎵 Music Stream Backend using Node.js, Express & MongoDB

A backend API for a music streaming platform built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT (JSON Web Tokens)**, **bcryptjs**, **Cookies**, **Multer**, and **ImageKit**.

This project demonstrates how authentication and authorization work in modern web applications. It includes user registration, login, password hashing, JWT token generation, cookie-based authentication, role-based access control, audio upload functionality, and cloud storage integration.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- User Registration API
- User Login API
- Password Hashing using bcryptjs
- JWT Token Generation
- Cookie-Based Authentication
- Role-Based Authorization

### 🎵 Music Management

- Music Upload API
- Audio File Upload using Multer
- Artist-Only Upload Access

### ☁️ Storage & Database

- MongoDB Database Integration
- ImageKit Integration

### 🏗️ Architecture

- MVC Architecture
- Mongoose Models
- Environment Variables Configuration
- Error Handling
- Modular Folder Structure

---

## 🛠️ Tech Stack

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

### File Upload

- Multer

### Cloud Storage

- ImageKit

### Environment Management

- Dotenv

---

## 📁 Project Structure

```bash
music-stream-backend/
│
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── music.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   ├── services/
│   │   └── storage.service.js
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

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AdarshYadav-dev/music-stream-backend.git
```

### 2️⃣ Navigate to Project Directory

```bash
cd music-stream-backend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8080

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

---

## ▶️ Running the Application

### Start Production Server

```bash
npm start
```

### Start Development Server

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:8080
```

---

# 📌 API Endpoints

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |
| POST   | `/api/music/upload`  | Upload Music  |

---

## 👤 Register User

### Endpoint

```http
POST /api/auth/register
```

### Request Body

```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "123456",
  "role": "artist"
}
```

### Success Response

```json
{
  "message": "user registered successfully",
  "user": {
    "id": "...",
    "username": "testuser",
    "email": "test@example.com",
    "role": "artist"
  }
}
```

---

## 🔑 Login User

### Endpoint

```http
POST /api/auth/login
```

### Request Body

```json
{
  "username": "testuser",
  "password": "123456"
}
```

### Success Response

```json
{
  "message": "User logged in successfully",
  "user": {
    "id": "...",
    "username": "testuser",
    "email": "test@example.com",
    "role": "artist"
  }
}
```

---

## 🎵 Upload Music

### Endpoint

```http
POST /api/music/upload
```

### Form Data

| Field | Type |
| ----- | ---- |
| title | text |
| music | file |

### Authentication

- JWT Cookie Required
- User Role must be `artist`

### Success Response

```json
{
  "message": "Music created successfully",
  "music": {
    "_id": "...",
    "title": "My Song",
    "uri": "https://ik.imagekit.io/...",
    "artist": "userId"
  }
}
```

---

## 🔄 Authentication & Upload Flow

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

### Step 6: Verify Token

```javascript
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

### Step 7: Role-Based Authorization

```javascript
if (decoded.role !== "artist") {
  return res.status(403).json({
    message: "You don't have access to create music",
  });
}
```

### Step 8: Upload Audio to ImageKit

```javascript
const result = await uploadFile(req.file.buffer.toString("base64"));
```

### Step 9: Save Music Metadata

```javascript
const music = await musicModel.create({
  uri: result.url,
  title,
  artist: decoded.id,
});
```

---

## 📚 Concepts Practiced

- Express Routing
- Controllers
- MongoDB Integration
- Mongoose Models
- JWT Authentication
- Password Hashing
- Cookie-Based Authentication
- Role-Based Authorization
- Multer File Upload
- ImageKit Integration
- Environment Variables
- Async/Await
- Error Handling
- REST APIs
- MVC Architecture
- Cloud Storage
- File Handling

---

## 🔮 Upcoming Features

- Authentication Middleware
- Protected Routes Middleware
- Playlist APIs
- Get All Music API
- Delete Music API
- Search Music API
- Like and Favorite APIs
- User Dashboard
- Artist Dashboard
- Streaming Support

---

## 🤝 Connect With Me

- GitHub: [AdarshYadav-dev](https://github.com/AdarshYadav-dev)
- LinkedIn: [Adarsh Yadav](https://www.linkedin.com/in/adarsh-yadav-%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-7aa9a1276/)

---

## 📄 License

This project is licensed under the MIT License.

⭐ If you found this project useful, consider giving it a star on GitHub.
