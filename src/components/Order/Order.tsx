import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { orderModelInstance as model } from '@/models/OrderModel';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface StoreState {
  cart: Product[];
}

const Order = observer(() => {
  const itemsInCartFromRedux = useSelector((state: StoreState) => state.cart);

  useEffect(() => {
    if (itemsInCartFromRedux && itemsInCartFromRedux.length > 0) {
      model.updateCartItems(itemsInCartFromRedux);
    }
  }, [itemsInCartFromRedux]);

  // Вспомогательная функция для подсчета итоговой суммы заказов
  const totalPrice = model.cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Оформление заказа</h1>

      {/* Шапка с перечнем товаров */}
      <section className="mb-6 border-b pb-4">
        <h2 className="font-medium text-gray-700">Список товаров в заказе:</h2>
        <ul className="list-disc pl-6 mt-2">
          {model.cartItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <span className="block mt-2 font-bold text-xl">
          Общая сумма: ${totalPrice.toFixed(2)}
        </span>
      </section>

      {/* Контактные данные */}
      <section className="mb-6">
        <h2 className="font-medium text-gray-700">Контактные данные:</h2>
        <div className="mt-2 grid gap-y-4 w-full max-w-md">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Имя покупателя:
            </label>
            <input
              type="text"
              placeholder="Иван Иванов"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={model.customerName}
              onChange={(e) => model.updateCustomerName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Электронная почта:
            </label>
            <input
              type="email"
              placeholder="ivan@example.com"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={model.customerEmail}
              onChange={(e) => model.updateCustomerEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Способ оплаты:
            </label>
            <select
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={model.paymentMethod}
              onChange={(e) => model.updatePaymentMethod(e.target.value)}
            >
              <option value="">Выберите способ оплаты</option>
              <option value="cash">Наличными</option>
              <option value="card">Картой</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Способ доставки:
            </label>
            <select
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={model.deliveryMethod}
              onChange={(e) => model.updateDeliveryMethod(e.target.value)}
            >
              <option value="">Выберите способ доставки</option>
              <option value="delivery">Доставка</option>
              <option value="pickup">Самовывоз</option>
            </select>
          </div>
        </div>
      </section>
      <button
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => model.submitOrder()}
      >
        Оформить заказ
      </button>
    </div>
  );
});

export default Order;
