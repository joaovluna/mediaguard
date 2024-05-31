import React from 'react'
import './Hero.css'
import wpp_icon from '../../assets/whatsapp-svgrepo-com.svg'
const Hero = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá, tenho interesse em saber mais sobre o MediaGuard!");
    const whatsappUrl = `https://wa.me/+15550076438/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  }
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Garanta sua segurança com nosso classificador de áudios, não seja enganado por <em>deepfakes</em>.</h1>
        <p>Com acurácia de mais de 80%, indicamos a possibilidade de um áudio encaminhado pelo WhatsApp ser fake.</p>
       <button className='btn' onClick={openWhatsApp}>
        <strong>Saiba mais</strong><img src={wpp_icon} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
