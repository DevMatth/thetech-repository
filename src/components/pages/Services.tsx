import styles from "./Services.module.css"

export function Services() {
    return (
        <div className={styles.infoServices}>
            <span id="services">Serviços</span>
            <h1>Soluções completas de TI para sua empresa</h1>
            <p>Da manutenção preventiva ao suporte emergencial, cuidamos de toda sua infraestrutura tecnológica.</p>

            <div className={styles.container}>
                <div className={styles.box}>
                <span>Manutenção Preventiva</span>
                <p>Inspeções regulares em computadores, impressoras e periféricos para evitar falhas e paradas inesperadas.</p>
                </div>
                <div className={styles.box}>
                <span>Segurança Digital</span>
                <p>Proteção contra vírus, ransomware e ameaças cibernéticas com soluções profissionais de segurança.</p>
                </div>
                <div className={styles.box}>
                <span>Redes e Infraestrutura</span>
                <p>Projeto, instalação e manutenção de redes cabeadas.</p>
                </div>
                <div className={styles.box}>
                <span>Backup e Recuperação</span>
                <p>Rotinas automatizadas de backup e planos de recuperação de desastres para seus dados críticos.</p>
                </div>
                <div className={styles.box}>
                <span>Suporte Técnico</span>
                <p>Atendimento remoto e presencial rápido para resolver problemas do dia a dia da sua equipe.</p>
                </div>
                </div>
        </div>
    )
}