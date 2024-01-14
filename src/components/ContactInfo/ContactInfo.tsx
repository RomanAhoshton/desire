import Container from "../Container";
import styles from "./index.module.scss";
import DecorLine from "../DecorLine";
import { contactSocial } from "../../constants";
import { Link } from "react-router-dom";
import { footerEnvelope } from "../../images";
import ContactForm from "../ContactForm";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <Container>
        <div className={styles.contactWrap}>
          <div className={styles.titleBlock}>
            <h3 className={styles.contactTitle}> Contact Us</h3>
            <DecorLine height={2} />
          </div>

          <div className={styles.formInfo}>
            <div className={styles.formSocial}>
              {contactSocial.map((item, index) => (
                <Link to={item.href} key={index}>
                  {" "}
                  <img src={item.image} alt="socialLink" />
                </Link>
              ))}
            </div>

            <p className={styles.formSub}>
              Vexillologist vape microdosing freegan pork belly deep v direct
              trade cray single-origin coffee street art. Viral shaman mustache
              master cleanse, pour-over affogato poutine copper mug marfa fanny
              pack normcore. Lo-fi pop-up banjo portland, echo park hammock{" "}
            </p>

            <p className={styles.street}>
              {" "}
              (415) 829-7934 725 Green St San Francisco, California(CA), 94133{" "}
            </p>

            <div className={styles.email}>
              <a href="mailto:ouremailaddress@email.com">
                ouremailaddress@email.com
              </a>
              <img src={footerEnvelope} alt="envelope" />
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactInfo;
