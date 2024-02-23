import { Route, Routes } from "react-router-dom";

import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Feirinha from "../pages/Feirinha/Feirinha";
import Perfil from "../pages/perfil/perfil";
import Blog from "../pages/Blog/Blog";
import Compra from "../pages/Compra/Compra"
import Artesoes from "../pages/Artesoes/Artesoes";
import EscolhaCad from "../pages/Escolha/EscolhaCad";
import EscolhaLog from "../pages/Escolha/EscolhaLog";
import LoginUser from "../pages/Login/LoginUsuario";
import CadastroUser from "../pages/Cadastro/cadastro_usuario";
import LoginEmp from "../pages/Login/LoginEmpresa";
import CadastroEmp from "../pages/Cadastro/cadastro_empresa";
import LoginArt from "../pages/Login/LoginArtesao";
import CadastroArt from "../pages/Cadastro/cadastro_artesao";
import Pagamento from "../pages/Pagamento/Pagamento";
import Materiais from "../pages/Materiais/Materiais";
import Usuario from "../pages/usuario/usuario";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobrenos" element={<Sobre/>} />
            <Route path="/feirinha" element={<Feirinha/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/compra" element={<Compra/>} />
            <Route path="/escolhacad" element={<EscolhaCad/>}/>
            <Route path="/artesoes" element={<Artesoes/>} />
            <Route path="/escolhalog" element={<EscolhaLog/>}/>
            <Route path="/login_usuario" element={<LoginUser/>}/>
            <Route path="/cadastro_usuario" element={<CadastroUser/>}/>
            <Route path="/login_empresa" element={<LoginEmp/>}/>
            <Route path="/cadastro_empresa" element={<CadastroEmp/>}/>
            <Route path="/login_artesao" element={<LoginArt/>}/>
            <Route path="/cadastro_artesao" element={<CadastroArt/>}/>
            <Route path="/pagamento" element={<Pagamento/>} />
            <Route path="/materiais" element={<Materiais />} />
            <Route path="/usuario" element={<Usuario/>} />
            
        </Routes>
    )
}

export default AppRoutes;
