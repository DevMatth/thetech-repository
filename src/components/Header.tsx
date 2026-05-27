import styles from "./Header.module.css"
import logoThetech from "../assets/logo_thetech.svg"
import { Menu } from "./Menu"

export function Header() {
    return (
        <header className={styles.header}>
            
                <Menu />
                <a href="#top"><img src={logoThetech} alt="logo thetech" /></a>
            
        </header>
        
    )
}