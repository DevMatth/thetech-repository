import imagemTeste from "../../public/post_1.png"

import styles from "./Post.module.css"

export function Post() {
    return (
        <div className={styles.post}>
            <div className={styles.content}>
            <h1>Novidades da semana</h1>
            <img src={imagemTeste} alt="post"/>
            </div>

        </div>
    )
}