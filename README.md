Flutter Node.js Authentication App
A full-stack authentication system built with Flutter on the frontend and Node.js + Express on the backend. This project implements secure Email and Password Signup/Login, JWT-based authentication, password hashing, and persistent user sessions without using Firebase.
This project is inspired by the tutorial from Rivaan Ranawat and extended with real-device support and clean architecture.
```
🚀 Features
User Signup with Email and Password
User Login with JWT Authentication
Secure Password Hashing using bcryptjs
JSON Web Token-based Authorization
Persistent Login using Shared Preferences
Provider State Management
REST API built with Express.js
MongoDB Database Integration
Clean separation of frontend and backend

🛠 Tech Stack
Frontend
Flutter
Dart
Provider
HTTP
Shared Preferences
Backend
Node.js
Express.js
MongoDB
Mongoose
bcryptjs
jsonwebtoken

📁 Project Structure
flutter_nodejs_auth/
│
├── lib/
│   ├── models/
│   ├── pages/
│   ├── provider/
│   ├── services/
│   ├── utils/
│   └── main.dart
│
├── server/
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── auth.js
│   └── index.js
│
└── pubspec.yaml

⚙️ Backend Setup
1. Navigate to server folder
cd server

2. Install dependencies
npm install

3. Create .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000

4. Start the server
npm start


Server will run on:
http://0.0.0.0:3000

📱 Flutter Setup
1. Install dependencies
flutter pub get

2. Update API base URL
For real device testing, update constants.dart:
class Constants {
  static const String baseUrl = 'http://YOUR_PC_IP:3000';
}


Example:
http://192.168.1.12:3000

3. Run the app
flutter run


Ensure your phone and PC are on the same WiFi network.

🔐 Authentication Flow
User signs up
Password is hashed using bcryptjs
User data is stored in MongoDB
JWT token is generated on login
Token is stored locally using Shared Preferences
Auth middleware protects private routes

📦 API Endpoints
Signup
POST /api/signup

Login
POST /api/login

Get User Data
GET /api/user
Headers:
x-auth-token: JWT_TOKEN

🎯 Learning Outcomes
Full-stack Flutter and Node.js integration
Secure authentication without Firebase
JWT-based authorization
State persistence in Flutter
Real device API communication

👨‍💻 Author
Muhammad Junaid
Flutter Developer | Software Engineer
