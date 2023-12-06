import { Route, Routes } from "react-router-dom";
import Home from './../pages/Home/Home';
import Sobre from './../pages/Sobre/Sobre';
import Feirinha from "./../pages/Feirinha/Feirinha";
import Perfil from "./../pages/perfil/perfil";
import Blog from "./../pages/Blog/Blog";
import Compra from "./../pages/Compra/Compra"
import EscolhaCad from "./../pages/Escolha/EscolhaCad";
import EscolhaLog from "./../pages/Escolha/EscolhaLog";
import CadastroUser from "./../pages/Cadastro/cadastro_usuario";
import CadastroEmp from "./../pages/Cadastro/cadastro_empresa";
import LoginUsuario from "../pages/Login/LoginUsuario";
import LoginEmp from "../pages/Login/LoginEmpresa";
import LoginArtesao from "../pages/Login/LoginArtesao";
import CadastroArt from "./../pages/Cadastro/cadastro_artesao";
import Pagamento from "./../pages/Pagamento/Pagamento";
import Materiais from "./../pages/Materiais/Materiais";
import Usuario from "./../pages/usuario/usuario"
import Artesao from './../pages/Artesoes/Artesoes';

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
            <Route path="/artesoes" element={<Artesao/>} />
            <Route path="/escolhacad" element={<EscolhaCad/>}/>
            <Route path="/escolhalog" element={<EscolhaLog/>}/>
            <Route path="/cadastro_usuario" element={<CadastroUser/>}/>
            <Route path="/cadastro_empresa" element={<CadastroEmp/>}/>
            <Route path="/login_usuario" element={<LoginUsuario/>}/>
            <Route path="/login_empresa" element={<LoginEmp/>}/>
            <Route path="/login_artesao" element={<LoginArtesao/>}/>
            <Route path="/cadastro_artesao" element={<CadastroArt/>}/>
            <Route path="/pagamento" element={<Pagamento/>} />
            <Route path="/materiais" element={<Materiais />} />
            <Route path="/usuario" element={<Usuario/>} />
        </Routes>
    )
}

export default AppRoutes;