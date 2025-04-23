// context.ts
import { createContext, Dispatch, SetStateAction } from 'react';

// Интерфейс описывает структуру данных контекста
interface IAuthContext {
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

// Значение по умолчанию не null
export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  setAuth: () => {},
  isLoading: true,
});
