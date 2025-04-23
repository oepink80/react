import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { create } from 'zustand';

import { addToCart, removeFromCart } from '@/store';

// Интерфейс товара
interface Product {
  id: number;
  title: string;
  price: number;
}

// Интерфейс состояния Redux стора
interface StoreState {
  cart: Product[];
}

// Интерфейс состояния Zustand стора
interface ZustandState {
  cartItems: Product[];
  setCartItems: (newItems: Product[]) => void;
}

// Создание Zustand стора
const useZustandStore = create<ZustandState>((set) => ({
  cartItems: [], // Начальное состояние корзины
  setCartItems: (newItems: Product[]) => set({ cartItems: newItems }), // Метод изменения корзины
}));

// Компонент карточки корзины
const Card = () => {
  // Получаем данные из Redux стора
  const itemsInCartFromRedux = useSelector((state: StoreState) => state.cart);

  // Получаем доступ к диспетчеру действий Redux
  const dispatch = useDispatch();

  // Подписываемся на состояние Zustand стора
  const { cartItems, setCartItems } = useZustandStore();

  // Синхронизируем содержимое корзины между Redux и Zustand при изменении содержимого в Redux
  useEffect(() => {
    if (itemsInCartFromRedux && itemsInCartFromRedux.length > 0) {
      setCartItems(itemsInCartFromRedux);
    }
  }, [itemsInCartFromRedux]);

  // Логируем обновление списка товаров в Zustand
  useEffect(() => {
    console.log('Обновленные товары в Zustand:', cartItems);
  }, [cartItems]);

  // Проверка наличия товаров в корзине
  if (!cartItems || cartItems.length === 0)
    return <p className="text-gray-500">Корзина пуста.</p>;

  // Рассчитываем общую стоимость товаров
  const totalCost = cartItems.reduce(
    (sum: number, item: Product) => sum + item.price,
    0,
  );

  // Обработчик нажатия кнопки удаления товара
  const handleRemoveItem = (itemId: number) => {
    console.log(`Удаление товара с ID: ${itemId}`);

    // Убираем товар из Zustand стора
    setCartItems(cartItems.filter((item) => item.id !== itemId));

    // Отправляем экшн для удаления товара из Redux стора
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="flex flex-col items-center p-8">
      {/* Заголовок */}
      <h2 className="text-3xl font-semibold mb-8">Оформление заказа:</h2>

      {/* Список товаров в корзине */}
      <ul className="list-disc pl-8">
        {cartItems.map((item: Product) => (
          <li key={item.id} className="mb-4 flex items-center">
            <span className="text-lg font-semibold mr-4">{item.title}</span> — $
            {item.price.toFixed(2)}
            {/* Кнопка удаления товара */}
            <button
              className="ml-auto px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md"
              onClick={() => handleRemoveItem(item.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>

      {/* Итоговая сумма */}
      <p className="text-2xl font-semibold mt-8">
        Итого: ${totalCost.toFixed(2)}
      </p>

      {/* Кнопка завершения покупки */}
      <Link
        to="/order"
        className="mt-4 py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
      >
        Оформить заказ
      </Link>
    </div>
  );
};

export default Card;
