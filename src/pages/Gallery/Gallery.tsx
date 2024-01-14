import styles from "./index.module.scss";
import Location from "../../components/Location";
import { Goods } from "../../constants/fakeData";
import CardItem from "../../components/CardItem";
import Container from "../../components/Container";
import { filteringButton } from "../../constants";
import { useState } from "react";



const Gallery = () => {

  const [GoodsItems, setGoodsItems] = useState(Goods);
  const [active, setActive] = useState("All");

  const filterGoods = (type: string) => {
    if (type === "All") {
      setGoodsItems(Goods);
      setActive(type);
    } else {
      const filteredGoods = Goods.filter((item) => item.type === type);

      setGoodsItems(filteredGoods);
      setActive(filteredGoods[0].type);
    }
  };
  return (
    <div className={styles.gallery}>
      <Location />

      <Container>
        <div className={styles.filteringButtons}>
          {filteringButton.map((item, index) => (
            <button
              className={
                active === item.type
                  ? styles.filteringActive
                  : styles.filteringB
              }
              onClick={() => filterGoods(item.type)}
              key={index}
            >
              {item.type}
            </button>
          ))}
        </div>
      </Container>

      <div className={styles.goodsContainer}>
        {GoodsItems.map((item) => (
          <CardItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
