import { Button } from '../ui/button';
import { TProduct } from '@/types';
import './product-card.styles.scss';
import { addItemToCart } from '@/store/cart/cart.reducer';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  product: TProduct;
};

const ProductCard = ({ product }: Props) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={addProductToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
