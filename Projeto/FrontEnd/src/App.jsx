import { Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import Login from './pages/login'
import './App.css'

export default function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </main>
  );
}