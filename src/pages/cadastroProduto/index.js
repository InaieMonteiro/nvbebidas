import './index.scss';



export default function () {

    return (
        <div className='mak'>
           
            <div className='tudao'>
            
            <div className='imagem'>
                <div>
                <input type='file' />
                </div>
            </div>
                <div className='produto'>
                    
                    <h1  className='um'>Seu Produto É:</h1>
                    <div className='porra1'>
                        <div className='tipo'>
                            <input type='checkbox' />
                            <h2>Bebida</h2>
                            <input type='checkbox' />
                            <h2>Vegano</h2>
                            <input type='checkbox' />
                            <h2>Tipo-Frango</h2>
                            <input type='checkbox' />
                            <h2>Tipo-Carne</h2>
                            <div className='Acor'></div>
                        </div>

                    </div>

               
                <div className='sobre'>
                    <div className='nome'>
                        <h1>Adicionar Nome Do Produto</h1>
                        <input type='text' placeholder= '  Escreva Aqui...' />
                    </div>
                    <div className='ingre'>
                        <h1>Informe Os Ingredientes</h1>
                        <input type='text'   placeholder='Informe...'/>
                    </div>
                    <div className='valor'>
                        <h1>Valor Do Seu Produto</h1>
                        <input type='valor' placeholder='R$' />
                    </div>
                           
                </div>
                </div>
            </div>
        </div>




    )





}









