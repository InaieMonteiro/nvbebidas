
import './index.scss';
import burguer from '../../assets/images/cheddarcardapio.png';
import fritas from '../../assets/images/batcardapio.png';
import bebidas from '../../assets/images/bebcardapio.png';


export default function introducao() {
    return (
        <div className='caixa1'>
            <div className='caixa2'>
                <h1>Cardápio</h1>
            </div>
            <h1 className='t1'>Conheça Nossos Lanches</h1>

            <div className='c1'>

                <div className='h2'>
                    <img src={burguer} />
                    <h2>Lanches</h2>
                </div>


                <div className='para'>
                    <div className='corzinhadoita'></div>
                    <p> Uma explosão de sabores em cada mordida para<br></br>
                        acompanhar a sua correria. Sabor que te faz<br>
                        </br> acelerar!</p>
                    <div className='comeco'>
                        <button href='http://localhost:3000/cardapio'> Ver opções </button>
                    </div>

                </div>
                <div id='teste'></div>
            </div>

            <h1 className='t2'>Conheça Nossas Batatas</h1>
            <div className='c2'>

                <div className='h3'>
                    <img src={fritas} />
                    <h2>Fritas</h2>
                </div>

                <div className='gra'>
                    <div className='corzinhadoita1'></div>
                    <p> Uma explosão de sabor e crocância para fazer o seu<br></br>
                        paladar correr de alegria. Deliciosamente crocantes e <br>
                        </br> irresistíveis!"</p>
                </div>
                <div className='mei0o'>
                    <button onClick='http://localhost:3000/cardapio' >Ver opções</button>
                </div>
                <div id='teste1'></div>
            </div>

            <h1 className='t3'>Se hidrate</h1>
            <div className='c3'>

                <div className='h4'>
                    <img src={bebidas} />
                    <h2>Bebidas</h2>
                </div>

                <div className='fo'>
                    <div className='corzinhadoita2'></div>
                    <p>  A  corrida mais saborosa para saciar a sua sede.<br></br>
                        Acompanhe seu sprint de sabores com nossas opções<br>
                        </br> refrescantes e hidrate seu paladar.</p>
                </div>
                <div className='final'>
                    <button href='http://localhost:3000/cardapio'>Ver opções</button>
                </div>
                <div id='teste2'></div>
            </div>
        </div>
    )
}