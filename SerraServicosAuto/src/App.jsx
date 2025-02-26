import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import BuscarPrestadores from "./pages/BuscarPrestadores";
import Financeiro from "./pages/Financeiro";
import Servicos from "./pages/Servicos";
import PerfilPrestador from "./pages/PerfilPrestador"; // ✅ Importação correta

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buscar-prestadores" element={<BuscarPrestadores />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/perfil-prestador" element={<PerfilPrestador />} /> {/* ✅ Caminho corrigido */}
      </Routes>
    </Router>
  );
}

export default App;
