import styles from "./index.module.scss";
import DecorLine from "../../../components/DecorLine";
import SubTitle from "../../../components/SubTitle";
import { HomeBanner as Banner } from "../../../images";
import { chairGreen } from "../../../images";
import Container from "../../../components/Container";
import ProgressBarC from "../../../components/ProgressBarC";

const Inspiration = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Banner})`,
  };

  return (
    <section className={styles.inspiration}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>Our Inspiration in details</h3>
        <DecorLine height={2} />
        <SubTitle
          text="Semiotics fixie four dollar toast, next level woke scenester direct trade photo 
        booth helvetica jean shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar."
        />
      </div>

      <div className={styles.progress} style={backgroundImageStyle}>
        <Container>
          <div className={styles.progressWrap}>
            <div className={styles.greenChair}>
              <img src={chairGreen} alt="greenChair" />
            </div>

            <div className={styles.progressContainer}>

                <ProgressBarC description="Design and technical drawings" completed={80}/>
                <ProgressBarC description="Measurments" completed={70}/>
                <ProgressBarC description="Furniture functionality analysis" completed={75}/>
                <ProgressBarC description="Interior visualization" completed={40}/>

            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Inspiration;
