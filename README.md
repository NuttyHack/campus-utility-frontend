# Campus Utility Board Frontend

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-4.4-brightgreen?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-teal?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen) <!-- Replace with actual CI badge -->


Frontend for the **Campus Utility Board**, a hyper-local, real-time campus web app for students.  
Supports live utility tracking, community posts, study groups, and instant notifications.

---

## 🌟 Features

- **Authentication:** Login/Register with JWT, OAuth SSO (Google & Microsoft)
- **Dashboard:** Real-time campus utility board
- **Community Feed:** Post complaints, updates, and announcements
- **Study Groups:** Create/join study groups
- **Notifications:** Instant updates via Socket.IO
- **Mobile-first & Responsive:** Built with Tailwind CSS
- **Professional Dev Workflow:** GitHub Actions CI, Docker-ready, modular branch strategy

---

## 🛠 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** for styling
- **Axios** for REST API
- **Socket.IO Client** for real-time updates
- **React Router** for navigation
- **Context API** for global state management
- **Git & GitHub** for version control
- **Docker** for consistent dev/prod environments

---

## 📁 Project Structure


src/
├── components/ # Reusable UI components (Button, Card, PostCard, UtilityCard)
├── context/ # Global state (AuthContext, BoardContext)
├── hooks/ # Custom React hooks
├── pages/ # Route-specific pages (Dashboard, Login, Register)
├── services/ # API & Socket.IO services
├── App.jsx # App root
└── main.jsx # Entry point


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/campus-utility-board-frontend.git
cd campus-utility-board-frontend
```
2. Install dependencies
  ``` 
npm ci
```
4. Setup environment variables
```   
cp .env.example .env
```
Example .env:
```
VITE_API_URL=http://localhost:4000
JWT_SECRET=<your-secret-key>
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:4000/api/v1/auth/google/callback
MICROSOFT_CLIENT_ID=
MICROSOFT_CLIENT_SECRET=
MICROSOFT_CALLBACK_URL=http://localhost:4000/api/v1/auth/microsoft/callback
4. Run development server
npm run dev
```
```
Open http://localhost:5173
 in your browser.
```
🔗 API & Real-Time Integration
```
REST API: services/api.js
WebSockets: services/socket.js
Live updates for posts and utility statuses
Include JWT Bearer token for protected routes
```
##  🌱 Branching Strategy
main → Production-ready
development → Active development
frontend → Frontend integration
backend → Backend integration
feature/<feature-name> → Individual features

Recommended workflow:
```
git checkout main
git pull origin main
git checkout -b feature/login
# make small modular commits
git push -u origin feature/login
# open PR against development
👥 Contributing
Fork the repository
Create a feature branch (feature/<feature-name>)
Commit modular and clean code
Open PR against development
Require at least one review before merge
Squash merge to keep main clean
```

Coding standards & best practices:
```
Mobile-first design
Use reusable components
Keep API & UI separate (service layer)
Use Context API for global state
Ensure Socket.IO updates integrate seamlessly
```
## ⚡ Advanced Notes
Mobile-first layouts with Tailwind utilities
JSON API responses with structured error messages
Socket.IO channels handle utility & post updates in real-time
JWT stored securely in localStorage for session persistence
Ready for CI/CD pipelines & Docker deployment
## 📝 License

MIT License © 2026
Permission is hereby granted to use, modify, and distribute this software.

## 📚 References & Resources
React Documentation
Tailwind CSS Docs
Socket.IO Client Guide
Vite Official
