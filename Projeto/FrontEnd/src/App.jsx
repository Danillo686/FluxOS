import { Routes, Route } from 'react-router-dom'
// import Cadastro from './pages/cadastro'
import Login from './pages/Login'
import Owner from './pages/Owner'
// import LoginAttendant from './pages/LoginAttendant'
// import Home from './pages/Home'
import './App.css'

export default function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/cadastro" element={<Cadastro />} /> */}
        <Route path="/Owner" element={<Owner />} />
        {/* <Route path="/LoginAttendant" element={<LoginAttendant />} /> */}
        {/* <Route path="/Home" element={<Home />} /> */}
      </Routes>
    </main>
  );
}