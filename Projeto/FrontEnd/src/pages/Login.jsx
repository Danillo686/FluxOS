import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const ehEmailValido = email.endsWith('@gmail.com');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
    
        data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            
            switch (data.user.role) {
                case 'owner':
                    navigate('/owner');
                    break;
                case 'attendant':
                    navigate('/attendant');
                    break;
                case 'technician':
                    navigate('/technician');
                    break;
                default:
                    navigate('/login');
                    break;
            }
        } else {
            alert(data.error || 'Erro ao realizar o login.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );

    

}