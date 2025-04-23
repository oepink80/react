import React from 'react';

import { Product } from '@/components/Catalog/Products';

type Props = {
  product: Product;
  onAdd?: () => void; // Колбэк для добавления в корзину
  inCart: boolean; // Наличие товара в корзине
};

const ProductCard = ({ product, onAdd, inCart }: Props) => {
  return (
    <div className="flex flex-col h-full p-4 border rounded-lg shadow-md">
      <img
        alt={product.title}
        src={`https://dummyimage.com/150x150/ffffff/000000.png&text=${product.id * 100 + 100}`}
        className="w-full h-48 object-fit rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-4">
        Цена: {product.price.toLocaleString()} $
      </p>
      {!inCart && (
        <button
          type="button"
          onClick={onAdd}
          className="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
        >
          Добавить в корзину
        </button>
      )}
    </div>
  );
};

export default ProductCard;
