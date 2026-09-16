import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home</h2>
            <p>Bem-vindo à página inicial!</p>
            <button onClick={() => navigate('/')}>Voltar para Login</button>
        </div>
    );

}