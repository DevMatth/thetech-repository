import styles from "./Modal.module.css"


import { useState } from "react"
import { FiPhoneCall } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { SlEnvolopeLetter } from "react-icons/sl";

import emailjs from "@emailjs/browser";

export function Modal() {

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

    emailjs.send("SEU_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("E-mail enviado com sucesso!");
        setName(''); setEmail(''); setMessage('');
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

    return (
        <div className={styles.popup}>
            {openModal && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <div className={styles.formContainer}>
                           
                            <span>Contato</span>
                            <form onSubmit={sendEmail}className={styles.formPopup} action="submit">
                                <input type="text" placeholder="Seu Nome"/>
                                <input type="text" placeholder="Sua Empresa"/>
                                <input type="text" placeholder="Email"/>   
                                <input type="text" placeholder="Telefone"/>   
                                <textarea placeholder="Fale um pouco da sua necessidade"/>   
                            </form>
                            <button className={styles.contact} onClick={togglePopup}>fechar</button>
                            <button className={styles.contact}>enviar</button>
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
    )
}