import React, { Component } from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

class PerfilUsuario extends Component {
    constructor(props){
        super(props);
        this.state = {
            listaUsuario : [],
            loginUsuario : '',
            senha : '',
            nome : '',
            email : '',
            foto : '',
            departamento : '',
            tipoUsuario : ''
        }
        this.searchuser = this.searchuser.bind(this)
    }

    searchuser(){
        fetch('http://localhost:5000/api/usuario')
        .then(resposta => resposta.json())
        .then(data => this.setState({listaUsuario : data}))
        .catch((erro) => console.log(erro))
    }
    componentDidMount(){
        this.searchuser();
    }
    render(){
        return (
            <div>
                <CabecalhoAdm/>
                    <main>
                        <table>
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
                        </table>

                        

                    </main>
                <Rodape/>
            </div>
        )
    }
}
export default PerfilUsuario;