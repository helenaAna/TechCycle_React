import React, {Component} from 'react';

import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/alteraranuncio.css';

class AlterarAnuncio extends Component {

        render(){
            return(
            <div>
                { <CabecalhoUser/> }

                <main className="conteudo_cdu">
        <div className="titulo_cdu">
            <h1 className="h1_cdu">Alterar anúncio</h1>
            <hr className="linha_cadastrodeanuncio_cdu"/>
        </div>

        <section id="container_selecao_anuncio_cdu">

            <section className="criar_anuncio_cdu">

                <form class="selecaodoanuncio_cdu1">
                    <input type="text" alt="Selecione o produto" placeholder="Selecione o produto"
                        className="barraanuncio_cdu1"/>
                </form>


                <div className="notebooksanuncio_cdu">
                    <div className="imagem_notebook">
                        <img src={require("../assets/img/Dell-Inspiron-I14-7472-A20G.png")} />
                    </div>
                    <p>Dell Inspiron</p>
                </div>

                <div className="notebooksanuncio_cdu">
                    <div className="imagem_notebook">
                        <img src={require("../assets/img/MQD32 1-1450x1450.png")} />
                    </div>
                    <p>Macbook</p>
                </div>

                <div className="notebooksanuncio_cdu">
                    <div className="imagem_notebook">
                        <img src={require("../assets/img/Apple-MacBook-Pro-715x560.png")} />
                    </div>
                    <p>Macbook pro</p>
                </div>

                <div className="notebooksanuncio_cdu">
                    <div className="imagem_notebook">
                        <img src={require("../assets/img/Dell-Inspiron-I14-7472-A20G.png")} />    
                    </div>
                    <p>Dell Inspiron</p>
                </div>

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

                    <div className="preco_expiracao_cdu">
                        <div className="selecaodoanuncio_cdu">
                            <div className="campos">
                                <label for="campo_preco">Preço do equipamento:</label>
                                <input name="campo_preco" type="text" alt="Preço..." placeholder="Preço do equipamento"
                                    className="barra_preco_expiracao_cdu"/>
                            </div>
                        </div>
                    </div>

                    <div className="preco_expiracao_cdu">
                        <form action="#" method="POST" className="selecaodoanuncio_cdu">
                            <div className="campos">
                                <label for="campo_expiracao">Data de expiração do anúncio:</label>
                                <input name="campo_expiracao" type="text" alt="Data de expiração"
                                    placeholder="Data de expiração" className="barra_preco_expiracao_cdu"/>
                            </div>
                        </form>
                    </div>

                    <div className="informar_avaliacao">
                        <form action="#" className="avaliacao">
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
                        </form>
                    </div>
                </section>

                <div className="botoes">
                <div className="botao_deletar_cdu2">
                    <button className="botao_editar_cdu2">
                        <i className="far fa-trash-alt"></i>
                        <a href="cadastrodeanuncio.html">Deletar anúncio</a>
                    </button>
                </div>

                <div className="botao_adicionar_cdu3">
                    <button className="botao_editar_cdu3">
                        <i className="far fa-edit"></i>
                        <a href="cadastrodeanuncio.html">Editar anúncio</a>
                    </button>
                </div>
            </div>
        </section>
    </section>
</main>
        { <Rodape/> }
        </div>
    );
}
}
export default AlterarAnuncio;