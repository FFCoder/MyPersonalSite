import styles from '../styles/Home.module.css'
import Header from '../Components/Header'

export default function Home() {
  function HandleHeaderScroll(){

  }
  return (<div>

    <Header onScroll={HandleHeaderScroll} />
    <div id="main" className={styles.container}>
      <h2>Hi!</h2>
      <h2>My name is <span className={styles.nameEmp}>Jonathon Chambers</span></h2>
    </div>

    <div id="about" className={styles.container}>
      <h1>About</h1>
    </div>

    <div id="experience" className={styles.container}>
      <h1>Experience</h1>
    </div>
    </div>
    
  )
}
