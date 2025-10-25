import { useState } from 'react'
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"
import { registerServiceWorker } from "./services/serviceWorker"

// Register service worker for PWA support
registerServiceWorker()

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main>
        <Dashboard />
      </main>
    </div>
  )
}

export default App
