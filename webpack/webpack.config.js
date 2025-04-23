const path = require('path');

module.exports = {
  mode: 'development', // Добавляем этот параметр
  entry: './src/index.tsx', // точка входа приложения
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // путь к статическим файлам
    },
    port: 9000,
    open: true, // автоматическое открытие браузера после старта сервера
  },
};
