import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/cadastroanuncio.css';

class CadastroAnuncio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaproduto: [],
            nomeProduto: '',
            descricao: '',
            produtoSelecionado: {},
            pictures: [],

            postAnuncio: {
                listaAnuncio: [],
                cadastrarPreco: '',
                dataExpiracao: '',
                classificacao: ''
            },

            fileInput: React.createRef()

        }
        this.onDrop = this.onDrop.bind(this)

    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    cadastraAnuncio = (e) => {
        e.preventDefault();

        let anuncio = new FormData();

        anuncio.set("cadastrarPreco", this.state.cadastraAnuncio.cadastrarPreco);
        anuncio.set("dataExpiracao", this.state.cadastraAnuncio.dataExpiracao);
        anuncio.set()

        fetch('http://localhost:5000/api/anuncio', {
            method: "POST",
            body: anuncio,
        })
            .then(response => response.json())
            .then(response => {
                console.log(response.status);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))
    }

    buscarProdutos() {
        fetch('http://localhost:5000/api/produto')
            .then(resposta => resposta.json())
            .then(data => {
                console.log(data);
                this.setState({ listaproduto: data });
                console.log(this.state.listaproduto);
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
        this.buscarProdutos();
    }

    render() {
        return (
            <div>
                <CabecalhoUser />
                <main className="conteudo_cdu">

                    <div className="titulo_cdu">
                        <h1 className="h1_cdu">Cadastro de anúncio</h1>
                        <hr className="linha_cadastrodeanuncio_cdu" />
                    </div>
                    <section id="container_selecao_anuncio_cdu">

                        <section className="criar_anuncio_cdu">



                            <form action="#" method="POST" className="selecaodoanuncio_cdu1">


                                <section className="sessao_cdatotal">
                                    <input type="text" alt="Selecione o produto" placeholder="Selecione o produto"
                                        className="barraanuncio_cdu1" />
                                    {
                                        this.state.listaproduto.map(produto => {
                                            return (
                                                <div className="notebooksanuncio_cdu" key={produto.idProduto}
                                                    onClick={e => {
                                                        // this.cadastraAnuncio(produto.idProduto)
                                                        console.log(produto)
                                                        this.setState({ produtoSelecionado: produto })
                                                    }}>
                                                    <div className="imagem_notebook">
                                                        <img src={require("../assets/img/Dell-Inspiron-I14-7472-A20G.png")} />
                                                    </div>
                                                    <p>{produto.nomeProduto}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </section>
                                {/* </form> */}


                                {/* </section> */}

                                <section className="descricao_do_produto_cdu">

                                    <section className="informacoes_do_produto_cdu_2">

                                        <div className="amostra_do_produto_cdu">

                                            <ImageUploader
                                                withPreview={true}
                                                withIcon={true}
                                                buttonText='Adicionar imagem'
                                                onChange={this.onDrop}
                                                imgExtension={['.jpg', '.png']}
                                                maxFileSize={5242880}
                                            />

                                        </div>

                                        <div className="amostra_descricao_cdu" >
                                            <p><span>Descrição do produto:</span></p>
                                            <h2>{this.state.produtoSelecionado.nomeProduto}</h2>
                                            <p>Número do modelo: {this.state.produtoSelecionado.modelo}</p>
                                            <p> {this.state.produtoSelecionado.descricao}</p>
                                            <p>Memória: {this.state.produtoSelecionado.memoria}</p>
                                        </div>

                                    </section>
                                    <section className="formulario_anuncio_cdu">

                                        <div className="preco_expiracao_cdu">
                                            {/* <form action="#" method="POST" className="selecaodoanuncio_cdu"> */}
                                            <div className="campos">
                                                <label for="campo_preco">Preço do equipamento:</label>
                                                <input onChange={this.atualizaState}
                                                    name="campo_preco"
                                                    type="text"
                                                    alt="Preço..."
                                                    placeholder="Preço do equipamento"
                                                    className="barra_preco_expiracao_cdu" />
                                            </div>
                                            {/* </form> */}
                                        </div>

                                        <div className="preco_expiracao_cdu">
                                            <form action="#" method="POST" className="selecaodoanuncio_cdu">
                                                <div className="campos">
                                                    <label for="campo_expiracao">Data de expiração do anúncio:</label>
                                                    <input onChange={this.atualizaState} name="campo_expiracao" type="data" alt="Data de expiração"
                                                        placeholder="Data de expiração" className="barra_preco_expiracao_cdu" />
                                                </div>
                                            </form>
                                        </div>

                                        <div className="informar_avaliacao">
                                            {/* <form action="#" className="avaliacao"> */}
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
                                            {/* </form> */}
                                        </div>
                                    </section>
                                    <div className="botao_adicionar_cdu">

                                        <button className="botao_editar_cdu">
                                            <a href="./home"><i className="fas fa-pen"></i>Editar</a>
                                        </button>

                                        <button className="botao_add_cdu">
                                            <a href="./home"><i className="fas fa-plus"></i> Adicionar</a>
                                        </button>
                                    </div>
                                </section>
                            </form>
                        </section>
                    </section>

                </main>
                <Rodape />
            </div>
        );
    }
}
export default CadastroAnuncio;