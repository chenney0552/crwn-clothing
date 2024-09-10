import { ItemDetails, CartItemContainer } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`}></img>
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} * ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
