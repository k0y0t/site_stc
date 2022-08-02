import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <a href="/sobre">Vá para Sobre!</a>
            <Contador />
            <div>test</div>
        </div>        
    )
}

function Contador() {
    const [contador,setContador] = useState(1);
    
    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home
