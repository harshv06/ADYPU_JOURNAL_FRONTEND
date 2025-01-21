##Research Paper Publication Website
This is a full-stack web application built using React.js for the frontend and Node.js for the backend. The platform enables researchers to upload, manage, and share research papers seamlessly. The backend is powered by a MongoDB database for storing data, while the website ensures a user-friendly interface for accessing and publishing research papers.

Features
Frontend
Responsive Design: Fully responsive UI designed with React.js and TailwindCSS.

Dashboard: User-friendly dashboard for managing uploaded papers.

Search and Filter: Advanced search functionality to find papers by title, author, or keywords.

Preview Papers: Inline preview for uploaded PDFs.

Backend
File Uploads: Supports secure and validated PDF uploads using Multer.

Database Management: Stores metadata (title, author, keywords) in MongoDB.

Authentication: Secure user authentication with JWT.


Additional Features
Error Handling: Robust error handling for file size, type validation, and server issues.

User Accounts: User roles for researchers and administrators.

Indexed Papers: Papers are indexed for easy discovery.

Tech Stack
Frontend
React.js

TailwindCSS

React Router

Axios (for API calls)

Backend
Node.js

Express.js

Multer (for handling file uploads)

MongoDB

JWT Authentication

Deployment
Frontend: Deployed using Hostinger.

Backend: Hosted on VPS.

Database: MongoDB Atlas or self-hosted MongoDB instance.

Installation
Prerequisites
Node.js installed on your system.

MongoDB database.

Steps
Clone the repository
cd research-paper-publication
Install dependencies for both frontend and backend:

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
Set up environment variables:

Create a .env file in the backend folder with:

PORT=5000
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-jwt-secret
Start the development server:

# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm start
Open the application in your browser at http://localhost:3000.


![image](https://github.com/user-attachments/assets/0ffe846e-8c9a-4e98-89e0-9eda7eebe9c6)
