import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState(''); // estava faltando
    const navigate = useNavigate();
    const ehEmailValido = email.includes('@'); // era endsWith('@gmail.com'), restritivo demais

    const handleSubmit = async (e) => {
        e.preventDefault() // era e.preventDeDefault() — typo

        if (!ehEmailValido) {
            alert('Por favor, insira um email válido.')
            return
        }

        try {
            const response = await fetch('http://localhost:3001/Owner/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, cpf, email, senha, telefone })
            })

            const data = await response.json()

            if (!response.ok) {
                alert(data.Error)

                if (response.status === 400) {
                    navigate('/cadastro')
                }

                return
            }

            alert(data.message)
            console.log('Logado com sucesso!', data.owner)
            navigate('/Home')

        } catch (error) {
            console.log('Erro ao conectar com a API', error)
            alert('Não foi possível conectar com o servidor...')
        }
    }

    return (
        <div>
            <h2>Login Admin</h2>
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
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        placeholder="Seu CPF"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
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
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        type="text"
                        placeholder="Seu telefone"
                        id="telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
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

                <button type="submit">Entrar</button>
                <button type="button" onClick={() => navigate('/')}>Voltar</button>
                <button type="button" onClick={() => navigate('/LoginAttendant')}>Atendente</button>
            </form>
        </div>
    )
}