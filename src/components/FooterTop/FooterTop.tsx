import styles from "./index.module.scss";
import FooterContact from "../FooterContact";
import { footerSocialLinks, footerLinks } from "../../constants";
import { Link } from "react-router-dom";
import Container from "../Container";

const FooterTop = () => {
  return (
    <div className={styles.footerTop}>
      <Container>
        <div className={styles.footerContent}>
          <FooterContact />

          <div className={styles.linkContainer}>
            <div className={styles.social}>
              {footerSocialLinks.map((item, index) => (
                <Link to={item.href} key={index}>
                  <img src={item.image} alt="socialIcon" />
                  <span className={styles.link}>{item.link}</span>
                </Link>
              ))}
            </div>

            <ul className={styles.footerLinks}>
              {footerLinks.map((item, index) => (
                <Link to={item.href} key={index} className={styles.link}>
                  {item.link}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterTop;
