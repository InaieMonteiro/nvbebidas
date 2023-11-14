import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Inicio from '../src/pages/inicio/index';
import Menuzin from '../src/pages/menuzin';
import Cardapio from '../src/pages/cardapio';
import Remover from '../src/pages/remover';
import Cadastro from '../src/pages/cadastro';
import CadastroAdm  from './pages/cadastroAdm';
import Introducao from './pages/introducao';
import Home from './pages/home';
import Login from './pages/login';
import LoginCliente from './pages/loginCliente';
import Contato from './pages/contato';
import Historico from './pages/historico';
import Promounico from './pages/promounico';
import Promo from './pages/promo';
import Batata from './pages/batata';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
         <Route path='/pages' element={ <Inicio />} />
         <Route path='menu' element={ <Menuzin/>} />
         <Route path='cardapio' element={ <Cardapio />} />
         <Route path='remover' element={ <Remover />} />
         <Route path='cadastro' element={ <Cadastro />} />
         <Route path='cadastroAdm' element={ <CadastroAdm />} />
         <Route path='introducao' element={ <Introducao />} />
         <Route path='/' element={ <Home /> } /> 
         <Route path='/login' element={ <Login />} />
         <Route path='/loginCliente' element={ <LoginCliente /> } />
         <Route path='/contato' element={ <Contato /> } />
         <Route path='/historico' element={ <Historico /> } />
         <Route path='/promounico' element={ <Promounico /> } />
         <Route path='/promo' element={ <Promo /> } />
         <Route path='/batata' element={ <Batata /> } />
         
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


