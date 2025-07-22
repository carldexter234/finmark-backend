# 🏦 Finmark Platform - Login System

This is a full-stack login authentication system for the Finmark Platform, built with:

- 🖥️ Backend: Node.js + Express
- 🔒 Authentication: JWT + bcrypt
- 🌐 Frontend: React
- 🗃️ Data: Dummy user with hashed password (no database)

---

## 📁 Project Structure

finmark-platform/
├── finmark-login/ # React frontend
├── services/
│ └── auth-service/ # Node.js backend (API + auth)
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ └── .env

---

## 🚀 How to Run the Project

### 🔧 Prerequisites

- Node.js installed
- npm (comes with Node)
- Git installed

---

### 🖥️ Backend Setup (Auth API)

1. Install dependencies:
npm install

Create a .env file with this content:
PORT=5000
JWT_SECRET=myfinmarksecret

Start the backend server:
node server.js

The backend runs at: http://localhost:5000

Testable login endpoint:

POST http://localhost:5000/api/auth/login
Body (JSON):
 
{
  "email": "test@finmark.com",
  "password": "test123"
}

🌐 Frontend Setup (React App)
Install dependencies:
npm install

Start the React app:
npm start

The frontend runs at: http://localhost:3000

👤 Dummy User Credentials
Use these to log in:
Email: test@finmark.com
Password: test123

📦 Technologies Used
Node.js
Express
bcryptjs
jsonwebtoken
dotenv
React
Fetch API

✅ Features
🔐 Login with JWT authentication
🧠 Graceful error handling for missing/invalid fields
📄 GUI built in React
🗃️ No database needed — uses a hardcoded dummy user
🔁 Frontend and backend run separately

