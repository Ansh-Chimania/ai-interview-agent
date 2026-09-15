# InterviewIQ.AI - AI Powered Smart Mock Interview Platform

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb)](https://www.mongodb.com/)

**InterviewIQ.AI** is an advanced AI-driven mock interview platform designed to help job seekers prepare for technical and HR interviews. It features adaptive role-based questions, real-time feedback, detailed performance scoring, PDF report exports, and credit-based subscription access.

---

## 🚀 Features

- **🎯 Role-Based Mock Interviews**: Choose target job roles, skills, and experience levels with custom difficulty settings.
- **🤖 Smart AI Follow-Ups**: Interactive interview dynamic powered by OpenRouter LLM API.
- **📊 Detailed Performance Evaluation**: Recharts analytics showing speech clarity, technical accuracy, confidence, and areas for improvement.
- **📄 PDF Report Export**: Instant downloadable evaluation reports using `jspdf` and `jspdf-autotable`.
- **🔐 Secure Authentication**: Firebase Auth (Google Sign-In) combined with backend JWT authentication cookies.
- **💳 Credit & Payment System**: Integrated with Razorpay for purchasing interview credits.
- **📜 Interview History**: Access past mock interview transcripts, feedback, and performance metrics anytime.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **State Management**: Redux Toolkit & React-Redux
- **Styling**: Tailwind CSS v4 & Motion (Framer Motion)
- **Charts & Reports**: Recharts, jsPDF, jsPDF-AutoTable
- **Authentication**: Firebase Web SDK v12

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5
- **Database**: MongoDB via Mongoose
- **AI Service**: OpenRouter API
- **Payments**: Razorpay Node SDK
- **File Uploads**: Multer & pdfjs-dist

---

## 📁 Project Structure

```
ai-interview-agent/
├── client/                 # React + Vite Frontend
│   ├── src/
│   │   ├── components/     # UI Components (AuthModal, Navbar, Footer, Steps, etc.)
│   │   ├── pages/          # Pages (Home, InterviewPage, InterviewReport, Pricing, History)
│   │   ├── redux/          # Redux Store & User Slices
│   │   └── utils/          # Firebase & Helper Configs
│   └── package.json
│
├── server/                 # Express Backend Server
│   ├── config/             # DB Connection & JWT Setup
│   ├── controllers/        # Auth, Interview, User & Payment Controllers
│   ├── middlewares/        # Authentication & Multer Middlewares
│   ├── models/             # Mongoose Schemas (User, Interview, Payment)
│   ├── routes/             # API Endpoint Handlers
│   ├── services/           # OpenRouter AI & Razorpay Services
│   └── package.json
│
├── .gitignore              # Root Git Ignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js**: v18+ or v20+
- **MongoDB**: Local MongoDB instance or MongoDB Atlas Connection URI
- **Firebase**: Firebase Web App configuration
- **OpenRouter API Key**: For AI LLM responses
- **Razorpay Key & Secret**: For payment integration (optional for dev)

---

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Ansh-Chimania/ai-interview-agent.git
   cd ai-interview-agent
   ```

2. **Setup Backend Server**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   OPENROUTER_API_KEY=your_openrouter_api_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

3. **Setup Frontend Client**
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the `client` directory:
   ```env
   VITE_FIREBASE_APIKEY=your_firebase_api_key
   ```

---

## 🏃 Running the Application

### Start Backend Server
From the `server` directory:
```bash
npm run dev
```
*Server runs on `http://localhost:8000`*

### Start Frontend Client
From the `client` directory:
```bash
npm run dev
```
*Client runs on `http://localhost:5173`*

---

## 📝 License

This project is licensed under the [ISC License](LICENSE).
