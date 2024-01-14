import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux";
import { addToCart, removeFromCart, Product } from "../redux/slices/cartSlice";

export const useCart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const isInCart = (productId: string) => {
    return cart.some((item) => item.id === productId);
  };

  const addProduct = (item: Product) => {
    dispatch(addToCart(item));
  };

  const removeProduct = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return { addProduct, removeProduct, isInCart ,cart};
};
