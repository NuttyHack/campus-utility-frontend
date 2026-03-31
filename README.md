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

## 📂 Project Structure Guide
To maintain a clean codebase, all developers MUST follow this folder structure:

src/
├── assets/             # Images, SVGs, and Global Styles
├── components/         # Reusable UI Atoms (Buttons, Inputs, Cards)
│   ├── ui/             # Generic components (Button, Modal)
│   ├── layout/         # Navigation, Sidebar, Footer
│   └── features/       # Feature-specific (PostCard, LabCard)
├── context/            # React Context (AuthContext, SocketContext)
├── hooks/              # Custom React Hooks (useAuth, useSocket)
├── pages/              # Full page views (Dashboard, Login, Profile)
├── services/           # API and Socket connection logic
│   ├── api.js          # Axios instance & interceptors
│   └── socket.js       # Socket.io configuration
├── store/              # Global State (Zustand or Redux)
├── utils/              # Helper functions (date formatting, validation)
├── App.jsx             # Main Routing logic
└── main.jsx            # Entry point

To maintain a clean codebase, all developers MUST follow this folder structure:

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
