import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';
import '../assets/css/home.css';
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        listaAnuncios : [],
        listaComFiltro : [],
        idAnuncio : '',
        idProduto : {
          nomeProduto : '',
          descricao : ''
        },
        preco : '',
        dataExpiracao : '',
      }
      this.buscarAnuncio = this.buscarAnuncio.bind(this)
      this.removerFiltro = this.removerFiltro.bind(this)
      this.toggleFiltro = this.toggleFiltro.bind(this)
    }

    toggleFiltro(event){
      if(event.target.checked){
        if(event.target.name !== ''){
          return this.filtroDeAnuncio(event.target.value)
        }
      }
        this.removerFiltro()
    }

    removerFiltro(){
      this.setState({listaComFiltro : this.state.listaAnuncios})
    }

    filtroDeAnuncio(valor){
      var lista = this.state.listaAnuncios

      var listaFiltrada = lista.filter((undefined, index, lista) => {
        if(lista[index].idProdutoNavigation.idMarca == valor){
           return lista[index]
        }
      })

      var listaFiltrada= lista.filter((undefined, index, lista) => {
        if(lista[index].idProdutoNavigation.idCategoria == valor){
           return lista[index]
        }
      })

      this.setState({
        listaComFiltro : listaFiltrada
      })
    }

    buscarAnuncio(){
      fetch('http://localhost:5000/api/anuncio')
      .then(response => response.json())
      .then(data =>{
        this.setState({ listaAnuncios : data, listaComFiltro : data})
      }).catch((erro) => console.log(erro))
    }

    passarAnuncio(event){
      localStorage.setItem('idAnuncio', event.target.anuncio.idAnuncio)
    }

    redirec(){
      this.context.router.push({
        pathname: '/descricao',
        state: {idAnuncio: this.state.idAnuncio}  
      })
    }

    componentDidMount(){
      this.buscarAnuncio()
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
                <form>
                  <div className="categoria">
                      <h5>Marca:</h5>
                      <input type="checkbox" value='1' name='marca' id="dell" onChange={this.toggleFiltro}/>
                      <label htmlfor="dell">Dell 1</label>
                      <input type="checkbox" value='2' name='marca' id="apple" onChange={this.toggleFiltro}/>
                      <label htmlfor="apple">Apple 2</label>
                  </div>

                  {/* <div className="categoria">
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
                  </div> */}
                  
                  <div className="categoria">
                    <h5>Precessador:</h5>
                    <input type="checkbox" value='2' name="processador" id="intel" onChange={this.toggleFiltro}/>
                    <label htmlfor="intel">Intel 2</label>
                    <input type="checkbox" id="amd" value='1' name="processador" onChange={this.toggleFiltro}/>
                    <label htmlfor="amd">AMD 1</label>
                  </div>

                  {/* <div className="categoria categoriaDiferente">
                      <h5>Categoria:</h5>
                      <div>
                          <input type="checkbox" id="computador"/>
                          <label htmlfor="computador">Computador</label>
                      </div>
                      <div>
                          <input type="checkbox" id="notebook"/>
                          <label htmlfor="notebook">Notebook</label>
                      </div>
                  </div> */}
                </form>
              </div>
          </div>
          <section className="home_linhaCard">
            {
              this.state.listaComFiltro ?
              this.state.listaComFiltro.map(function(anuncio){
                return(
                    <div className="home_card" key={anuncio.idAnuncio} value={anuncio.idAnuncio}>
                      <div className="home_img">
                          <img src={"http://localhost:5000/Resources/Anuncio/" + anuncio.foto} alt="Macbook"/>
                          {console.log(anuncio.foto)}
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
                          <button className="home_btn"><Link to={{
                                                                pathname: '/descricao',
                                                                state: {idAnuncio: anuncio.idAnuncio  }
                                                                }}>Detalhes</Link></button>
                          <div className="home_coracao"><i className="far fa-heart"></i></div>
                      </div>
                  </div>          
                )
              }, this) : null
            }
          </section>
      </main>
        <Rodape/>
    </div>
  );
}

}
export default Home;