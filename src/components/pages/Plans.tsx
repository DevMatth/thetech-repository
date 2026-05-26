import styles from "./Plans.module.css"


export function Plans() {

    return (
        
        <div className={styles.container}>
                <span id="planos">Planos</span>
                <h1>Escolha o plano ideal para sua empresa</h1>
                <p>Planos flexíveis que acompanham o crescimento do seu negócio.<br /> Sem surpresas, sem taxas ocultas.</p>
            <div className={styles.plans}>
                <div className={styles.essential}>
                    <h1>Plano Essential</h1>
                    <p>Ideal para microemresas</p>
                    <strong>R$300,00</strong>
                    <ul>
                        <li>Suporte a computadores e impressoras</li>
                        <li>Suporte remoto ilimitado</li>
                        <li>Antivírus</li>
                        <li>Higienização básica de equipamentos</li>
                        <li>Backup local ou em nuvem</li>
                    </ul>

                    <button className={styles.hire}>Contratar</button>
                </div>
                <div className={styles.professional}>
                    <p className={styles.recomended}>Mais popular</p>
                    <h1>Plano Profissional</h1>
                    <p>Para empresas em crescimento</p>
                    <strong>R$600,00</strong>
                    <ul>
                        <li>Suporte a computadores e impressoras</li>
                        <li>Suporte remoto ilimitado</li>
                        <li>Antivírus</li>
                        <li>Higienização básica de equipamentos</li>
                        <li>Backup local ou em nuvem</li>
                        <li>Manutenção preventiva</li>
                    </ul>

                    <button className={styles.hire}>Contratar</button>
                </div>
                <div className={styles.smart}>
                    <h1>Plano Smart IT</h1>
                    <p>Solução completa para PMEs</p>
                    <strong>R$900,00</strong>
                    <ul>
                        <li>Suporte a computadores e impressoras</li>
                        <li>Suporte remoto ilimitado</li>
                        <li>Antivírus</li>
                        <li>Higienização básica de equipamentos</li>
                        <li>Backup local ou em nuvem</li>
                        <li>Manutenção preventiva</li>
                        <li>Gestão básica de rede</li>
                        <li>Relatório simples de TI</li>
                        <li>Suporte a novos funcionários</li>
                    </ul>

                    <button className={styles.hire}>Contratar</button>
                </div>
        </div>
        </div>
        
        
    )
}