import './index.scss';
import celular from '../cadastro/img/celular.png'
import face from '../cadastro/img/facebook.png'
import google from '../cadastro/img/google.png'




function Cadastro() {
    return (

        <div className='mae111'>

         <main>
        <h1>Criar Conta</h1>
        <div className="social-media">
            <a href="#">
             <img src={google} />
            </a>
            <a href="">
            <img src={face} />
            </a>
            <a href="#">
          
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

            <div className='login'>
                <a href='http://localhost:3000/loginCliente'>Já tem conta? Faça login</a>
            </div>


            <input type="submit" value="Prosseguir" id="button"/>

            </form>
          

    </main>
    <section class="images">
        <img src={celular} />

    </section>

    </div>



    );
}

export default Cadastro;