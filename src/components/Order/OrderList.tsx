import { useAtom } from 'jotai';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { darkModeAtom } from '@/atoms'; // Импортируем атом darkModeAtom
import { orderModelInstance as model } from '@/models/OrderModel';

const OrderList = observer(() => {
  const [darkMode] = useAtom(darkModeAtom); // Читаем текущее состояние темы

  return (
    <div
      className={`${darkMode ? 'dark' : 'light'} min-h-screen bg-white dark:bg-gray-900 transition-all duration-300`}
    >
      <div className="container mx-auto mt-8">
        <div className="max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Список заказов</h1>

          {model.orders.length === 0 ? (
            <p>Нет заказов</p>
          ) : (
            <ul className="list-disc pl-6">
              {model.orders.map((order, index) => (
                <li key={index}>
                  <h2 className="font-medium text-gray-700 dark:text-gray-300">
                    Заказ {index + 1}
                  </h2>
                  <div className="mt-2">
                    <p>Имя покупателя: {order.customerName}</p>
                    <p>Электронная почта: {order.customerEmail}</p>
                    <p>Адрес доставки: {order.address}</p>
                    <p>Способ оплаты: {order.paymentMethod}</p>
                    <p>Способ доставки: {order.deliveryMethod}</p>
                    <p>Товары в заказе:</p>
                    <ul className="list-disc pl-6">
                      {order.cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="text-gray-700 dark:text-gray-300"
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
});

export default OrderList;
