import React, {Component} from 'react';

import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/listaproduto.css'

class ListaProduto extends Component
{
    constructor(props){
        super(props);
        this.state = {
            listaproduto: [],
            nomeProduto: '',
            descricao:''
        }

        this.buscarProdutos = this.buscarProdutos.bind(this);
    }
    
    buscarProdutos()
    {
        fetch('http://localhost:5000/api/produto')
        .then(resposta => resposta.json())
        .then(data =>{
           this.setState({listaproduto : data});
        })
        .catch((erro) =>{
          console.log(erro);
        })
    }
    
    componentDidMount()
    {
    this.buscarProdutos();
    }
    render(){
        return(
        <div>
        <CabecalhoAdm/>
        <main className="produtoCadastrado_main">
        <h1>Produtos Cadastrados</h1>
        <hr/>
        <div>
        {
            this.state.listaproduto.map(function(produto){
                return(
                    <div className="home_card" key ={produto.idProduto}>
                        <div className="home_img"> 
                            <img src={require("../assets/img/laptip.svg")}  alt="Macbook"/>
                        </div>
                        <div className="home_linha">
                            <h3 className="home_nomeProduto">{produto.nomeProduto}</h3>
                        </div>
                        <div className="home_texto">
                            <p>{produto.descricao}</p>
                        </div>
                        <div className="home_linha">
                        <div className="home_btn"><a href="cadastrodeanuncio.html">Adicionar Anúncio</a></div>
                        </div>
                    </div>
                    )
                })
        }
        </div>
        </main>
        <Rodape/>
        </div>
        );
    }
}
export default ListaProduto;