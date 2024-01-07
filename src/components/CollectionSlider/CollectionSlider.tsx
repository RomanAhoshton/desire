import styles from "./index.module.scss";
import { Carousel as CollectionCarousel } from "react-responsive-carousel";
import { collection } from "../../images";

const CollectionSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <CollectionCarousel
        width={350}
        showArrows={false}
        showThumbs={false}
        showIndicators={true}
        infiniteLoop={true}
        showStatus={false}
        swipeable={true}
        renderIndicator={(_onClickHandler, isSelected, index) => (
          <li
            key={index}
            // onClick={(e) => onClickHandler(e)}
            className={`${styles.customIndicator} ${
              isSelected ? styles.selected : ""
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        )}
      >
        {collection.map((item) => (
          <div>
            <img src={item.col} alt="collection" />
          </div>
        ))}
      </CollectionCarousel>
    </div>
  );
};

export default CollectionSlider;
