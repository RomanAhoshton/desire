import styles from './index.module.scss'
import Banner from '../../sections/Home/Banner'
import Furniture from '../../sections/Home/Furniture'
import Aesthetic from '../../sections/Home/Aesthetic'

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner/>
      <Furniture/>
      <Aesthetic/>
    </div>
  )
}

export default Home