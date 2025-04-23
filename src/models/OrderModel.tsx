import { makeAutoObservable } from 'mobx';

type Product = {
  id: number;
  title: string;
  price: number;
};

type Order = {
  cartItems: Product[];
  customerName: string;
  customerEmail: string;
  address: string;
  paymentMethod: string;
  deliveryMethod: string;
};

class OrderModel {
  cartItems: Product[] = [];
  customerName: string = '';
  customerEmail: string = '';
  address: string = '';
  paymentMethod: string = '';
  deliveryMethod: string = '';
  orders: Order[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  updateCartItems(newItems: Product[]) {
    this.cartItems = newItems;
  }

  updateCustomerName(name: string) {
    console.log(name);
    console.log(this.customerName);
    this.customerName = name;
  }

  updateCustomerEmail(email: string) {
    this.customerEmail = email;
  }

  updateAddress(address: string) {
    this.address = address;
  }

  updatePaymentMethod(paymentMethod: string) {
    this.paymentMethod = paymentMethod;
  }

  updateDeliveryMethod(deliveryMethod: string) {
    this.deliveryMethod = deliveryMethod;
  }

  submitOrder() {
    alert('Заказ оформлен');
    const order = {
      cartItems: this.cartItems,
      customerName: this.customerName,
      customerEmail: this.customerEmail,
      address: this.address,
      paymentMethod: this.paymentMethod,
      deliveryMethod: this.deliveryMethod,
    };

    this.orders.push(order);
  }
}

// Создание экземпляра модели
export const orderModelInstance = new OrderModel();
