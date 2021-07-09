import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Main from "../Components/IndexMain"
import { Alert } from 'react-bootstrap'

export default function Home() {
  function HandleHeaderScroll(){

  }
  return (<div>
    <Alert variant="danger">
    <Alert.Heading>Attention: </Alert.Heading>
      <p>
        Hi!
        This site is still a work in progress. Please don't judge too harshly.
      </p>
      <p>
        As I add more content and I feel more comfortable presenting it, I will remove this banner</p> 
      </Alert>

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
