import { FiPhoneCall } from "react-icons/fi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { LuMapPin } from "react-icons/lu";

import { useState } from "react"
import emailjs from "@emailjs/browser";
import styles from "./Menu.module.css"
import { FaWhatsapp } from "react-icons/fa";

export function Menu() {

    const [openModal, setOpenModal] = useState(false);
    const togglePopup = () => {
        setOpenModal(!openModal);
    }

    const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_thetech_email", 
        "template_thetech_contact", 
        e.target as HTMLFormElement, 
        "8LEEy7JUyowamQXRg")
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("E-mail enviado com sucesso!");
      }, (err) => {
        console.log('FAILED...', err);
        alert("Erro ao enviar seu email.Tente novamente")
      });
    };

    const [active, setActive] = useState(false);

    const toggleMode = () => {
        setActive(!active)
    }
    return (
        <nav className={styles.menu}>
            <div className={active ? styles.iconActive : styles.icon} onClick={toggleMode}>
                <div className={styles.hamburger}></div>
            </div >
                <div className={active ? styles.menuOpen : styles.menuClose}>    
                    <div className={styles.list}>
                        <ul className={styles.listItems}>
                            <li onClick={toggleMode}>
                                <a href="#services">Serviços</a>
                            </li>
                            <li onClick={toggleMode}>
                                <a href="#plans">Planos</a>
                            </li>
                            <li onClick={toggleMode}>
                                Diferenciais    
                            </li>
                            
                            <button className={styles.buttonContact} onClick={togglePopup}>
                                Fale Conosco
                            </button>
                        </ul>
                    </div>
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
                                    <textarea name="message" placeholder="Fale um pouco da sua necessidade" required/>   
                                <div>
                                    <button className={styles.buttonClose} onClick={togglePopup}>fechar</button>
                                    <button className={styles.buttonSend} type="submit">enviar</button>
                                </div>
                                </form>
                            </div>
                            <div className={styles.infoPopup}>
                                <strong> <FiPhoneCall size={40} />Telefone:<br/>11 99902-4019</strong>
                                <a href="https://wa.me/5511999024019">
                                    <strong className={styles.whatsapp}>
                                    <FaWhatsapp size={45} />
                                    Whatsapp:<br/>11 99902-4019</strong>
                                </a>
                                <strong> <SlEnvolopeLetter size={40} />Email:<br/>thetech.sm.it@gmail.com</strong>
                                <strong> <LuMapPin size={40} />Localização:<br/>São Paulo, SP</strong>
                                
                            </div>
                        </div>
                    </div>
                )}
                </div>
                    
            </div>
        </nav>  
    )
}