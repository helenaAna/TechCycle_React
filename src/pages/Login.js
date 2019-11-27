import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm'
import Rodape from '../componentes/Rodape';
import '../assets/css/padrao.css'
import '../assets/css/login.css'
import Axios from 'axios';


class Login extends Component 
{
  constructor(props){
    super(props);
    this.state = {
      loginUsuario: '',
      senha: '',
      loading: false
    }
  }
  efetuarLogin(event)
  {
    event.preventDefault();
    this.setState({loading : true});

    Axios.post('http://localhost:5000/api/login',
    {
      loginUsuario : this.state.loginUsuario,
      senha : this.state.senha
    })
    .then(data => 
    {
      if(data.status === 200)
      {
        localStorage.setItem('usiario-tech', data.data.token)
        this.setState({loading : false})
      }
    })
  }

  atualizaLogin(event)
  {
    this.setState({[event.target.name] : event.target.value})
  }

  render(){
    return(
      <div className="body_login">
        <CabecalhoAdm/>
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
    )
  }
}

export default Login;
