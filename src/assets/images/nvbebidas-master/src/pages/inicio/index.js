import logo from '../../assets/images/logo.png';
import casa from '../../assets/images/casa.png';
import adm from '../../assets/images/adm.png';

import './index.scss';

 export default function inicio() {
  return (
    <div className='Inicio'>

        <div className='cabecalho'>
            <img className='n1' src={logo} />
            <img className='n2' src={casa} />
            <a  href='http://localhost:3000/menu' className='site'>Meu Site</a>
            <a className='yellow'>Olá admin</a>
            <img className='n3'  src={adm} /> 

            

        </div>

        <div className='texto'>
              <img id='oie' src={logo}></img>

               <h1>conheça nossa correria</h1>
              <h2>Nós da THE RUNNERS BURGUERS,  <br></br>Nascemos com uma proposta diferente. <br></br>
                  Nascemos com o proposito de representar <br></br> o corre de cada um  de nós no dia a dia,<br></br> com lanches com uma proposta artesanal.<br></br> E trazendo o nosso diferencial, que 
                  <br></br> são os  nossos lanches veganos,<br></br> agregando valor a todos os <br></br> gostos.</h2>
         </div>
         
    </div>
  );
}

