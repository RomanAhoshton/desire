import styles from "./index.module.scss";
import DecorLine from "../../../components/DecorLine";
import SubTitle from "../../../components/SubTitle";
import { collection } from "../../../images";
import { useWidth } from "../../../hooks/useWidth";
import CollectionSlider from "../../../components/CollectionSlider";

const Furniture = () => {
  const { width } = useWidth();

  return (
    <section className={styles.furniture}>
      <div className={styles.furnitureText}>
        <h3 className={styles.title}>Furniture new collection</h3>
        <DecorLine />
        <div className={styles.titleWrap}>
          <SubTitle
            text="Deep v you probably haven't heard of them banh mi synth actually affogato. 
            Aesthetic lyft ethical drinking vinegar austint"
          />
        </div>
      </div>

      <div className={styles.furnitureImageBlock}>
        {width > 500 ? (
          <div className={styles.imageCollection}>
            {collection.map((item) => (
              <div>
                <img src={item.col} alt="collection" />
              </div>
            ))}
          </div>
        ) : (
          <CollectionSlider  slides={collection.map((item)=>item.col)}/>
        )}
      </div>
    </section>
  );
};

export default Furniture;
