import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/aprovacoes.css';

class Aprovacoes extends Component{
    render(){
        return(
            <div>
                <CabecalhoAdm/>
               
                <Rodape/>
            </div>
        )
    }
}
export default Aprovacoes;