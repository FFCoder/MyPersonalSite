import Header from '../Components/Header'
import styles from '../styles/Custom404.module.css'
import { useRouter } from 'next/router'

export default function Custom404() 
{
    const router = useRouter();
    return (
        <div id="custom404">
            <Header />
            <div className={styles.page404}>
                <h2>404 - Page Not Found</h2>
                <p>Sorry, this page <code className={styles.routePath}>({router.asPath})</code> can't be found.</p>
                
            </div>
        </div>
    )
}