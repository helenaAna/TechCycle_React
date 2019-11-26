import React from 'react';

function MenuUsuario(){
    return(
        <nav className="menu" id="principal">
            <div class="foto-perfil">
                <img src={require("../assets/img/FotoPerfil.jpg")}/>
            </div>
            <ul className="menu-admin">
                <li><a href="#">Meu Perfil <span><i class="far fa-user-circle"></i></span></a></li>
                <li><a href="#">Meu Perfil <span><i class="far fa-user-circle"></i></span></a></li>
                <li><a href="#">Meu Perfil <span><i class="far fa-user-circle"></i></span></a></li>
                <li><a href="#">Meu Perfil <span><i class="far fa-user-circle"></i></span></a></li>
                <li><a href="#">Meu Perfil <span><i class="far fa-user-circle"></i></span></a></li>
                                
            </ul>
        </nav>
    );
}
export default MenuUsuario;
