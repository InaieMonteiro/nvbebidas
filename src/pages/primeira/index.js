import './index.scss';
 import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import pessoa from '../../assets/images/pessoa.png';
import carrinho from '../../assets/images/carrinho.png';
import burguezada from '../../assets/images/burguezada.svg';

export default function () {

    const navigate = useNavigate();


    function adm(){
        navigate('/cadastroAdm')
    }


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

            
           
                <div className='carrinho'>
                        <button onClick={adm}>
                            <img src={pessoa} style={{width: "29px", height:"25px"}}/>
                        </button>
                        <button  >
                            <img src={carrinho} />
                        </button>
                </div>

            </div>
            <div className='ilustra'>

                <h1><strong>CHEGOU SUA VEZ DE CONHECER A</strong><br /><br /><span><strong>MAIOR E MELHOR<br />HAMBURGUERIA<br />DA CIDADE</strong></span></h1>
                <img src={burguezada} alt="Burguezada" />

            </div>
            <div className='but'>
                <a href='http://localhost:3000/cadastro'><strong>CADASTRE-SE</strong> </a>
                <a><strong>PEDIDOS VILA OLIMPIA</strong></a>
                <a><strong>PEDIDOS NAÇOES UNIDAS</strong></a>
            </div>


  <div className='p2'>
        <div className='texto'>

        <img id='oie' src={logo}></img>

<h1>conheca nossa correria</h1>
<h2>Nós da THE RUNNERS BURGUERS, Nascemos <br></br> com uma proposta diferente. <br></br>
nascemos com o proposito de representar o <br></br> corre de cada um de nós no dia a dia, com <br></br> lanches com uma proposta artesanal. e <br></br> trazendo o nosso diferencial, que são os <br></br> nossos lanches veganos, agregando valor a <br></br> todos os gostos.</h2>

        </div>
     </div>



        </div>




    )

}
