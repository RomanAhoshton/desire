import styles from './index.module.scss'
import Banner from '../../sections/Home/Banner'

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner/>
    </div>
  )
}

export default Home