import React from 'react'
import './LoginSignUp.css'
import { Link as RouterLink } from 'react-router-dom';
const LoginSignUp = () => {
  return (
    <div>
        <div className='loginSignUp'>
        <div className="loginSignUp-container">
            <h1>Cadastro</h1>
            <div className="loginSignUp-fields">
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="E-mail"/>
                <input type="tel" placeholder="Telefone. (XX)XXXXX-XXXX"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirmar Senha"/>
            </div>
            <button type='submit' className='btn dark-btn'>Criar Conta</button>
            <p className='loginSignUp-login'>Já tem cadastro? <u><strong><RouterLink to='/login'>
                        <span>Login aqui.</span></RouterLink></strong></u> </p>
            <div className="loginSignUp-agree">
                <input type="checkbox" name='' id='' />
                <p>Ao continuar, concordo com os <strong>Termos de Uso e Política de Privacidade</strong></p>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default LoginSignUp
