import { footerEnvelope } from "../../images";
import styles from "./index.module.scss";

const FooterContact = () => {
  return (
    <div className={styles.footerContact}>
      <h4 className={styles.contact}> Contact Us</h4>
      <p className={styles.contactSubtile}>
        Keffiyeh poutine etsy, paleo cray put a bird on it microdosing
        <br /> schlitz you probably occupy{" "}
      </p>

      <div className={styles.email}>
        <a href="mailto:ouremailaddress@email.com">ouremailaddress@email.com</a>
        <img src={footerEnvelope} alt="envelope" />
      </div>

      <form className={styles.footerForm}>
        <input type="text" placeholder="Subscribe by email" />
        <button type="button">Send</button>
      </form>
    </div>
  );
};

export default FooterContact;
