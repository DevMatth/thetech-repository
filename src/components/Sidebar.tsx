import { IoShieldOutline } from "react-icons/io5";

import styles from "./Sidebar.module.css"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

                <div className={styles.container}>
                    <strong> <IoShieldOutline size={19} />Suporte de TI para empresas</strong>
                    <h1>Sua empresa protegida <br/>
                    com manutenção <br/>
                    preventiva inteligente</h1>
                    <p>Cuidamos da infraestrutura de TI da sua empresa com planos mensais
                    acessíveis. Prevenção, monitoramento e suporte técnico especializado para PMEs.</p>
                </div>
                <div className={styles.select}>
                    <a className={styles.planos} href="#planos">
                        Ver Planos
                    </a>
                    
                </div>

        </aside>
    )
}