import { TProduct } from '@/types';
import React from 'react';

type Props = {
  item: TProduct;
};

const CartItem = ({ item }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="size-[100px] overflow-hidden">
        <img src={item.imageUrl} alt={item.name} className="w-full" />
      </div>
      <div className='text-lg'>
        <h3>{item.quantity} X {item.name}</h3>
        <h4>{item.price}$</h4>
      </div>
    </div>
  );
};

export default CartItem;
