import './index.scss';

import logo from '../../assets/images/logo.png';
import pessoa from '../../assets/images/pessoa.png';
import carrinho from '../../assets/images/carrinho.png';
import burguezada from '../../assets/images/burguezada.svg';

export default function () {


    return (

        <div className='corzinha'>

            <div className='pag-inicial'>

                <div>
                    <img src={logo} />
                    <div className='corz'></div>
                    <div className='corz'></div>
                    <div className='corz'></div>


                </div>

                <a ><strong><span>SOBRE NÓS</span></strong></a>
                <a ><strong><span>HOME</span></strong></a>
                <a href='http://localhost:3000/cardapio'><strong><span>CARDÁPIO</span></strong></a>
                <a><strong><span>COMBOS</span></strong></a>
                <a href='http://localhost:3000/promocoes'><strong><span>PROMOÇÕES DA SEMANA</span></strong></a>

                <div className='botao'>
                    <div className='buttons'>
                        <button onclick= " = 'http://localhost:3000/cardapio'" >
                        <button onclick= " = 'http://localhost:3000/promocoes'" />
                            <img src ={pessoa} />
                        </button>
                    </div>
           
                    <div className='carrinho'>
                        <button  >
                            <img src={carrinho} />
                        </button>
                    </div>

                </div>

            </div>
            <div className='ilustra'>

                <h1><strong>CHEGOU SUA VEZ DE CONHECER A</strong><br /><br /><span><strong>MAIOR E MELHOR<br />HAMBURGUERIA<br />DA CIDADE</strong></span></h1>
                <img src={burguezada} alt="Burguezada" />

            </div>
            <div className='but'>
                <a href='http://localhost:3000/consulta'><strong>CADASTRE-SE</strong> </a>
                <a><strong>PEDIDOS VILA OLIMPIA</strong></a>
                <a><strong>PEDIDOS NAÇOES UNIDAS</strong></a>
            </div>
        </div>




    )

}
