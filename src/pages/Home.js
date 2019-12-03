import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';
import '../assets/css/home.css';
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        // lista dos nossos anuncios
        listaAnuncios : [],

        idAnuncio : '',

        // Todos os parametros que serão exibidos no card
        idProduto : {
          nomeProduto : '',
          descricao : ''
        },
        preco : '',
        dataExpiracao : '',
      }
      this.buscarAnuncio = this.buscarAnuncio.bind(this);
    }

    buscarAnuncio(){
      fetch('http://localhost:5000/api/anuncio')
      .then(response => response.json())
      .then(data =>{
        this.setState({ listaAnuncios : data })
        console.log("sdgd")
      }).catch((erro) => console.log(erro))
    }

    passarAnuncio(event){
      localStorage.setItem('idAnuncio', event.target.anuncio.idAnuncio)
    }

    redirec(){
      alert('aiusuhduahss')
      this.context.router.push({
        pathname: '/descricao',
        state: {idAnuncio: this.state.idAnuncio}  
      })

    }


    componentDidMount(){
      this.buscarAnuncio();
    }

  render(){
    return (
      <div className="App">
        <CabecalhoAdm/>
          <main className="home_main">
          <h1>Vitrine de Anúncios</h1>

          <hr/>


          <div className="home_secao-filtro">
              <h4>Filtrar por:</h4>

              <div className="home_filtros">
                  <div className="categoria">
                      <h5>Marca:</h5>
                      <input type="checkbox" id="dell"/>
                      <label htmlfor="dell">Dell</label>
                      <input type="checkbox" id="apple"/>
                      <label htmlfor="apple">Apple</label>
                  </div>

                  <div className="categoria">
                      <h5>Memória:</h5>
                      <input type="checkbox" id="32gb"/>
                      <label htmlfor="16gb">32GB</label>
                      <input type="checkbox" id="16gb"/>
                      <label htmlfor="16gb">16GB</label>
                      <input type="checkbox" id="8gb"/>
                      <label htmlfor="8gb">8GB</label>
                      <input type="checkbox" id="6gb"/>
                      <label htmlfor="6gb">6GB</label>
                      <input type="checkbox" id="4gb"/>
                      <label htmlfor="4gb">4GB</label>
                  </div>
                  
                  <div className="categoria">
                      <h5>Precessador:</h5>
                      <input type="checkbox" id="intel"/>
                      <label htmlfor="intel">Intel</label>
                      <input type="checkbox" id="amd"/>
                      <label htmlfor="amd">AMD</label>
                      </div>

                  <div className="categoria categoriaDiferente">
                      <h5>Categoria:</h5>
                      <div>
                          <input type="checkbox" id="computador"/>
                          <label htmlfor="computador">Computador</label>
                      </div>
                      <div>
                          <input type="checkbox" id="notebook"/>
                          <label htmlfor="notebook">Notebook</label>
                      </div>
                  </div>
              </div>
          </div>
          <section className="home_linhaCard">
            {
              this.state.listaAnuncios.map(function(anuncio){
                return(
                    <div className="home_card" key={anuncio.idAnuncio} value={anuncio.idAnuncio}>
                      <div className="home_img">
                          <img src={anuncio.foto} alt="Macbook"/>
                      </div>
                      <div className="home_linha">
                          <div>
                              <h3 className="home_nomeProduto">{anuncio.idProdutoNavigation.nomeProduto}</h3>
                          </div>
                          <div>
                              <h3 className="home_preco">R${anuncio.preco}</h3>
                          </div>
                      </div>
                      <div className="home_texto">
                          <p>{anuncio.idProdutoNavigation.descricao}</p>
                              <p className="dataExpiracao_home">Data de expiração: {anuncio.dataExpiracao}</p>
                      </div>
                      <div className="home_linha">
                          {/* <div className="home_btn"><a href="pagina_descricao.html">Detalhes</a></div> */}
                          <button className="home_btn"><Link to={{
                                                                pathname: '/descricao',
                                                                state: {idAnuncio: anuncio.idAnuncio  }
                                                                }}>Detalhes</Link></button>
                          <div className="home_coracao"><i className="far fa-heart"></i></div>
                          {console.log({ idAnuncio : anuncio.idAnuncio})}
                      </div>
                  </div>          
                )
              }, this)
            }
          </section>
      </main>
        <Rodape/>
    </div>
  );
}

}
export default Home;