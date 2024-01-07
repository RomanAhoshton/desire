import styles from "./index.module.scss";
import { HomeBanner } from "../../../images";
import Container from "../../../components/Container";
import BannerSlider from "../../../components/BannerSlider";
import DecorLine from "../../../components/DecorLine";
import SubTitle from "../../../components/SubTitle";

const Banner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeBanner})`,
  };
  return (
    <section className={styles.firstSlider} style={backgroundImageStyle}>
      <Container>
        <div className={styles.wrap}>
          <BannerSlider />
          <div className={styles.textBlock}>
            <h3>
              {" "}
              Furniture <br />
              collection
            </h3>
            <DecorLine />

            <div className={styles.description}>
              <SubTitle
                text="  Deep v you probably haven't heard of them banh mi synth actually
              affogato. Aesthetic lyft ethical drinking vinegar austint "
              />
            </div>
         
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
