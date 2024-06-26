import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/icons8-gmail-logo.svg';

const Contact = () => {
    const [result, setResult] = useState("");
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        // Permite apenas números
        if (/^\d*$/.test(value)) {
            setPhone(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7d5d1d2a-e6a0-43f4-9d05-b3fa1a0a76bb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            console.log("Email Success", data);
            setResult("E-mail enviado com sucesso.");
            event.target.reset();
            setPhone(""); // Reseta o campo de telefone
        } else {
            console.log("Email Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Envie uma mensagem <img src={msg_icon} alt="" /></h3>
                Sinta-se à vontade para entrar em contato. 
                Seus comentários, dúvidas e sugestões são importantes para nós, estamos nos esforçando diariamente para oferecer um serviço excepcional 
                aos nossos usuários.
                <ul>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>E-mail</label>
                    <input type="email" name='email' placeholder='Insira seu e-mail' required/>
                    <label>Telefone</label>
                    <input 
                        type="tel" 
                        name='phone' 
                        placeholder='Insira seu telefone' 
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                    />
                    <label>Escreva sua mensagem aqui</label>
                    <textarea name="message" rows="6" placeholder='Insira sua mensagem' required></textarea>
                    <button type='submit' className='btn dark-btn'>Enviar</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;
