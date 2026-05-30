# Online Quiz Application

## Project Overview

Online Quiz Application is a full-stack MERN project that allows users to register, log in, attempt quizzes, and view their scores. Admins can create quizzes and add questions. User results are stored in MongoDB and can be viewed after quiz submission.

This project was developed as a college mini project using the MERN Stack.

---

## Features

### User Features

* User Registration
* User Login with JWT Authentication
* View Available Quizzes
* Attempt Quizzes
* Submit Answers
* Automatic Score Calculation
* View Quiz Results

### Admin Features

* Create New Quizzes
* Add Questions to Quizzes
* Update Existing Quizzes
* Delete Quizzes

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

---

## Project Structure

online-quiz-app/

├── client/

│ ├── src/

│ ├── components/

│ ├── pages/

│ ├── services/

│ └── App.jsx

│

├── server/

│ ├── controllers/

│ ├── models/

│ ├── routes/

│ ├── middleware/

│ ├── config/

│ └── server.js

│

└── README.md

---

## Installation

### Clone Repository

git clone https://github.com/aamirpatloo/online-quiz-app.git

cd online-quiz-app

---

## Backend Setup

cd server

npm install

Create a .env file:

MONGO_URI=mongodb+srv://aamirtbs_db_user:Maamir2006@cluster-quiz-app.zjnode5.mongodb.net/?appName=Cluster-quiz-app

JWT_SECRET=1ae97e56

Run backend:

npm start

---

## Frontend Setup

cd client

npm install

npm run dev

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Quiz

GET /api/quizzes

POST /api/quizzes

PUT /api/quizzes/:id

DELETE /api/quizzes/:id

### Questions

GET /api/questions/:quizId

POST /api/questions

### Results

POST /api/results/submit

GET /api/results

---

## Deployment

### Backend

Deployed on Render

### Frontend

Deployed on Vercel

---

## Future Enhancements

* Timer-Based Quizzes
* Leaderboard
* Admin Dashboard
* User Profile Page
* Quiz Categories
* Quiz Analytics

---

## Author

Mohammad Aamir Patloo

College Mini Project

MERN Stack Online Quiz Application
