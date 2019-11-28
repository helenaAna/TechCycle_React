import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import{Route,BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {usuarioAutenticado, parseJwt} from './services/auth'

import Home from './pages/Home';
import Login from './pages/Login';
import SobreNos from './pages/SobreNos';
import PainelAdm from './pages/PainelAdm'

const PermissaoAdm = ({component : Component}) => (
    <Route
    render = {props =>
    usuarioAutenticado() && parseJwt().Role === 'Administrador' ? (
        <Component {...props}/>
    ) : (
        <Redirect to = {{pathname: 'login'}}/>
    )}/>
)



const Rotas = (
    <Router>
        <div>
        <Switch>
            <Route exact path="/home" component={Home}/> 
            <Route path="/login" component={Login}/>  
            <Route path="/sobrenos" component={SobreNos}/>
            <PermissaoAdm path="/paineladm" component={PainelAdm}/>
        </Switch>
        </div>
    </Router>
);

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
