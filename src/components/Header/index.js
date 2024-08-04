import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <span>Dev_Evan</span>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}

export default Header;