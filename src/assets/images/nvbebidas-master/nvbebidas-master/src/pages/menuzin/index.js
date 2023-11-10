 import './index.scss'
import midia from '../../assets/images/midia.png';
import paginas from '../../assets/images/paginas.png';
import pedidos from '../../assets/images/pedidos.png';
import ferramenta from '../../assets/images/ferramentas.png';
import usuarios from '../../assets/images/usuarios.png';
import posts from '../../assets/images/posts.png';
import aparencias from '../../assets/images/aparencia.png';
import config from '../../assets/images/config.png';


export default function () {

    return(
        <div className='maezinha'>
               <div className='pages'>
                
                <h1>Inicio</h1>

                <div className='f1'>
                <img src={posts} />
                <p>Posts</p>
                </div>

                 <div className='f2'>
                <img src={midia} />
                <p>Midia</p>
                </div>

                <div className='f3'>
                <img src={paginas} />
                <p>Paginas</p>
                </div>

                <div className='f4'>
                <img src={pedidos} />
                <p>Pedidos</p>
                 </div>

                 <div className='f5'>
                <img src={aparencias} />
                <p>Aparência</p>
                </div>

                <div className='f6'>
                <img src={usuarios} />
                <p>usuarios</p>
                </div>

                <div className='f7'>
                <img src={ferramenta} />
                <p>Ferramentas</p>
                </div>

                <div className='f8'>
                <img src={config} />
                <p>Configurações</p>
                </div>
                
                </div> 















        </div>





    )










}










