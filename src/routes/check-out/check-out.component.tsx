import React, { Fragment } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useCartDataContext } from '@/contexts/cart.context';

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartTotal } =
    useCartDataContext();

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
          const addItemHandler = () => addItemToCart(item);
          const removeItemHandler = () => removeItemFromCart(item);
          const clearItemHandler = () => clearItemFromCart(item);
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
