import styles from "./Header.module.css"
import { Link } from 'react-scroll';

function Header() {
    const sections = [
        { id: 'home', text: 'Home' },
        { id: 'experience', text: 'Experience' },
        { id: 'skills', text: 'Skills' },
        { id: 'education', text: 'Education' },
        { id: 'projects', text: 'Projects' },
        { id: 'contact', text: 'Contact' }
    ];

    return (
        <div className={styles.page}>
            <nav className={styles.header}>
                <ul className={styles.list}>
                    {sections.map((section) => (
                        <li key={section.id} className={styles.inList}>
                            <Link
                                to={section.id}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={styles.navLink}
                                hashSpy={true}
                                activeClass={styles.active}
                            >
                                {section.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;