import styles from "./index.module.scss";
import { useCart } from "../../hooks/useCart";
// import { useLocation } from "react-router-dom";

export interface Goods {
  item: {
    link: string;
    type: string;
    id: string;
    price: number;
  };
}

const CardItem: React.FC<Goods> = ({ item }) => {
  const { addProduct, removeProduct, isInCart } = useCart();


  return (
    <div className={styles.cardItem}>
    <div className={styles.cardItemContainer}>
      <div className={styles.image}>
        <img src={item.link} alt="image" />
      </div>

      <div className={styles.actions}>
        {!isInCart(item.id) ? (
          <button
            className={styles.actionButton}
            onClick={() => addProduct(item)}
          >
            add to cart
          </button>
        ) : (
          <button
            className={styles.actionButton}
            onClick={() => removeProduct(item.id)}
          >
            remove from cart
          </button>
        )}

        <span className={styles.price}>{`Price: ${item.price}$`}</span>
      </div>
    </div>
  </div>
  );
};

export default CardItem;
