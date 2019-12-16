import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/listainteresse.css'

class Aprovacoes extends Component{
   constructor(props){
       super(props);
       this.state ={
           listaInteresse: [],
            usuario: {
               nome:'',
               departamento:''
           },
           produto:{
            nomeUsuario: '',
            nomeProduto:''
           }

       }
   }

   buscarUsuario(){
    fetch("http://localhost:5000/api/usuario/buscarTipo/aguardandoaprovacao")
    .then(response => response.json())
    .then(data => {
        this.setState({listaInteresse:data})
    })
    .catch((error) => console.log(error))
}
componentDidMount(){
    this.buscarUsuario();
}


   
    render(){
        return(
            <div>
                <CabecalhoAdm/>
                <main>
                <section classNameName="titulo_interesses">
                    <h1>Lista de aprovações</h1>
                    <hr/>
                </section>
                <nav className="nav_tabs">
                    <ul>
                        <li>
                        <input type="radio" id="tab1" className="rd_tab" name="tabs" checked/>
                        <label for="tab1" className="tab_label">Lista de Interesses</label>
                        <div className="tab-content">
                        <article>
                            <section classNameName="lista_aprovados">
                                <ul classNameName="lista_aprovados">
                                    {
                                        this.state.listainteresse.map(function (interesse) {
                                            if (interesse.aprovado == "Sim") {
                                                
                                                return (
                                                    
                                                    <li classNameName="linha" value="{interesse.idInteresse}">
                                                        <div classNameName="li_imagem">
                                                            <img src={"http://localhost:5000/Resources/Anuncio/" + interesse.foto} alt="imagem do produto" />
                                                        </div>
                                                        {console.log(interesse.foto)}
                                                        <div classNameName="li_titulo">
                                                            <h3>{interesse.idAnuncioNavigation.idProdutoNavigation.nomeProduto}</h3>
                                                        </div>
                                                        <div classNameName="li_descricao">
                                                            <p>{interesse.idAnuncioNavigation.idProdutoNavigation.descricao}</p>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        }.bind(this))
                                    }
                                </ul>
                            </section>
                        </article> 
                        </div>
                        </li>
                        <li>
                        <input type="radio" id="tab2" className="rd_tab" name="tabs" checked> 
                    </input>
                    <label for="tab2" className="tab_label">Interesses sem resposta</label>

                    <div className="tab-content">
                        <article>
                            <section classNameName="lista_aprovados">
                                <ul classNameName="lista_aprovados">
                                {
                                    this.state.listainteresse.map(function (interesse) {
                                        if (interesse.aprovado == "Não") {
                                            
                                            return (
                                            
                                                <li classNameName="linha" value="{interesse.idInteresse}">
                                                    <div classNameName="li_imagem">
                                                        <img src={"http://localhost:5000/Resources/Anuncio/" + interesse.foto} alt="imagem do produto" />
                                                    </div>
                                                    {console.log(interesse.foto)}
                                                    <div classNameName="li_titulo">
                                                        <h3>{interesse.idAnuncioNavigation.idProdutoNavigation.nomeProduto}</h3>
                                                    </div>
                                                    <div classNameName="li_descricao">
                                                        <p>{interesse.idAnuncioNavigation.idProdutoNavigation.descricao}</p>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    }.bind(this))
                                }
                                </ul>
                            </section>
                        </article> 
                    </div>
                        </li>
                    </ul> 
                </nav>
                </main>
                <Rodape/>
            </div>
        )
    }
}
export default Aprovacoes;