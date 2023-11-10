import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Inicio from '../src/pages/inicio/index';
import Menuzin from '../src/pages/menuzin';
import Cardapio from '../src/pages/cardapio';
import Promocoes from '../src/pages/promocoes';
import Remover from '../src/pages/remover';
import Cadastro from '../src/pages/cadastro';
import CadastroAdm  from './pages/cadastroAdm';
import Introducao from './pages/introducao';
import Home from './pages/home';
import Login from './pages/login';
import LoginCliente from './pages/loginCliente';


import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
         <Route path='/pages' element={ <Inicio />} />
         <Route path='menu' element={ <Menuzin/>} />
         <Route path='cardapio' element={ <Cardapio />} />
         <Route path='promocoes' element={ <Promocoes />} />
         <Route path='remover' element={ <Remover />} />
         <Route path='cadastro' element={ <Cadastro />} />
         <Route path='cadastroAdm' element={ <CadastroAdm />} />
         <Route path='introducao' element={ <Introducao />} />
        <Route path='/' element={ <Home /> } /> 
        <Route path='/login' element={ <Login />} />
        <Route path='/loginCliente' element={ <LoginCliente /> } />

       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


