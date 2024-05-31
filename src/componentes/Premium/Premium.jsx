import React from 'react';
import './Premium.css';
import wpp_icon from '../../assets/whatsapp-svgrepo-com.svg'
import check_icon from '../../assets/icons8-check.svg'
import { Link, ScrollLink } from 'react-scroll';
import { Link as RouterLink} from 'react-router-dom';
const Premium = () => {
  
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá, quero testar o MediaGuard!");
    const whatsappUrl = `https://wa.me/+15550076438/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  }
 
  return (
    <div className="premium">
        <div className="pricing-card">
        <h2> Plano Trial </h2>
        <p className = "p-premium"> Evite cair em fraudes deepfake. Clique no botão abaixo e te direcionamos ao <strong>MediaGuard.</strong></p>
        <div className="price">R$0</div>
        <ul>
            <li><img src={check_icon} alt=""/>1 áudio de até 30s diariamente.</li>
            <li><img src={check_icon} alt=""/>Segurança contra deepfakes.</li>
        </ul>
        <button className='btn' onClick={openWhatsApp}>Teste Grátis <img src={wpp_icon} alt=""/></button>
        </div>
        <div className="pricing-card">
        <h2> Plano Premium </h2>
        <p className = "p-premium">Maior cobertura, maior segurança, assine o Premium. Assine para benefícios únicos.</p>
        <div className="price">R$19,90/mês</div>
        <ul>
            <li><img src={check_icon} alt=""/>Prioridade Premium nas requisições.</li>
            <li><img src={check_icon} alt=""/>5 áudios diariamente. Maior segurança.</li>
        </ul>
        <RouterLink to='/login'>
        <button className='btn'>Seja Premium</button>
        </RouterLink>
        </div>
        <div className="pricing-card enterprise">
        <h2> Plano Enterprise </h2>
        <p className = "p-premium"></p>
        <p>Nossa solução na sua empresa? Entre em contato para conversar com nossos especialistas. </p>
        <div className="price"></div>
        <ul>
            <li><img src={check_icon} alt=""/> Classificador de áudios contra deepfakes.</li>
            <li><img src={check_icon} alt=""/> Amplie a segurança da empresa e colaboradores.</li>
            <li><img src={check_icon} alt=""/> Especialistas de plantão para atendimento personalizado.</li>
        </ul>
        <button className='btn'><Link to='contact' smooth={true} offset={0} duration={500}><strong>Contate-nos</strong></Link></button>
        </div>

    </div>
  );
};

export default Premium
