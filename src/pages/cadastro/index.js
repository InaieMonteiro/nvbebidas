import face from '../../assets/images/face.png'
import linkedin from '../../assets/images/linkedin.png'
import google from '../../../src/assets/images/google.png'
import mobile from '../../assets/images/celular_png.png'
import './index.scss'

function Cadastro() {
    return (

        <div className='pag1'>

         <main>
        <h1>Criar Conta</h1>
        <div className="social-media">
            <a href="#">
                <img src={face}></img>
            </a>
            <a href="#">
            <img src={google}></img>
            </a>
            <a href="#">
            <img src={linkedin}></img>
            </a>
        </div>

        <div className="alternative">
            <span>OU</span>
        </div>

        <form action="">
            <label for="name">
                <span>Nome</span>
                <input type="text" id="name" name="name"/>
            </label>

            <label for="email">
                <span>E-mail</span>
                <input type="email" id="email" name="email"/>
            </label>

            <label for="password">
                <span>Senha</span>
                <input type="password" id="password" name="password"/>
            </label>

            <input type="submit" value="Prosseguir" id="button"/>

            </form>
    </main>
    <section class="images">
        <img src={mobile} alt="Mobile"></img>

    </section>

    </div>



    );
}

export default Cadastro;