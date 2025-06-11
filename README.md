# Project Overview

This repository contains both the frontend and backend components of the project.

---

## Frontend

### Tech Stack
- Framework: React
- Components: ChakraUI
- State Management: Context API

### Setup

```bash
cd frontend
npm install
npm run dev
```

### Features
All of the required features were implemented. As of the bonus requirement, only the responsive design was implemented due time constraint. As for the chosen libraries, ChakraUI was chosen because of its ease of use, built-in accessibility features, and rapid prototyping capabilities. Axios was used to handle HTTP requests due to its simplicity and promise-based API, which streamlines asynchronous operations and error handling. By default, the frontend is avaliable at http://localhost:5173/.

---

## Backend

### Tech Stack
- Language: Node.js
- Framework: Express
- Database: MongoDB

### Setup

```bash
cd backend
npm install
npm run dev
```

### Features

The required features were implemented, except the "favorite recipe" feature. Middlewares were not used due the simplicity of the project and time constraint. It is necessary to configure the MongoDB in the .env file. By default, the backend is served at http://localhost:3000.