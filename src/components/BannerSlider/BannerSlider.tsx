import styles from "./index.module.scss";
import { Carousel as BannerCarousel } from "react-responsive-carousel";
import { Chairs } from "../../constants/fakeData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SliderBg } from "../../images";

const BannerSlider = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${SliderBg})`,
  };

  return (
    <div className={styles.carouselContainer} style={backgroundImageStyle}>
      <BannerCarousel
        width={300}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={false}
        swipeable={false}
        autoPlay={true}
        interval={2000}

        // renderIndicator={(_onClickHandler, isSelected, index) => (
        //   <li
        //     key={index}
        //     // onClick={(e) => onClickHandler(e)}
        //     className={`${styles.customIndicator} ${
        //       isSelected ? styles.selected : ""
        //     }`}
        //     aria-label={`Slide ${index + 1}`}
        //   />
        // )}
      >
        {Chairs.map((item, index) => (
          <div key={index} className={styles.imageItem}>
            <img src={item.link} alt="slider" />
          </div>
        ))}
      </BannerCarousel>
    </div>
  );
};

export default BannerSlider;
