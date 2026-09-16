import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginAttendant() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [carregando, setCarregando] = useState(false)
  const navigate = useNavigate()

  const ehEmailValido = email.endsWith('@gmail.com')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 1. Validação local do e-mail (adicionado o return para interromper a execução)
    if (!ehEmailValido) {
      alert('Por favor, insira um email válido do Gmail.')
      return
    }

    setCarregando(true)

    try {
      // 2. Chamada HTTP GET para o seu backend
      const response = await fetch('http://localhost:3001/Attendant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      })

      const data = await response.json()

      // 3. Trata erros retornados pela API (ex: 400 ou 500)
      if (!response.ok) {
        throw new Error(data.Error || 'Erro ao realizar o cadastro.')
      }

      alert('Cadastro/Login realizado com sucesso!')
      

      setNome('')
      setEmail('')
      setSenha('')


    } catch (error) {
      console.error('Erro na requisição:', error)
      alert(error.message)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div>
      <h2>Login Atendente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            placeholder="Seu nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
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
            required
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
            required
          />
        </div>

        <button type="submit" disabled={carregando}>
          {carregando ? 'Enviando...' : 'Login'}
        </button>
        <button type="button" onClick={() => navigate('/')}>Voltar</button>
      </form>
    </div>
  )
}