import styles from "./index.module.scss";
import ButtonC from "../ButtonC";

const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.inputs}>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your e-mail" />
      </div>
      <textarea placeholder="Your message"></textarea>
      <ButtonC  text="Send"/>
    </form>
  );
};

export default ContactForm;
