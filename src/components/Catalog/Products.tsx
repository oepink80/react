import { useAtom } from 'jotai';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { darkModeAtom } from '@/atoms'; // Импортируем атом darkModeAtom
import { addToCart } from '@/store';

import ProductCard from './ProductCard';
// Интерфейс описания продукта
export interface Product {
  id: number;
  title: string;
  price: number;
}

// Массив с товарами
const products: Product[] = [
  { id: 1, title: 'Apollo Rocket', price: 1000000 },
  { id: 2, title: 'Neptune Shuttle', price: 1500000 },
  { id: 3, title: 'Stellar Transporter', price: 1200000 },
];

const Products = () => {
  const [darkMode] = useAtom(darkModeAtom); // Читаем текущее состояние темы
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state: { cart: Product[] }) => state.cart);

  return (
    <div
      className={`${darkMode ? 'dark' : 'light'} min-h-screen bg-white dark:bg-gray-900 transition-all duration-300`}
    >
      <h2 className="text-2xl font-semibold mb-4">Космические корабли</h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => dispatch(addToCart(product))}
            inCart={
              !!itemsInCart.find((item: Product) => item.id === product.id)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
