import { configureStore, createSlice } from '@reduxjs/toolkit';

// Интерфейс для описания товара
interface Product {
  id: number;
  title: string;
  price: number;
}

// Начальное состояние корзины (массив товаров)
const initialState: Product[] = [];

// Определение редюсера корзины
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('Add to Cart:', action.payload); // Отладка добавления товара
      state.push(action.payload); // Добавляем товар в корзину
    },
    removeFromCart(state, action) {
      console.log('Remove from Cart:', action.payload); // Отладка удаления товара
      return state.filter((product) => product.id !== action.payload); // Удаляем товар по ID
    },
  },
});

// Экспорт экшенов и селекторов
export const { addToCart, removeFromCart } = cartSlice.actions;

// Конфигурация стор-а
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
