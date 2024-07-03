import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import CartItem from '../cart-item/cart-item.component';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { selectCartCount, selectCartItems } from '@/store/cart/cart.selector';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Cart {cartCount}</DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>My cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <DropdownMenuItem key={item.id}>
              <CartItem item={item} />
            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem key="empty-cart">
            <span>Your cart is empty</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <div className="flex items-center justify-center my-4">
          <Button variant="ghost" asChild>
            <Link to="checkout">GO TO CHECKOUT</Link>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CartIcon;
