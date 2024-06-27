import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCartDataContext } from '@/contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cartItems, cartCount } = useCartDataContext();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Cart {cartCount}</DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>My cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cartItems.map((item) => (
          <DropdownMenuItem key={item.id}>
            <CartItem item={item} />
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="flex items-center justify-center my-4">
          <Button variant="ghost" asChild>
            <Link to='checkout'>GO TO CHECKOUT</Link>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CartIcon;
