import React from 'react'
import './LoginSignUp.css'
import { Link as RouterLink } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <div>
            <div className='loginSignUp'>
                <div className="loginSignUp-container">
                    <h1>Login</h1>
                    <div className="loginSignUp-fields">
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                    </div>
                    <button type='submit' className='btn dark-btn'>Acessar</button>
                    <p className='loginSignUp-login'>Não tem cadastro? <u><strong><RouterLink to='/signup'>
                        <span>Cadastre-se aqui.</span></RouterLink></strong></u> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
