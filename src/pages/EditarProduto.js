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
            deleteProduto:{
                listaProduto: [],
                idProduto: '',
                nomeProduto: '',
                modelo: '',
                marca:'',
                processador:'',
                dataLancamento:'',
                codIdentificacao:'',
                descricao: ''
            }
        }
    }

    alterarProduto = (produto) =>
    {
        this.setState({
            idProduto: produto.idProduto,
            nomeProduto: produto.nomeProduto,
            modelo: produto.modelo,
            marca: produto.marca,
            processador: produto.processador,
            dataLancamento: produto.dataLancamento,
            codIdentificacao: produto.codIdentificacao,
            descricao: produto.descricao
        })
    }
    salvarAlteracao = (event) =>
    {
        event.preventDefault();

        fetch('http://localhost:5000/api/produto'+this.state.deleteProduto.idProduto,
        {
            method : "PUT",
            body: JSON.stringify(this.state.deleteProduto.idProduto),
            headers: {
                "Content-Type" : "application/json" 
            }
        })
    }

    atualizaState = (input) => {

        this.setState({
            deleteProduto: {
                ...this.state.deleteProduto,
                [input.target.name]: input.target.value
            }
        })
    }
    

    render(){
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
                                placeholder="Nome..."
                                
                                />
                               
                            </div>
                            <div>
                                <label for="sobrenome"><i className="far fa-keyboard"></i> Modelo do equipamento</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="modelo" 
                                placeholder="Modelo..."
                                
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
                                placeholder="Fabricante..."
                                
                                />
                                 
                            </div>
                            <div>
                                <label for="procecssador"><i className="fas fa-gopuram"></i>Processador</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="processador" 
                                placeholder="Precessador..."
                                
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
                                placeholder="Data de lançamento..."
                                
                                />
                                

                            </div>
                            <div>
                                <label for="codigoIdentificacao"><i className="fas fa-qrcode"></i> Codigo de identificação</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="codIdentificacao" 
                                placeholder="Identificação..."
                                
                                />
                                
                            </div>
                        </section>
                        <section className="descricao_cad_produto">
                        <label for="descricao"><i className="fas fa-desktop"></i>Descrição do equipamento</label>
                        <textarea 
                        name="descricao" 
                        cols="30" 
                        rows="10"
                        placeholder="Descrição..."
                       
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
