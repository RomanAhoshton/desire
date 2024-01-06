import styles from './index.module.scss'
import FooterBottom from '../FooterBottom'
import FooterTop from '../FooterTop'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterTop/>
      <FooterBottom/>
    </footer>
  )
}

export default Footer