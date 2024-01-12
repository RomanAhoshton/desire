import styles from "./index.module.scss";
import Container from "../../../components/Container";
import { howItWorks } from "../../../constants";

const HowWorks = () => {
  return (
    <section className={styles.howWorks}>
      <Container>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>How it works</h3>

          <div className={styles.wrapItems}>
            {howItWorks.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.titleImage}>
                  <img src={item.image} alt="image" />
                  <p>{item.title}</p>
                </div>

                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWorks;
