import styles from './index.module.scss'
import Location from '../../../components/Location'
import { AboutBanner } from '../../../images';

const Banner = () => {


    const backgroundImageStyle = {
        backgroundImage: `url(${AboutBanner})`,
      };


  return (
    <section className={styles.banner} style={backgroundImageStyle}>
        <Location/>

        <h3 className={styles.title}>About Us</h3>
    
    </section>
  )
}

export default Banner