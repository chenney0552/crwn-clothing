import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {CartIconContainer, ShoppingIcon, ItemCount} from "./card-icon.styles";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CardIcon;
