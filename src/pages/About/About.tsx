import styles from "./index.module.scss";
import Banner from "../../sections/About/Banner";
import AboutText from "../../sections/About/AboutText";
import { chairAbout } from "../../images";
import Inspiration from "../../sections/About/Inspiration";
import ImageSlider from "../../sections/About/ImageSlider";

const About = () => {
  return (
    <div className={styles.about}>
      <Banner />
      <AboutText />

      <div className={styles.chairs}>
        <img src={chairAbout} alt="chairs" />
      </div>

      <Inspiration />
      <ImageSlider />
    </div>
  );
};

export default About;
