import React from 'react';
import '../assets/css/padrao.css'
import '../assets/css/cabecalho.css'

function Cabecalho(){
    return(
    <div>
    <header id="topo">
        <a href="#"><img src={require("../assets/img/Logo.svg")} alt="Logotipo"/></a>
        <nav>
            <ul>
                <li><a href="#">Sobre Nós</a></li>
            </ul>
        </nav>
    </header>
    {/* menu lateral */}
    <input type="checkbox" id="chk"/>
    <label for="chk" className="menu-icon">&#9776;</label>

    <div className="home_bg">

    </div>

    <nav className="menu" id="principal">
        <div className="foto-perfil">
            <img src="imagens/FotoPerfil.jpg" alt=""/>
        </div>
        <ul className="menu-admin">
            <li><a href="perfil_usuario.html">Meu Perfil <span><i className="far fa-user-circle"></i></span></a></li>
            <li><a href="lista_interesses.html">Lista de Interesse <span><i
                            class="fas fa-clipboard-list"></i></span></a></li>
        </ul>

        <ul>
            <li><a href="" id="voltar"><i className="fas fa-arrow-left"></i></a></li>
            <li><a href="index.html" className="botao-sair">Sair <span><i class="fas fa-sign-out-alt"></i></span></a></li>
        </ul>
    </nav>
    </div>
    );
}
export default Cabecalho;