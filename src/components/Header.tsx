import styles from "./Header.module.css"
import logoThetech from "../assets/logo_thetech.svg"
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { LuMapPin } from "react-icons/lu";

import emailjs from "@emailjs/browser";

export function Header() {

       const [openModal, setOpenModal] = useState(false);

    const togglePopup = () => {
        setOpenModal(!openModal);
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.sendForm(
        "service_thetech_email", 
        "template_thetech_contact", 
        e.target as HTMLFormElement, 
        "8LEEy7JUyowamQXRg")
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("E-mail enviado com sucesso!");
        setName(''); setEmail(''); setMessage('');
      }, (err) => {
        console.log('FAILED...', err);
        alert("Erro ao enviar seu email.Tente novamente")
      });
  };


    return (

        <header className={styles.header}>
            <img src={logoThetech} alt="logo thetech"/>
            <nav>
                <a href="#services">
                    Serviços
                </a>
                <a href="#planos">
                    Planos
                </a>
                <a href="#">
                    Diferenciais
                </a>
                <a href="#">
                    Contato
                </a>
                <button className={styles.contact} onClick={togglePopup}>
                    Fale Conosco
                </button>
            </nav>
            <div className={styles.popup}>
            {openModal && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <div className={styles.formContainer}>
                           
                            <span>Contato</span>
                            <form onSubmit={sendEmail} className={styles.formPopup} action="submit">
                                <input type="text" name="name" placeholder="Seu Nome" required/>
                                <input type="text" name="enterprise" placeholder="Sua Empresa" required/>
                                <input type="email" name="email" placeholder="Email" required/>   
                                <input type="tel" name="tel" placeholder="Telefone" required/>   
                                <textarea name="message"placeholder="Fale um pouco da sua necessidade" required/>   
                            <div>
                                <button className={styles.contact} onClick={togglePopup}>fechar</button>
                                <button className={styles.contact} type="submit">enviar</button>
                            </div>
                            </form>
                            
                        </div>
                        <div className={styles.infoPopup}>
                            <strong> <FiPhoneCall size={40} />Telefone:<br/>11 99902-4019</strong>
                            <strong> <SlEnvolopeLetter size={40} />Email:<br/>thetech.sm.it@gmail.com</strong>
                            <strong> <LuMapPin size={40} />Email:<br/>São Paulo, SP</strong>
                            
                        
                        </div>
                    </div>
                </div>
            )}
            </div>
            
        </header>
        
    )
}