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
  const { cartItems } = useCartDataContext();
  return (
    <Table className="">
      <TableCaption>A list of your added products.</TableCaption>
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
        {cartItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="size-[200px] overflow-hidden">
                <img src={item.imageUrl} alt={item.name} />
              </div>
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell><>{item.price * item.quantity!}</></TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CheckOut;
