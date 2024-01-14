import CardItem from "../../components/CardItem";
import { useCart } from "../../hooks/useCart";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        {cart.length === 0 ? (
          <h3 className={styles.emptyCartText}>
            Add items to your shopping basket
          </h3>
        ) : null}
        {cart.map((item) => (
          <CardItem item={item} key={item.id} />
        ))}
      </div>

      {cart.length > 0 ? (
        <p className={styles.totalPrice}>{`Total price: ${totalPrice}$`}</p>
      ) : null}
    </div>
  );
};

export default Cart;
