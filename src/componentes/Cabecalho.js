import React from 'react';
import '../assets/css/padrao.css'
import '../assets/css/cabecalho.css'


function Cabecalho(){
    return(
    <header id="topo">
        <a href="#"><img src={require("../assets/img/Logo.svg")} alt="Logotipo"/></a>
        <nav>
            <ul>
                <li><a href="#">Sobre Nós</a></li>
            </ul>
        </nav>

    </header>
    );
}
export default Cabecalho;