# Full Stack Chat Application

You can check it out: https://workingonmyend-chat-app.onrender.com/

This project is a full-stack real-time chat application built using **Node.js**, **Express**, **MongoDB**, **React**, and **Socket.IO**. It features user authentication, image uploads, protected routes, real-time messaging, and more.

## Backend Stack

### Core Technologies
- **Express**  
  A back-end web application framework for building RESTful APIs with Node.js.

- **Mongoose**  
  ODM (Object Data Modeling) library for MongoDB and Node.js, built on the native MongoDB driver.

- **dotenv**  
  Loads environment variables from a `.env` file into `process.env`.

- **jsonwebtoken**  
  Implements JSON Web Tokens for user authentication.

- **bcryptjs**  
  Library for hashing passwords securely.

- **cookie-parser**  
  Parses `Cookie` headers and populates `req.cookies`.

- **cloudinary**  
  Handles image uploads and transformations.

- **socket.io**  
  Enables real-time, bidirectional communication between clients and the server. Supports multiple namespaces (channels).

### Development Tools
- **nodemon**  
  Automatically restarts the server when changes are detected during development.

- **cors**  
  Middleware to enable Cross-Origin Resource Sharing.

---

## Frontend Stack

### Framework & Routing
- **Vite + React**  
  Vite provides fast development and build tools; React is used for the UI.

- **react-router-dom**  
  Declarative routing for React applications.

- **react-hot-toast**  
  Lightweight and customizable toast notification system.

### Styling & UI
- **daisyUI**  
  A plugin for Tailwind CSS that offers pre-designed UI components to speed up development.  
  URL: [https://daisyui.com/](https://daisyui.com/)

- **lucide-react**  
  A set of beautiful and consistent open-source icons for React.

### State Management & Requests
- **axios**  
  Promise-based HTTP client for browser and Node.js.

- **zustand**  
  A small, fast, and scalable global state management solution for React.

---

## Features

- 🧑‍💻 User authentication with JWT
