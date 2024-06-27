import ProductCard from '@/components/product-card/product-card.component';
import { useShopDataContext } from '@/contexts/products.context';
import './shop.styles.scss'
const Shop = () => {
  const {products} = useShopDataContext();
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Shop;
