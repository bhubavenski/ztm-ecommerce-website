import React from 'react';
import { Button } from '../ui/button';
import { TProduct } from '@/types';
import './product-card.styles.scss';
import { useCartDataContext } from '@/contexts/cart.context';

type Props = {
  product: TProduct;
};

const ProductCard = ({ product }: Props) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useCartDataContext();

  const handleClick = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={handleClick}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
