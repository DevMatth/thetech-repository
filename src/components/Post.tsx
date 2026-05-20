import imagemTeste from "../../public/tecnologia.webp"

import styles from "./Post.module.css"

export function Post() {
    return (
        <div className={styles.Post}>
            <h1>Novidades da semana</h1>
            <img  src={imagemTeste} alt="post" />
        </div>
    )
}