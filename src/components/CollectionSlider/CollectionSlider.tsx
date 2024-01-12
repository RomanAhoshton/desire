import styles from "./index.module.scss";
import { Carousel as CollectionCarousel } from "react-responsive-carousel";

interface CollectionSliderProps {
  slides: string[];
}

const CollectionSlider: React.FC<CollectionSliderProps> = ({ slides }) => {
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
            className={`${styles.customIndicator} ${
              isSelected ? styles.selected : ""
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        )}
      >
        {slides.map((item: string, index: number) => (
          <div key={index}>
            <img src={item} alt={`collection-${index}`} />
          </div>
        ))}
      </CollectionCarousel>
    </div>
  );
};

export default CollectionSlider;
