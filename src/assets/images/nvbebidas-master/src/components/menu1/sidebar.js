import  react from 'react';
import logo from '../../assets/images/logo.png';
import casa from '../../assets/images/casa.png';

import './sidebar.scss';


const sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <img src={logo}/>
                <li> Inicio </li>
                <img src={casa}/>
                <li> Posts </li>
                <img src={logo}/>
                <li> Midia </li>
                <img src={logo}/>
                <li> Páginas </li>
                <img src={logo}/>
                <li> Pedidos </li>
                <img src={logo}/>
                <li> Aparência </li>
                <img src={logo}/>
                <li> Usuários </li>
                <img src={logo}/>
                <li> Ferramentas </li>
                <img src={logo}/>
                <li> Configurações </li>
            </ul>
        </div>
    )
    };