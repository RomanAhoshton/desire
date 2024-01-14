import styles from "./index.module.scss";
import GoogleMaps from "../../components/GoogleMaps";
import ContactInfo from "../../components/ContactInfo";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <GoogleMaps />
      <ContactInfo />
    </div>
  );
};

export default Contact;
