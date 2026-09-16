import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const ehEmailValido = email.endsWith('@gmail.com');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ehEmailValido) {
            alert('Por favor, insira um email válido do Gmail.');
            return;
        }

        console.log('Login', { email, senha });
        alert('Login realizado com sucesso!');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="Seu email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        placeholder="Sua senha"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
    
                <button type="button" onClick={() => navigate('/Home')}>Entrar</button>
                <button type="button" onClick={() => navigate('/LoginOwner')}>Administrador</button>
                
            </form>
        </div>
    )

}