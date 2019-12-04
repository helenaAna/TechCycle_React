import React, {Component} from 'react';

import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/cadastroanuncio.css';

class CadastroAnuncio extends Component {

    render(){
        return(
        <div>
            <CabecalhoUser/>
            <main className="conteudo_cdu">
    
        <div className="titulo_cdu">
            <h1 className="h1_cdu">Cadastro de anúncio</h1>
            <hr className="linha_cadastrodeanuncio_cdu"/>
        </div>
        <section id="container_selecao_anuncio_cdu">

            <section className="criar_anuncio_cdu">

                <form action="#" method="POST" className="selecaodoanuncio_cdu1">
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
                        <p><span>Descrição do produto:</span></p>
                        <h2>Macbook pro</h2>
                        <p>MacBook Pro TouchBar 15 256gb 2018 - AAPL.</p>
                        <p> Tela de 15,4 polegadas (na diagonal) retroiluminada
                            por LED com tecnologia IPS.</p>
                        <p>SSD de 256 GB.</p>
                    </div>

                </section>
                <section className="formulario_anuncio_cdu">

                    <div className="preco_expiracao_cdu">
                        <form action="#" method="POST" className="selecaodoanuncio_cdu">
                            <div className="campos">
                                <label for="campo_preco">Preço do equipamento:</label>
                                <input name="campo_preco" type="text" alt="Preço..." placeholder="Preço..."
                                    className="barra_preco_expiracao_cdu"/>
                            </div>
                        </form>
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
                <div className="botao_adicionar_cdu">

                    <button className="botao_editar_cdu">
                        <a href="cadastrodeanuncioeditar.html"><i className="fas fa-pen"></i>Editar</a>
                    </button>

                    <button className="botao_add_cdu">
                        <a href="interesses_aguardo.html"><i className="fas fa-plus"></i> Adicionar</a>
                    </button>
                </div>
            </section>

        </section>

    </main>
            <Rodape/>
            </div>
        );
    }
}
export default CadastroAnuncio;