import React, { Component } from 'react';
import Axios from 'axios';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';
import '../assets/css/descricao.css';

class Descricao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaAnuncios: [],

            idAnuncio : '',

            idProduto: {
                
            }
        }
    }

    componentDidMount(){
        this.setState({
            idAnuncio : this.props.location.state.idAnuncio
        })
    }
    

    render() { 
        return (
            <div className="App">
                <CabecalhoAdm />
                <main>
                    <section className="anuncio">
                        <section className="titulo_descricao">
                            <h1>Descrição do produto</h1>
                            <hr />
                        </section>

                        <section className="produto_avaliacao">
                            <section className="descricao">
                                {/* AQUI */}
                                <section className="anuncio_descritivo">
                                    {/* AQUI */}

                                    {/* <div className="fotos_lateral">
                                    <div className="fotos_secundarias">
                                        <img src={require('../assets/img/macp1.png')} alt="foto" />
                                    </div>
                                    <div className="fotos_secundarias central">
                                        <img src={require('../assets/img/macp2.png')} alt="foto" />
                                    </div>
                                    <div className="fotos_secundarias">
                                        <img src={require('../assets/img/macp3.png')} alt="foto" />
                                    </div>
                                </div> */}


                                    <section className="foto_principal">
                                        <img class="foto_exibicao" src={require('../assets/img/macp1.png')} alt="foto" />
                                        <hr />
                                        <section className="conteudo_descricao">
                                            <h3>Macbook pro</h3>
                                            <p>MacBook Pro TouchBar 15 256gb 2018 - AAPL;
                                                Tela de 15,4 polegadas (na diagonal) retroiluminada por LED com tecnologia IPS;
                                            SSD de 256 GB;</p>
                                            <h4>R$ 2 100,00</h4>
                                        </section>
                                    </section>
                                </section>

                                <section className="anuncio_avaliacao"></section>
                                <section className="secao_avaliacao">
                                    {/* AQUI */}

                                    <div className="box_classificacao">
                                        {/* AQUI */}
                                        <h3>avaliação <i className="far fa-star"></i></h3>

                                        <section className="avaliacoes">
                                            <section className="quadro_avaliacao">
                                                <div className="box_avaliacao">
                                                    <p>bom</p>
                                                    <p><span className="fa fa-star checked"></span></p>
                                                </div>
                                                <p className="leve_descricao">Aparelho com leves sinais uso, e com um bom desempenho;</p>
                                            </section>

                                            <section className="quadro_avaliacao">
                                                <div className="box_avaliacao">
                                                    <p>muito bom</p>
                                                    <p><span className="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                                                    </p>
                                                </div>
                                                <p className="leve_descricao">Aparelho com alguns sinais uso, e com um bom desempenho;</p>
                                            </section>

                                            <section className="quadro_avaliacao">
                                                <div className="box_avaliacao">
                                                    <p>ótimo</p>
                                                    <p><span className="fa fa-star checked"></span><span
                                                        class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p>
                                                </div>
                                                <p className="leve_descricao">Aparelho com leves sinais uso, e com ótimo desempenho;</p>
                                            </section>
                                        </section>
                                    </div>
                                    <div className="btn_descricao">
                                        <a href="lista_interesses.html"><button><i className="fas fa-plus"></i> Adicionar a
                            interessados</button></a>
                                    </div>
                                </section>
                            </section>

                        </section>

                        <section className="titulo_comentarios">
                            <hr />
                            <h2>Comentários</h2>
                        </section>

                        <section className="comentarios">
                            <section className="comentarios_usuarios">
                                <div className="box_comentarios">
                                    <div className="dados_usuario">
                                        <div className="foto_usuario usuario1">
                                            <img src={require('../assets/img/chris.jpg')} alt="#"/>
                                        </div>
                                        <p>Chris Evans</p>
                                    </div>
                                    <p>Comprei uma unidade deste computador e amei, muito útil este anúncio!!!</p>
                                </div>
                                
                            </section>
                            <section className="comentar_anuncio">
                                <div className="comentar">
                                    <form action="#" class="comentar_anuncio">
                                        <i className="far fa-file-alt"></i>
                                        {/*
                            <!-- <input type="textarea" name="comentario" placeholder="adicionar comentário" rows="10"> -->
                            */}
                                        <textarea name="comentario" placeholder="adicionar comentario" id="comentario" cols="30"
                                            rows="10"></textarea>
                                    </form>
                                </div>
                                <button className="adicionar_comentario">
                                    <i className="far fa-comment"></i> Adicionar comentário...

                                </button>
                            </section>
                        </section>

                        {console.log("auhujhbd    "+ this.state.idAnuncio)}

                    </section>
                    <Rodape />
                </main>
            </div>
        )
    }
}

export default Descricao;