# 🚀 Chat App - Backend

This is the **backend** of a real-time chat application built with **Node.js, Express, MongoDB, and Socket.io**. It handles authentication, real-time messaging, and chat history storage.

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

## 📂 Project Structure

```
backend/
│── src/
│   ├── config/          # Configuration files (DB, CORS, etc.)
│   ├── controllers/     # API Controllers (Auth, Chat, etc.)
│   ├── models/          # MongoDB Models (User, Message, etc.)
│   ├── routes/          # Express Routes (Auth, Chat)
│   ├── middleware/      # Authentication & Validation Middleware
│   ├── services/        # Business Logic (Token handling, chat services)
│   ├── sockets/         # Socket.io WebSocket Events
│   ├── server.js        # Entry point (Express & Socket.io setup)
│── .env                 # Environment Variables
│── package.json         # Dependencies
│── README.md            # Documentation
```

## 🚀 Features

- ✅ **User Authentication** (JWT-based Login & Signup)
- ✅ **Real-time Messaging** using WebSockets (Socket.io)
- ✅ **MongoDB Chat History Storage**
- ✅ **Secure REST API** with Token-based Auth
- ✅ **Multi-Room Chat Support**
- ✅ **Error Handling & Validation**

## ⚡ Installation & Setup

### 🔧 Prerequisites
- Node.js (>= 16)
- MongoDB
- NPM / Yarn

### 📥 Clone the repository

```sh
git clone https://github.com/your-username/chat-app-backend.git
cd chat-app-backend
```

### 📦 Install dependencies

```sh
npm install
```

### 🛠️ Configure environment variables

Create a **.env** file in the root directory and add:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

### 🚀 Run the server

```sh
npm start
```

Server will be running on **http://localhost:5000**.

## 🔗 API Endpoints

| Method | Endpoint              | Description                      |
|--------|-----------------------|----------------------------------|
| POST   | /api/auth/login       | User Login                      |
| POST   | /api/auth/register    | User Registration               |
| GET    | /api/chat/history/:room | Get Chat History for a Room |
| POST   | /api/chat/send        | Send a Chat Message             |

## 🛠️ WebSocket Events

| Event Name   | Description                     |
|-------------|---------------------------------|
| joinRoom    | Joins a specific chat room      |
| sendMessage | Sends a new message            |
| newMessage  | Receives a real-time message   |

## 🔮 Upcoming Features

- 🎥 **WebRTC Video Calling**
- 🤖 **AI Chatbot Integration**
- 🖼️ **Media Sharing (Images, Videos)**
- 🎨 **Theme Customization**
- 🔔 **Push Notifications**

## 🤝 Contribution

Contributions are welcome! Fork the repo, make changes, and submit a PR.

---

🔗 **Frontend Repository:** [Chat App Frontend](https://github.com/your-username/chat-app-frontend)

📧 **Contact:** palakbosw@example.com

🌟 **Star this repo if you like it!**
