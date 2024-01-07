import styles from "./index.module.scss";
import { BagAesthetic } from "../../../images";
import Container from "../../../components/Container";
import DecorLine from "../../../components/DecorLine";


const Aesthetic = () => {
  return (
    <section className={styles.aesthetic}>
      <img src={BagAesthetic} alt="bg" />
      <Container>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
            Aesthetic <br />
            ethical drinking{" "}
          </h3>
          <DecorLine />
          <p className={styles.subtitle}>
            Deep v you probably haven't heard of them banh mi synth actually
            affogato. Artlyft ethical the one drinking vinegar austint
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Aesthetic;
