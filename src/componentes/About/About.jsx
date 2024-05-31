import React from 'react'
import './About.css'
import mediaguard from '../../assets/mediaguard.png'
import about_mediaguard from '../../assets/about_mediaguard.png'
const About = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá, quero conhecer o MediaGuard!");
    const whatsappUrl = `https://wa.me/+15550076438/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  }
  return (
    <div>
      <div className="about">
        <div className="about-left">
            <img src={about_mediaguard} alt="" className="about-img"/>
        </div>
        <div className="about-right">
            <h3>SOBRE MEDIAGUARD</h3>
            <h2>Classificador de áudios, seu segurança contra deepfakes.</h2>
            <p>
                Com o aumento da inteligência artificial, MediaGuard vem como solução para detectar áudios que foram gerados
                por <em>IA</em>, ao enviar um áudio ao nosso bot o usuário receberá a porcentagem de ser verdadeiro ou não.
                
            </p>
            <p>
                Nossa empresa foi criada no final de 2023 visando o aumento de fraudes por deepfake, nossa solução
                visa minizar esse crescimento e aumentar a segurança diária dos usuários da rede WhatsApp. Sabemos que cada vez
                mais as tecnologias se renovam, e assim precisamos renovar também nossos métodos de segurança para não ser enganado
                por criminosos que estão utilizando <em>IA</em> para fraudar vozes de amigos, familiares, líderes de empresa e governo.
            </p>
            <p>
            Para usar é bem fácil, basta clicar <u><strong><span onClick={openWhatsApp}>aqui</span></strong></u> que já te encaminhamos ao
             nosso <strong>MediaGuard</strong>, seu futuro segurança contra <em>deepfakes</em>.
            </p>
        </div>
      </div>
    </div>
  )
}/*"deploy": "gh-pages -d build",*/

export default About
