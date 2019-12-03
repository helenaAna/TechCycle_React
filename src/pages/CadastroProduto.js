import React, {Component} from 'react';

import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/cadastroproduto.css';


class CadastroProduto extends Component
{
    constructor(props){
        super(props);
        this.state = {
            listaProduto: [],
            nomeProduto: '',
            modelo: '',
            marca:'',
            processador:'',
            dataLancamento:'',
            codIdentificacao:'',
            descricao: ''
        }
        this.atualizaEstadoNomeProduto = this.atualizaEstadoNomeProduto.bind(this);
        this.atualizaEstadoModelo = this.atualizaEstadoModelo.bind(this);
        this.atualizaEstadoMarca = this.atualizaEstadoMarca.bind(this);
        this.atualizaEstadoProcessador = this.atualizaEstadoProcessador.bind(this);
        this.atualizaEstadoDataLancamento = this.atualizaEstadoDataLancamento.bind(this);
        this.atualizaEstadoIdentificacao = this.atualizaEstadoIdentificacao.bind(this);
        this.atualizaEstadoDescricao = this.atualizaEstadoDescricao.bind(this);
        this.CadastroProduto = this.cadastroProduto.bind(this);
    }
    atualizaEstadoNomeProduto(event)
    {
        this.setState({nomeProduto:event.target.value})
    }
    atualizaEstadoModelo(event)
    {
        this.setState({modelo:event.target.value})
    }
    atualizaEstadoMarca(event)
    {
        this.setState({marca:event.target.value})
    }
    atualizaEstadoProcessador(event)
    {
        this.setState({processador:event.target.value})
    }
    atualizaEstadoDataLancamento(event)
    {
        this.setState({dataLancamento:event.target.value})
    }
    atualizaEstadoIdentificacao(event)
    {
        this.setState({codIdentificacao:event.target.value})
    }
    atualizaEstadoDescricao(event)
    {
        this.setState({descricao:event.target.value})
    }
    cadastroProduto(event){
    event.preventDefault();
        fetch('http://localhost:5000/api/produtos',
        {
            method: 'POST',
            body: JSON.stringify({
                nomeProduto: this.state.nomeProduto,
                modelo: this.state.modelo,
                marca: this.state.marca,
                processador: this.state.processador,
                dataLancamento:this.state.dataLancamento,
                codIdentificacao: this.state.codIdentificacao,
                descricao: this.state.descricao
            }),
            headers:{
                "Content-type" : "application/json"
            }
        })
        .then(resposta => {
            if(resposta.status === 200){
                console.log('Produto cadastrado!');
            }
        })
        .catch(erro => console.log(erro))
    }
    componentDidMount()
    {
        this.cadastroProduto();
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
                                name="nomeproduto" 
                                placeholder="Nome..."
                                value={this.state.nomeProduto}
                                onChange={this.atualizaEstadoNomeProduto}
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
                                onChange={this.atualizaEstadoModelo}
                                />
                            </div>
                        </section>

                        <section class="row_cad_produto">
                            <div>
                                <label for="usuario"><i class="fas fa-industry"></i> Fabricante do equipamento</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="usuario" 
                                placeholder="Fabricante..."
                                value={this.state.marca}
                                onChange={this.atualizaEstadoMarca}
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
                                onChange={this.atualizaEstadoProcessador}
                                />
                            </div>
                        </section>

                        <section class="row_cad_produto">
                            <div>
                                <label for="lancamento"><i class="far fa-calendar-alt"></i> Data de lançamento</label>
                                <input 
                                type="date" 
                                id="input_box" 
                                name="lacamento" 
                                placeholder="Data de lançamento..."
                                value={this.state.dataLancamento}
                                onChange={this.atualizaEstadoDataLancamento}
                                />


                            </div>
                            <div>
                                <label for="codigoIdentificacao"><i class="fas fa-qrcode"></i> Codigo de identificação</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="confirme" 
                                placeholder="Identificação..."
                                value={this.state.codIdentificacao}
                                onChange={this.atualizaEstadoIdentificacao}
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
                        onChange={this.atualizaEstadoDescricao}
                        />
                        </section>

                    </section>

                    <div class="botao_cad_produto">
                            <button type="submit" class="bot_cad_cadastrar">
                            <a href="produtos_cadastrados.html"><i class="fas fa-plus-circle"></i> Adicionar produto</a> 
                        </button>
                    </div>
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