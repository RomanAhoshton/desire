import styles from "./index.module.scss";
import { HomeBanner } from "../../../images";
import Container from "../../../components/Container";
import Decorline from "../../../components/Decorline";
import BannerSlider from "../../../components/BannerSlider";

const Banner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeBanner})`,
  };
  return (
    <section className={styles.firstSlider} style={backgroundImageStyle}>
      <Container>
        <div className={styles.wrap}>

          <BannerSlider/>
          <div className={styles.textBlock}>
            <h3> Furniture <br/>collection</h3>
            <Decorline />
            <p className={styles.description}>
              Deep v you probably haven't heard of them banh mi synth actually
              affogato.<br/> Aesthetic lyft ethical drinking vinegar austint
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
