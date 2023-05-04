import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.page}>
            <nav className={styles.header}>
                <ul className={styles.list}>
                    <li className={styles.inList}><a className={styles.link} href="/">Home</a></li>
                    <li className={styles.inList}><a className={styles.link} href="#news">News</a></li>
                    <li className={styles.inList}><a className={styles.link} href="#contact">Contact</a></li>
                    <li className={styles.inList}><a className={styles.link} href="#about">About</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;