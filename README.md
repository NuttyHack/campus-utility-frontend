# 📱 Campus Utility Board - Frontend

This is the official React frontend for the Campus Utility Board. A mobile-first platform designed to provide students with real-time updates on lab availability and campus alerts.

## 🚀 The Tech Stack
- **Framework:** React 18 (via Vite)
- **Styling:** Tailwind CSS
- **State Management:** Context API / Zustand
- **Real-Time:** Socket.io-client
- **API Client:** Axios
- **Icons:** Lucide-React

---

📂 Project Structure Guide
To ensure scalability and maintainability, all developers MUST adhere to the following directory structure:
src/
├── 🎨 assets/          # Global styles (CSS), images, and SVGs.
├── 🧱 components/      # Reusable UI building blocks.
│   ├── ui/             # Atomic components (Buttons, Inputs, Modals).
│   ├── layout/         # Structural components (Navbar, Sidebar, Footer).
│   └── features/       # Feature-specific logic (PostCard, LabStatusCard).
├── 🧠 context/         # React Context providers (AuthContext, SocketContext).
├── 🎣 hooks/           # Custom React hooks (useAuth, useSocketConnection).
├── 📄 pages/           # Full-screen views and route components.
├── 🔌 services/        # External communication logic.
│   ├── api.js          # Axios configuration & JWT Interceptors.
│   └── socket.js       # Socket.io event listeners & emitters.
├── 📦 store/           # Global State Management (Zustand/Redux).
├── 🛠️ utils/           # Pure helper functions (Date formatting, Validators).
├── 🚀 App.jsx          # Main Router and Global Provider wrapper.
└── 📍 main.jsx         # Application entry point.

### 🧩 `src/components`
- **ui/**: Basic elements like `Button.jsx` or `Input.jsx`.
- **features/**: Complex components like `PostCard.jsx` (which contains logic for likes/comments).

### 📄 `src/pages`
Contains full screen views. 
- `Dashboard.jsx`: The main hub showing Labs and the Feed.
- `Auth/`: Contains Login and Registration screens.

### 🔌 `src/services`
- `api.js`: Centralized Axios configuration. **Do not write raw fetch calls in components.** Use this service.
- `socket.js`: Handles the global WebSocket connection for real-time updates.

### 🧠 `src/context`
Handles global "State." If you need to check if a user is logged in from any page, use the `AuthContext`.

---

## 🌿 Branching Strategy (Strict)
**Do not push directly to `main` or `development`.**

1. `main`: Production-ready code only.
2. `development`: The "Integration" branch.
3. `feature/name`: Create a branch from `development` for your specific task.
   - Example: `feature/login-ui` or `feature/socket-integration`

**Workflow:** Create Branch -> Code -> Push -> Open Pull Request (PR) -> Peer Review -> Merge to Development.
