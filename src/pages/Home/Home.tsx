import styles from './index.module.scss'
import Banner from '../../sections/Home/Banner'
import Furniture from '../../sections/Home/Furniture'
import Aesthetic from '../../sections/Home/Aesthetic'
import HowWorks from '../../sections/Home/HowWorks'

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner/>
      <Furniture/>
      <Aesthetic/>
      <HowWorks/>
    </div>
  )
}

export default Home