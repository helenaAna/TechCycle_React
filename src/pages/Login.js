import React from 'react';
import Cabecalho from '../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';
import '../assets/css/padrao.css'
import '../assets/css/login.css'
import Axios from 'axios';


function Login() {
  return (
    <div className="body_login">
        <Cabecalho/>
        <main className="main_login">
            <section className="area_login">
                <h1>Entrar</h1>
                <form>
                   <label for="nome">Nome:</label>
                   <i className="fas fa-user-friends"></i>
                   <input className="linha_usuario" type="text" name="nome" placeholder="Digite seu nome de usuário"/>
                   <label for="senha">Senha:</label>
                   <i className="fas fa-lock"></i>
                   <input type="text" name="senha" placeholder="Digite sua senha"/>
                </form>
                <a href="#">Esqueceu a senha?</a>
                <div class="botao_login">
                <button className="entrar_login botao" type="submit" value="Entrar">Entrar</button>
                <button className="cadastrar_login botao" type="submit" value="Cadastrar">Cadastrar</button>
                </div>
            </section>
        </main>
        <Rodape/>
        <script src="https://kit.fontawesome.com/e6d6edbc99.js"></script>
    </div>
  );
}

export default Login;
