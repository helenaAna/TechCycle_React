import React, { Component } from 'react';
import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';


class EditarPerfilUsuario extends Component {
    constructor() {
        super()
        this.state = {

            // Listar - Get
            listarUsu: [],

            // Post
            postUsuario: {
                ListaUsuario: [],
                loginUsuario: '',
                senha: '',
                nome: '',
                email: '',
                foto: '',
                departamento: '',
                tipoUsuario: ''
            },

            fileInput: React.createRef()

        }
    }


    render() {
        return (
            <div>
                <CabecalhoUser />

                <main className="cadUsuario_main">
                    <h1>Cadastro de Usuario</h1>
                    <hr></hr>

                    <form className="usuario_formulario" onSubmit={this.cadastroUsuario}>

                        <section className="coluna_cad_usu_1">

                            <div className="usuario_secao_imagem_cad">
                                {/* <img src="{require("../}" alt="icone de alterar imagem"></img> */}
                                <img src={require("../assets/img/camera.svg")} />
                            </div>


                            <div class='input-wrapper'>
                                <label for='input-file'> <i class="fas fa-upload"></i>     Selecionar um arquivo</label>
                                <input id='input-file' type='file'
                                    arial-label="coloque sua foto"
                                    ref={this.state.fileInput}
                                />
                                <span id='file-name'></span>
                            </div>

                            <p>*Está foto estará disponibilizada para que o administrador posso vizualiza-lá</p>
                        </section>

                        <section className="coluna_cad_usu">

                            <section className="usuario_row">

                                <div>
                                    <label><i className="far fa-address-book"></i>     Informe seu nome</label>
                                    <input
                                        type="text"
                                        onChange={this.atualizaState}
                                        value={this.state.nome}
                                        required
                                        className="input_box"
                                        name="nome"
                                        placeholder="Digite seu nome" />
                                </div>

                                <div>
                                    <label><i className="far fa-address-book"></i>     Informe seu login</label>
                                    <input
                                        type="text"
                                        value={this.state.loginUsuario}
                                        onChange={this.atualizaState}
                                        className="input_box"
                                        required
                                        name="loginUsuario"
                                        placeholder="Digite seu login" />
                                </div>
                            </section>

                            <section className="usuario_row">
                                <div>
                                    <label><i className="fas fa-lock"></i>     Informe sua senha</label>
                                    <input
                                        id="inputs1"
                                        type="password"
                                        onChange={this.atualizaState}
                                        value={this.state.senha}
                                        className="input_box"
                                        required
                                        name="senha"
                                        placeholder="Digite sua senha" />
                                </div>

                                <div>
                                    <label><i className="fas fa-unlock-alt"></i>     Confirme sua senha</label>
                                    <input
                                        id="inputs2"
                                        type="password"
                                        
                                        className="input_box"
                                        name="confirmes"
                                        placeholder="Confirme sua senha">
                                    </input>
                                </div>
                            </section>


                            <section className="usuario_row">
                                <div>
                                    <label><i className="far fa-address-card"></i>     Informe seu email</label>
                                    <input
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.atualizaState}
                                        className="input_box"
                                        required
                                        name="email"
                                        placeholder="Digite seu email" />
                                </div>

                                <div>
                                    <label><i className="far fa-address-book"></i>     Informe seu departamento</label>
                                    <input
                                        type="text"
                                        value={this.state.departamento}
                                        onChange={this.atualizaState}
                                        className="input_box"
                                        required
                                        name="departamento"
                                        placeholder="Digite seu departamento" />
                                </div>
                            </section>

                            <section className="usuario_row_none">
                                <div>
                                    <label><i className="far fa-address-book"></i>Informe seu Tipo Usuário</label>
                                    <input
                                        type="text"
                                        value={this.state.tipoUsuario}
                                        onChange={this.atualizaState}
                                        className="input_box"
                                        value="funcionario"
                                        name="tipoUsuario"
                                        placeholder="Digite seu tipo de usuário" />
                                </div>
                            </section>

                            <section className="usuario_row">
                                <div className="botao_cad_usuario">
                                    <button type="submit" ><i className="far fa-arrow-alt-circle-up"></i> Solicitar cadastro</button>
                                </div>

                            </section>



                        </section>

                    </form>
                </main>

                <Rodape />
            </div>
        )
    }

}
export default EditarPerfilUsuario;