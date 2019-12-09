import React, { Component } from 'react';

import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/alteraranuncio.css';

class AlterarAnuncio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaproduto: [],
            nomeProduto: '',
            descricao: '',

            postAnuncio: {
                listaAnuncio: [],
                cadastrarPreco: '',
                dataExpiracao: ''
            },

            preco : '',
            data : '',

            fileInput: React.createRef()
        }
    }
    cadastraAnuncio(idProduto){
        // e.preventDefault();

        console.log(idProduto + " amvfjhkvjbnmsa")

        let anuncio = new FormData();

        anuncio.set("cadastrarPreco", this.state.cadastraAnuncio.cadastrarPreco);
        anuncio.set("dataExpiracao", this.state.cadastraAnuncio.dataExpiracao);

        fetch('http://localhost:5000/api/anuncio', {
            method: "POST",
            body: anuncio,
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))
    }

    buscarProdutos() {
        fetch('http://localhost:5000/api/produto')
            .then(resposta => resposta.json())
            .then(data => {
                this.setState({ listaproduto: data });
            })
            .catch((erro) => {
                console.log(erro);
            })
    }

    atualizaState = (input) => {
        this.setState({
            cadastraAnuncio: {
                ...this.state.cadastraAnuncio,
                [input.target.name]: input.target.value
            }
        })
    }

    componentDidMount() {
        this.buscarProdutos()
    }

    render() {
        // console.log(this.state.listaproduto)
        return (
            <div>
                {<CabecalhoUser />}

                <main className="conteudo_cdu">
                    <div className="titulo_cdu">
                        <h1 className="h1_cdu">Alterar anúncio</h1>
                        <hr className="linha_cadastrodeanuncio_cdu" />
                    </div>

                    <section id="container_selecao_anuncio_cdu">

                        <section className="criar_anuncio_cdu">

                            <form class="selecaodoanuncio_cdu1">
                                <input type="text" alt="Selecione o produto" placeholder="Selecione o produto"
                                    className="barraanuncio_cdu1" />
                            </form>

                            {
                                this.state.listaproduto.map(produto => {
                                    return (
                                        <div className="notebooksanuncio_cdu" key={produto.idProduto}
                                            onClick={e => this.cadastraAnuncio(produto.idProduto)}>
                                            <div className="imagem_notebook">
                                                <img src={require("../assets/img/Dell-Inspiron-I14-7472-A20G.png")} />
                                            </div>
                                            <p>{produto.nomeProduto}</p>
                                            

                                        </div>
                                    )
                                })
                            }
                        </section>


                        <section className="descricao_do_produto_cdu">

                            <section className="informacoes_do_produto_cdu">

                                <div className="amostra_do_produto_cdu">
                                    <img src={require("../assets/img/macp1.png")} />
                                </div>

                                <div className="amostra_descricao_cdu">
                                    <p>Descrição do produto:</p>
                                    <h2>Macbook pro</h2>
                                    <p>MacBook Pro TouchBar 15 256gb 2018 - AAPL.</p>
                                    <p> Tela de 15,4 polegadas (na diagonal) retroiluminada
                            por LED com tecnologia IPS.</p>
                                    <p>SSD de 256 GB.</p>
                                </div>

                            </section>
                            <section className="formulario_anuncio_cdu_2">
                                <form action="#" method="POST" className="formAnuncio" >
                                    <div className="anuncio_group" className="selecaodoanuncio_cdu1">


                                        <div className="preco_expiracao_cdu">
                                            <div className="selecaodoanuncio_cdu">
                                                <div className="campos">
                                                    <label for="campo_preco">Preço do equipamento:</label>
                                                    <input name="campo_preco" type="text" alt="Preço..." placeholder={this.state.preco}
                                                        className="barra_preco_expiracao_cdu" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="preco_expiracao_cdu">

                                            <div className="campos">
                                                <label for="campo_expiracao">Data de expiração do anúncio:</label>
                                                <input name="campo_expiracao" type="text" alt="Data de expiração"
                                                    placeholder="Data de expiração" className="barra_preco_expiracao_cdu" />
                                            </div>

                                        </div>

                                        <div className="informar_avaliacao">

                                            <legend>Avaliação do equipamento:</legend>
                                            <div className="tipos_avaliacao">
                                                <div className="avaliacao_estrelas">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                </div>
                                                <div className="avaliacao_estrelas">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                </div>
                                                <div className="avaliacao_estrelas">
                                                    <span className="fa fa-star checked"></span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* fim div tsuka */}

                                    <div className="botoes">
                                        <div className="botao_deletar_cdu2">
                                            <button className="botao_editar_cdu2">
                                                <i className="far fa-trash-alt"></i>
                                                <a href="#">Deletar anúncio</a>
                                            </button>
                                        </div>

                                        <div className="botao_adicionar_cdu3">
                                            <button className="botao_editar_cdu3">
                                                <i className="far fa-edit"></i>
                                                <a href="#">Editar anúncio</a>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </section>
                    </section>
                </main>
                {<Rodape />}
            </div>
        );
    }
}
export default AlterarAnuncio;