import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Cart from '@/components/Catalog/Cart';
import Products, { Product } from '@/components/Catalog/Products';

const Catalog = () => {
  const itemsInCart = useSelector((state: { cart: Product[] }) => state.cart);

  return (
    <>
      <Products></Products>
      <Cart></Cart>
      <div className="mt-4 py-2 px-4 text-white rounded-md">
        {itemsInCart.length > 0 && (
          <Link
            to="/card"
            className="mt-4 py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            Перейти в корзину
          </Link>
        )}
      </div>
    </>
  );
};

export default Catalog;
