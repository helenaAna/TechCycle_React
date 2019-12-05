import React, {Component} from 'react';

import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape  from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/cadastroproduto.css';


class CadastroProduto extends Component
{
    constructor(props){
        super(props);
        this.state = {

            postProduto:{
                listaProduto: [],
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
    cadastraProduto = (e) => {
        e.preventDefault();

        let produto = {
            nomeProduto: this.state.postProduto.nomeProduto,
            modelo: this.state.postProduto.modelo,
            marca: this.state.postProduto.marca,
            procecssador: this.state.postProduto.processador,
            dataLancamento: this.state.postProduto.dataLancamento,
            codIdentificacao: this.state.postProduto.codIdentificacao,
            descricao: this.state.postProduto.descricao
        }

        fetch('http://localhost:5000/api/produto', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(produto)
        })
        
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error)) 
    }
   
    atualizaState = (input) => {

        this.setState({
            postProduto: {
                ...this.state.postProduto,
                [input.target.name]: input.target.value
            }
        })
    }
    
    
  
    render(){
        return(
            <div>
            <CabecalhoAdm/>
            <main>
        <section class="titulo_cad_produto">
            <h1>Cadastro de Produtos</h1>
            <hr/>
        </section>
        <div class="container_cad_produto">
            
            <section class="form_cadastro">
                <form onSubmit={this.cadastraProduto} class="formulario">

                    <section class="container_form_cad_produto">

                        <section class="row_cad_produto">
                            <div>
                                <label for="nome"><i class="fas fa-desktop"></i>Nome do equipamento</label>
                                <input
                                type="text" 
                                id="input_box" 
                                name="nomeProduto" 
                                placeholder="Nome..."
                                value={this.state.nomeProduto}
                                onChange={this.atualizaState}
                                />
                               
                            </div>
                            <div>
                                <label for="sobrenome"><i class="far fa-keyboard"></i> Modelo do equipamento</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="modelo" 
                                placeholder="Modelo..."
                                value={this.state.modelo}
                                onChange={this.atualizaState}
                                />
                                
                            </div>
                        </section>

                        <section class="row_cad_produto">
                            <div>
                                <label for="usuario"><i class="fas fa-industry"></i> Fabricante do equipamento</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="marca" 
                                placeholder="Fabricante..."
                                value={this.state.marca}
                                onChange={this.atualizaState}
                                />
                                 
                            </div>
                            <div>
                                <label for="procecssador"><i class="fas fa-gopuram"></i>Processador</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="processador" 
                                placeholder="Precessador..."
                                value={this.state.processador}
                                onChange={this.atualizaState}
                                />
                                
                            </div>
                        </section>

                        <section class="row_cad_produto">
                            <div>
                                <label for="lancamento"><i class="far fa-calendar-alt"></i> Data de lançamento</label>
                                <input 
                                type="date" 
                                id="input_box" 
                                name="dataLancamento" 
                                placeholder="Data de lançamento..."
                                value={this.state.dataLancamento}
                                onChange={this.atualizaState}
                                />
                                

                            </div>
                            <div>
                                <label for="codigoIdentificacao"><i class="fas fa-qrcode"></i> Codigo de identificação</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="codIdentificacao" 
                                placeholder="Identificação..."
                                value={this.state.codIdentificacao}
                                onChange={this.atualizaState}
                                />
                                
                            </div>
                        </section>
                        <section class="descricao_cad_produto">
                        <label for="descricao"><i class="fas fa-desktop"></i>Descrição do equipamento</label>
                        <textarea 
                        name="descricao" 
                        cols="30" 
                        rows="10"
                        placeholder="Descrição..."
                        value={this.state.descricao}
                        onChange={this.atualizaState.bind(this)}
                        />
                        </section>

                    <div class="botao_cad_produto">
                            <button type="submit" class="bot_cad_cadastrar">
                            <i class="fas fa-plus-circle"></i> Adicionar produto
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
export default CadastroProduto;