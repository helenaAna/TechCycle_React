import React, { Component } from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';
import '../assets/css/perfilUsuario.css';

class PerfilUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUsuario: [],
            loginUsuario: '',
            senha: '',
            nome: '',
            email: '',
            foto: '',
            departamento: '',
            tipoUsuario: ''
        }
        this.searchuser = this.searchuser.bind(this)
    }

    searchuser() {
        fetch('http://localhost:5000/api/usuario')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaUsuario: data }))
            .catch((erro) => console.log(erro))
    }
    componentDidMount() {
        this.searchuser();
    }
    render() {
        return (
            <div>
                <CabecalhoAdm />
                <main>

                    <section class="titulo_pu">
                        <h1>Perfil de Usuário</h1>
                        <hr></hr>
                    </section>

                    <div className="container_pu">
                        <section className="secao_imagem_pu">
                            <img src={require("../assets/img/FotoPerfil.jpg")} alt="icone de alterar imagem" />
                            <div className="box_adicionar-foto_pu"></div>
                        </section>

                        <section className="form_cadastro">
                            <form action="" className="formulario">

                                <section className="container_form_pu">

                                    <section className="row_pu">
                                        <div>
                                            <label for="nome"><i class="far fa-address-book"></i>Informe seu nome</label>
                                            <input type="text" id="input_box" name="nome" placeholder="Digite seu nome"></input>
                                        </div>

                                        <div>
                                            <label for="sobrenome"><i class="far fa-address-card"></i> Informe seu sobrenome</label>
                                            <input type="text" id="input_box" name="nome" placeholder="Digite seu sobrenome"></input>
                                        </div>
                                    </section>

                                    <section className="row_pu">
                                        <div>
                                            <label for="usuario"><i class="far fa-user"></i> Informe seu usuário</label>
                                            <input type="text" id="input_box" name="usuario" placeholder="Digite seu nome de usuario"></input>
                                        </div>
                                        <div>
                                            <label for="email"><i class="far fa-envelope"></i> Informe seu email</label>
                                            <input type="text" id="input_box" name="email" placeholder="Digite seu email"></input>
                                        </div>
                                    </section>

                                    <section className="row_pu">
                                        <div>
                                            <label for="senha"><i class="fas fa-lock"></i> Informe sua senha</label>
                                            <input type="text" id="input_box" name="senha" placeholder="Digite sua senha"></input>
                                        </div>
                                        <div>
                                            <label for="confirme"><i class="fas fa-unlock-alt"></i> Confirme sua senha</label>
                                            <input type="text" id="input_box" name="confirme" placeholder="Confirme sua senha"></input>
                                        </div>
                                    </section>
                                </section>

                                <div className="box_pu">
                                    <div className="botao_pu">
                                        <button type="submit" class="roxo"><i class="far fa-edit"></i><a href="edicao_perfil.html">Editar Perfil</a></button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>

                    {/* <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>loginUsuario</th>
                                    <th>senha</th>
                                    <th>nome</th>
                                    <th>email</th>
                                    <th>foto</th>
                                    <th>departamento</th>
                                    <th>tipoUsuario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaUsuario.map(function(usuario){
                                        return(
                                            <tr key = {usuario.idUsuario}>
                                                <td>{usuario.idUsuario}</td>
                                                <td>{usuario.loginUsuario}</td>
                                                <td>{usuario.senha}</td>
                                                <td>{usuario.nome}</td>
                                                <td>{usuario.email}</td>
                                                <td>{usuario.foto}</td>
                                                <td>{usuario.departamento}</td>
                                                <td>{usuario.tipoUsuario}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table> */}



                </main>
                <Rodape />
            </div>
        )
    }
}
export default PerfilUsuario;