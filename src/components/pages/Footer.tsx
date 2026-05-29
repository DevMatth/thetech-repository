import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import styles from "./Footer.module.css"
import { FiPhoneCall } from "react-icons/fi"
import { SlEnvolopeLetter } from "react-icons/sl"
import { LuMapPin } from "react-icons/lu"

export function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.redes}>
                <p>Suporte tecnico especializado <br/>para empresas.</p>
                <a href="https://www.instagram.com/thetech_smart_it/"><FaInstagram size={40} className={styles.instagram}/></a>
                <a href="https://wa.me/5511999024019"><FaWhatsapp size={40} className={styles.whatsapp}/></a>
            </div>
            <div className={styles.services}>
                <span>Serviços</span>
                <ul className={styles.list}>
                    <li>Manutenção Preventiva</li>
                    <li>Segurança Digital</li>
                    <li>Redes e Infraestrutura</li>
                    <li>Backup e Recuperação</li>
                    <li>Suporte Técnico</li>
                </ul>
            </div>
            <div className={styles.contact}>
                <span>Contatos</span>
                <p> <FiPhoneCall size={20}/> Telefone: 11 99902-4019</p>
                <p> <SlEnvolopeLetter size={20}/> Email: thetech.sm.it@gmail.com</p>
                <p> <LuMapPin size={20}/> Localização: São Paulo, SP</p>
            </div>
        </div>
    )
} 