import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Main from "../Components/IndexMain"

export default function Home() {
  function HandleHeaderScroll(){

  }
  return (<div>

    <Header onScroll={HandleHeaderScroll} />
    <Main id="main" />

    <div id="about" className={styles.container}>
      <h1>About</h1>
    </div>

    <div id="experience" className={styles.container}>
      <h1>Experience</h1>
    </div>
    </div>
    
  )
}
