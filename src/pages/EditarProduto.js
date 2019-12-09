import React, {Component} from 'react';

import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape  from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/cadastroproduto.css';




class EditarProduto extends Component
{ 
    constructor(props){
    super(props);
    this.state = {
            idProduto:{
            },
            produto : [],
        }
    }

    // alterarProduto = (produto) =>
    // {
    //     this.setState({
    //         idProduto: this.props.produto.idProduto,
    //         nomeProduto: this.props.produto.nomeProduto,
    //         modelo: this.props.produto.modelo,
    //         marca: this.props.produto.marca,
    //         processador: this.props.produto.processador,
    //         dataLancamento: this.props.produto.dataLancamento,
    //         codIdentificacao: this.props.produto.codIdentificacao,
    //         descricao: this.props.produto.descricao
    //     })
       
    // }

    salvarAlteracao = (event) =>
    {
        event.preventDefault();

        fetch('http://localhost:5000/api/produto/'+ this.state.alteraProduto.idProduto,
        {
            method : "PUT",
            body: JSON.stringify(this.state.alteraProduto.idProduto),
            headers: {
                "Content-Type" : "application/json" 
            }
        })
    }

    atualizaState = (input) => {

        this.setState({
            alteraProduto: {
                ...this.props.alteraProduto,
                [input.target.name]: input.target.value
            }
        })
    }

    componentDidMount(){
        this.buscaProduto()
        this.setState({
            idProduto : this.props.location.state.idProduto,
        })
    }

    buscaProduto(){
        console.log(this.state.idProduto)
        fetch('http://localhost:5000/api/produto/' + this.props.location.state.idProduto)
        .then(resposta => resposta.json())
        .then(data => this.setState({ produto : data}))
        .catch(erro => console.log(erro))
    }

    render(){
        console.log(this.state.idProduto + " certinhooooo")
        console.log(this.state.produto)
        return(
            <div>
                <CabecalhoAdm/>
                <main>
        <section className="titulo_cad_produto">
            <h1>Editar Produtos</h1>
            <hr/>
        </section>
        <div className="container_cad_produto">
            
            <section className="form_cadastro">
                <form  className="formulario">

                    <section className="container_form_cad_produto">

                        <section className="row_cad_produto">
                            <div>
                                <label for="nome"><i className="fas fa-desktop"></i>Nome do equipamento</label>
                                <input
                                type="text" 
                                id="input_box" 
                                name="nomeProduto" 
                                placeholder={this.state.produto.nomeProduto}
                                
                                />
                               
                            </div>
                            <div>
                                <label for="sobrenome"><i className="far fa-keyboard"></i> Modelo do equipamento</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="modelo" 
                                placeholder={this.state.produto.modelo}
                                
                                />
                                
                            </div>
                        </section>

                        <section className="row_cad_produto">
                            <div>
                                <label for="usuario"><i className="fas fa-industry"></i> Fabricante do equipamento</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="marca" 
                                placeholder={this.state.produto.marca}
                                
                                />
                                 
                            </div>
                            <div>
                                <label for="procecssador"><i className="fas fa-gopuram"></i>Processador</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="processador" 
                                placeholder={this.state.produto.processador}
                                
                                />
                                
                            </div>
                        </section>

                        <section className="row_cad_produto">
                            <div>
                                <label for="lancamento"><i className="far fa-calendar-alt"></i> Data de lançamento</label>
                                <input 
                                type="date" 
                                id="input_box" 
                                name="dataLancamento" 
                                placeholder={this.state.produto.dataLancamento}
                                
                                />
                                

                            </div>
                            <div>
                                <label for="codigoIdentificacao"><i className="fas fa-qrcode"></i> Codigo de identificação</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="codIdentificacao" 
                                placeholder={this.state.produto.codIdentificacao}
                                
                                />
                                
                            </div>
                        </section>
                        <section className="descricao_cad_produto">
                        <label for="descricao"><i className="fas fa-desktop"></i>Descrição do equipamento</label>
                        <textarea 
                        name="descricao" 
                        cols="30" 
                        rows="10"
                        placeholder={this.state.produto.descricao}
                       
                        />
                        </section>

                    <div className="botao_cad_produto">
                            <button type="submit" className="bot_cad_cadastrar">
                            <i className="fas fa-plus-circle"></i> Editar Produto
                        </button>
                    </div>

                    </section>
                </form>
            </section>
        </div>
    </main>
                <Rodape/>
            </div>
        );
    }
}
export default EditarProduto;
