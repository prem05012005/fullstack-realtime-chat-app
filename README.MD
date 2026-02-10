<h1 align="center">MERN Real-Time Chat Application</h1>

<p align="center">
A full-stack real-time chat application built using the MERN stack, featuring secure authentication,
real-time messaging, notifications, and a modern responsive UI.
</p>

---

## 🚀 Project Overview

This project demonstrates a **production-level real-time chat system** built with modern
full-stack technologies. It focuses on **secure authentication, scalable APIs, and
real-time communication**, making it suitable for showcasing backend and frontend skills
in technical interviews.

---

## ✨ Key Features

### 🔐 Authentication & Security
- Custom **JWT-based authentication** (no third-party auth providers)
- Secure protected routes and APIs
- API rate-limiting using Arcjet

### 💬 Real-Time Communication
- Real-time messaging with **Socket.io**
- Online / offline presence indicators
- Typing indicators and message notifications

### 📨 Notifications & Media
- Automated **welcome emails** on signup (Resend)
- Image uploads and media handling via **Cloudinary**

### 🧰 Backend & APIs
- RESTful API built with **Node.js & Express**
- **MongoDB** for persistent data storage
- Scalable backend architecture

### 🎨 Frontend & UI
- Modern UI built with **React**, **Tailwind CSS**, and **DaisyUI**
- State management using **Zustand**
- Responsive and user-friendly design

---
## 🛠️ Tech Stack

**Frontend**
- React
- Tailwind CSS
- DaisyUI
- Zustand

**Backend**
- Node.js
- Express.js
- MongoDB
- Socket.io

**Other Tools & Services**
- Cloudinary (Media storage)
- Resend (Email service)
- Arcjet (Rate limiting & security)

---

## 🧪 .env Setup

### Backend (`/backend`)

```bash
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
