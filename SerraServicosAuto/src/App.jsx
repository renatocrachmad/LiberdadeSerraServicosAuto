import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavbarExterno from "./components/NavbarExterno";
import NavbarInterno from "./components/NavbarInterno";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import BuscarPrestadores from "./pages/BuscarPrestadores";
import Financeiro from "./pages/Financeiro";
import Servicos from "./pages/Servicos";
import PerfilPrestador from "./pages/PerfilPrestador";
import AgendarServico from "./pages/AgendarServico";
import Assinante from "./pages/CentraDoAssinante";

const Layout = ({ children }) => {
  const location = useLocation();
  const paginasExterno = ["/", "/cadastro"];

  return (
    <>
      {paginasExterno.includes(location.pathname) ? (
        <NavbarExterno />
      ) : (
        <NavbarInterno />
      )}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buscar-prestadores" element={<BuscarPrestadores />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/perfil-prestador" element={<PerfilPrestador />} />
          <Route path="/agendar-servico" element={<AgendarServico />} />
          <Route path="/assinante" element={<Assinante />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
