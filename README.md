# 🚀 Chat App - Frontend

This is the **frontend** of a real-time chat application built with **React.js, Tailwind CSS, and Socket.io**. It provides a seamless messaging experience with WebSocket support for live chat.

⚠️ **Note:** This project is a **weekend learning project**, primarily focusing on learning **concepts and technologies**. The **UI/UX will be updated in future** with better designs and enhancements.

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)

## 📂 Project Structure

```
frontend/
│── src/
│   ├── components/       # Reusable components (ChatBox, Sidebar, etc.)
│   ├── context/          # AuthContext (User Authentication)
│   ├── pages/            # Main pages (Login, ChatRoom)
│   ├── services/         # API Calls (auth, chat history, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── App.jsx           # Main Application
│   ├── main.jsx          # Entry point (ReactDOM)
│── public/               # Static assets
│── package.json          # Dependencies
│── vite.config.js        # Vite Configuration
│── README.md             # Documentation
```

## 🚀 Features

- ✅ **Real-time Messaging** using WebSockets (Socket.io)
- ✅ **Authentication System** (JWT-based Login & Signup)
- ✅ **Chat Rooms** (Multiple chat channels)
- ✅ **Beautiful UI** with Tailwind CSS
- ✅ **Responsive Design** (Works on all devices)
- ✅ **Persistent Login** (Stored in localStorage)
- ✅ **Error Handling** (Friendly messages & validation)

## ⚡ Installation & Setup

### 🔧 Prerequisites
- Node.js (>= 16)
- Vite
- NPM / Yarn

### 📥 Clone the repository

```sh
git clone https://github.com/your-username/chat-app-frontend.git
cd chat-app-frontend
```

### 📦 Install dependencies

```sh
npm install
```

### 🛠️ Configure environment variables

Create a **.env** file in the root directory and add:

```
VITE_API_URL=http://localhost:5000
```

### 🚀 Run the project

```sh
npm run dev
```

Then open **http://localhost:5173/** in your browser.

## 🔗 API Endpoints (Backend Integration)

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

🔗 **Backend Repository:** [Chat App Backend](https://github.com/your-username/chat-app-backend)

📧 **Contact:** palakbosw@gmail.com

🌟 **Star this repo if you like it!**
