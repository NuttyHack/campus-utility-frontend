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

---

## 📂 Project Structure Guide
To ensure scalability and maintainability, all developers **MUST** adhere to the following directory structure:

```text
src/
├── 🎨 assets/          # Global styles, images, and SVGs
├── 🧱 components/      # Reusable UI building blocks
│   ├── ui/             # Atomic components (Buttons, Inputs)
│   ├── layout/         # Structural (Navbar, Sidebar, Footer)
│   └── features/       # Feature-specific (PostCard, LabCard)
├── 🧠 context/         # React Context (Auth, Socket)
├── 🎣 hooks/           # Custom React hooks (useAuth)
├── 📄 pages/           # Full-screen views (Dashboard, Login)
├── 🔌 services/        # API & Socket communication
│   ├── api.js          # Axios instance & Interceptors
│   └── socket.js       # Socket events & listeners
├── 📦 store/           # Global State (Zustand)
├── 🛠️ utils/           # Helper functions (Formatters)
├── 🚀 App.jsx          # Router & Global Providers
└── 📍 main.jsx         # Application entry point
```
## Deep Dive: Our Frontend Engineering Standard
To build a professional-grade campus tool, we aren't just "writing code"; we are building a synchronized system. Here is the breakdown of our core stack:

##⚡ Vite & React 18
We use Vite because it provides an almost instant Hot Module Replacement (HMR). Time is money. React 18 allows us to use Concurrent Rendering, ensuring the UI remains responsive even when we are processing heavy real-time data from the campus labs.

##🎨 Tailwind CSS (Utility-First)
We do not write raw CSS files. We use Tailwind to:

Maintain Consistency: Every padding, margin, and color comes from a standardized design token.

Mobile-First Development: We use prefixes like md: and lg: to ensure the dashboard looks perfect on a student's phone first, then their laptop.

##🔌 Service-Oriented Architecture (Axios & Socket.io)
We separate our "View" from our "Data."

Axios: We use a centralized Axios instance in services/api.js. This handles our Base URL and automatically attaches our JWT Token to every request header.

Socket.io: This is our live "Nervous System." Instead of users refreshing the page, we listen for events like lab_update or new_post to update the React state in real-time.

##🧠 State Management (Context + Zustand)
Context API: Used for "Global Static" data like User Authentication and Theme.

Zustand: Used for "Fast-Changing" data like the Live Feed and Lab Statuses. It’s lighter than Redux and much faster for real-time updates.

## 🛠️ Developer Workflow (The "Safe" Way)
Atomic Design: Before building a full page, check src/components/ui. If a button exists, use it. Do not create a new one.

Strict Typing (Prop-Types): Always define what data your component expects. This prevents "undefined" crashes.

Environment Variables: Never hardcode the Backend URL. Always use import.meta.env.VITE_API_URL.

## 🧪 Testing & Quality
Linting: We use ESLint to ensure everyone’s code looks the same. Run npm run lint before you push.

Pull Requests: Every PR must be reviewed by at least one other team member. We check for logic errors and CSS inconsistencies.
