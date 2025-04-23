import { useAtom } from 'jotai';
import React from 'react';
import { useSelector } from 'react-redux';

import { darkModeAtom } from '@/atoms'; // Импортируем атом darkModeAtom

import { Product } from './Products'; // Импортируем интерфейс Product
import '@/app/index.css';

// Тип состояния
interface StateType {
  cart: Array<Product>;
}

const Cart = () => {
  const [darkMode] = useAtom(darkModeAtom); // Читаем текущее состояние темы

  // Уточняем тип именно в самом selectore
  const itemsInCart = useSelector<StateType, Array<Product>>(
    (state) => state.cart,
  );

  // Далее работаем с валидированным типом
  const totalPrice = itemsInCart.reduce(
    (acc: number, current: Product) => acc + current.price,
    0,
  );

  return (
    <div
      className={`${darkMode ? 'dark' : 'light'} min-h-screen bg-white dark:bg-gray-900 transition-all duration-300`}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center dark:text-gray-200">
        Корзина
      </h2>
      {itemsInCart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center">
          Корзина пуста!
        </p>
      ) : (
        <>
          {itemsInCart.map((item: Product) => (
            <div
              key={item.id}
              className="border border-dashed border-green-500 dark:border-red-500 p-4 mb-4 rounded-md bg-white dark:bg-gray-800 shadow-sm dark:shadow-xl dark:text-gray-300"
            >
              <strong className="block text-lg font-semibold dark:text-gray-200">
                {item.title}:
              </strong>
              <span className="block text-lg font-bold dark:text-yellow-300">
                ${item.price.toLocaleString()}
              </span>
            </div>
          ))}
          <p className="text-lg font-semibold mt-4 text-center dark:text-gray-200">
            Общая сумма: ${totalPrice.toLocaleString()}
          </p>
        </>
      )}
    </div>
  );
};

export default Cart;
