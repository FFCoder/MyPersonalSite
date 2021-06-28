import styles from '../../styles/Header.module.css';
import Link from 'next/link'

export default function Header () {
    return (
        <div className={styles.Header}>
            <div><a href="/">Jonathon Chambers</a></div>
            <div>
                <ul className={styles.navItems}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
            </div>
        </div>
    )
}