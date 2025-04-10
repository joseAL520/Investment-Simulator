import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Sidebar } from './components/ui/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { Historial } from './pages/Historial'
import { Portafolio } from './pages/Portafolio'

function App() {

  return (
    <Router>
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<Historial />} />
          <Route path="/portfoli" element={<Portafolio />} />
        </Routes>
      </main>
    </div>
  </Router>
  )
}

export default App
