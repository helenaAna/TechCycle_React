import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/listainteresse.css';

class Aprovacoes extends Component{
   constructor(props){
       super(props);
       this.state ={
            usuario: {
               nome:'',
               departamento:''
           },
           produto:{
            nomeUsuario: '',
            nomeProduto:''
           }

       }
   }

buscaUsuario(){

}


   
    render(){
        return(
            <div>
                <CabecalhoAdm/>
                <main>
                    
                </main>
                <Rodape/>
            </div>
        )
    }
}
export default Aprovacoes;