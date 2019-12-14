import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/listainteresse.css';

class Aprovacoes extends Component{
   constructor(props){
       super(props);
       this.state ={
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

buscaUsuario(){

}
busca

   
    render(){
        return(
            <div>
                <CabecalhoAdm/>
                <main>
            <section className="titulo_interesses">
                <h1>Lista de Aprovações</h1>
                <hr></hr>
            </section>

            <nav class="nav_tabs">
			<ul>
                <li>
                    <input type="radio" id="tab1" class="rd_tab" name="tabs" checked> 
                    </input>
                    <label for="tab1" class="tab_label">Interesses Aprovados</label>
                    <div class="tab-content">
                        <h2></h2>
                        <article>
                            <section className="lista_aprovados">
                                <ul className="lista_aprovados">
                                    {
                                        this.state.listainteresse.map(function (interesse) {
                                            if (interesse.aprovado == "Sim") {
                                                
                                                return (
                                                    
                                                    <li className="linha" value="{interesse.idInteresse}">
                                                        <div className="li_imagem">
                                                            <img src={"http://localhost:5000/Resources/Anuncio/" + interesse.foto} alt="imagem do produto" />
                                                        </div>
                                                        {console.log(interesse.foto)}
                                                        <div className="li_titulo">
                                                            <h3>{interesse.idAnuncioNavigation.idProdutoNavigation.nomeProduto}</h3>
                                                        </div>
                                                        <div className="li_descricao">
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
                    <input type="radio" id="tab2" class="rd_tab" name="tabs" checked> 
                    </input>
                    <label for="tab2" class="tab_label">Interesses sem resposta</label>

                    <div class="tab-content">
                        <article>
                            <section className="lista_aprovados">
                                <ul className="lista_aprovados">
                                {
                                    this.state.listainteresse.map(function (interesse) {
                                        if (interesse.aprovado == "Não") {
                                            
                                            return (
                                            
                                                <li className="linha" value="{interesse.idInteresse}">
                                                    <div className="li_imagem">
                                                        <img src={"http://localhost:5000/Resources/Anuncio/" + interesse.foto} alt="imagem do produto" />
                                                    </div>
                                                    {console.log(interesse.foto)}
                                                    <div className="li_titulo">
                                                        <h3>{interesse.idAnuncioNavigation.idProdutoNavigation.nomeProduto}</h3>
                                                    </div>
                                                    <div className="li_descricao">
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