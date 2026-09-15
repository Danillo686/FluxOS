import { Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import Login from './pages/Login'
import LoginOwner from './pages/LoginOwner'
import LoginAttendant from './pages/LoginAttendant'
import RegisterClient from './pages/RegisterClient'
import './App.css'

export default function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/LoginOwner" element={<LoginOwner />} />
        <Route path="/LoginAttendant" element={<LoginAttendant />} />
        <Route path="/RegisterClient" element={<RegisterClient />} />
      </Routes>
    </main>
  );
}