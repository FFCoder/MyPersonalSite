import styles from '../../styles/Header.module.css';
import static_links from "../../static_links.json"
import Link from 'next/link'

export default function Header () {
    
    return (
        <div className={styles.Header}>
            <div><Link href="/">Jonathon Chambers</Link></div>
            <div>
                <ul className={styles.navItems}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href={static_links.Resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </div>
        </div>
    )
}