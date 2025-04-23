import { useAtom } from 'jotai';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { darkModeAtom } from '@/atoms';
import Button from '@/components/ui/my-button/my-button';
import { AuthContext } from '@/context';

import ClassNames from './Navbar.module.css';

const Navbar = () => {
  const { isAuth, setAuth } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return isAuth ? (
    <div className={`${ClassNames.navbar} ${darkMode ? ClassNames.dark : ''}`}>
      <div className={ClassNames.navbar__title}>
        Магазин космических кораблей. Здравствуйте пользователь с токеном{' '}
        {localStorage.getItem('token')}
      </div>
      <div className={ClassNames.navbar__links}>
        <Link to="/">Магазин</Link>
        <Link to="/orders">Заказы</Link>
        <Button
          onClick={() => {
            setAuth(false);
            localStorage.removeItem('token');
          }}
          text={'Выйти'}
        />
        <Button
          onClick={() => setDarkMode(!darkMode)}
          text={darkMode ? 'Светлая тема' : 'Темная тема'}
        />
      </div>
    </div>
  ) : (
    <div className={ClassNames.navbar}>
      <div className={ClassNames.navbar__title}>
        Магазин космических кораблей
      </div>
      <div className={ClassNames.navbar__links}>
        <Link to="/login">Вход</Link>
      </div>
    </div>
  );
};

export default Navbar;
