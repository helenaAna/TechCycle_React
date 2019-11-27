import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';


class Home extends Component
 {
   render(){

     return (
       <div className="App">
      <CabecalhoAdm/>
      
      <Rodape/>
    </div>
  );
}

}
export default Home;
