import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { selectCartItems, selectCartTotal } from '@/store/cart/cart.selector';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '@/store/cart/cart.action';

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  return (
    <Table className="">
      <TableCaption>{cartTotal}$</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Product</TableHead>
          <TableHead>Descriptio</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="">Price</TableHead>
          <TableHead className="">Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((item) => {
          const clearItemHandler = () =>
            dispatch(clearItemFromCart(cartItems, item));
          const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
          const removeItemHandler = () =>
            dispatch(removeItemFromCart(cartItems, item));
          return (
            <TableRow key={item.id}>
              <TableCell>
                <div className="size-[200px] overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} />
                </div>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <button
                    onClick={addItemHandler}
                    className=" active:bg-green-400"
                  >
                    Increment
                  </button>
                  {item.quantity}
                  <button onClick={removeItemHandler}>Decrement</button>
                </div>
              </TableCell>
              <TableCell>
                <>{item.price * item.quantity!}</>
              </TableCell>
              <TableCell>
                <button onClick={clearItemHandler}>Remove</button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CheckOut;
