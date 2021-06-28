import styles from '../../styles/Home.module.css'

export default function Main() {
    return (
        <div className={styles.container}>
            <h2>Hi!</h2>
            <h2>My name is <span className={styles.nameEmp}>Jonathon Chambers</span></h2>
        </div>
    )
}