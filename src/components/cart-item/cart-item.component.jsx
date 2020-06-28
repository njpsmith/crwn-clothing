import React from 'react';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  ItemName,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetails>
      <ItemName>{name}</ItemName>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
