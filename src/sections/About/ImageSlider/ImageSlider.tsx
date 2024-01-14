import styles from "./index.module.scss";
import { useWidth } from "../../../hooks/useWidth";
import { collectionAbout } from "../../../images";
import CollectionSlider from "../../../components/CollectionSlider";

const ImageSlider = () => {
  const { width } = useWidth();
  return (  
    <div className={styles.furnitureImageBlock}>
      {width > 500 ? (
        <div className={styles.imageCollection}>
          {collectionAbout.map((item) => (
            <div>
              <img src={item.col} alt="collection" />
            </div>
          ))}
        </div>
      ) : (
        <CollectionSlider slides={collectionAbout.map((item) => item.col)} />
      )}
    </div>
  );
};

export default ImageSlider;
