import React, { useContext } from 'react';

import MyInput from '@/components/ui/input/MyInput';
import Button from '@/components/ui/my-button/my-button';
import { AuthContext } from '@/context';

const Login = () => {
  const { isAuth, setAuth } = useContext(AuthContext);

  function randomToken() {
    return Math.random().toString(36).substring(7);
  }

  return (
    <>
      <div className={'container mx-auto px-4'}>
        <h1>Авторизация</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setAuth(true);
            localStorage.setItem('token', randomToken());
            window.location.href = '/';
          }}
        >
          <MyInput type="text" placeholder="Enter login" />
          <MyInput type="password" placeholder="Enter password" />
          <Button type={'submit'} text={'Войти'}></Button>
        </form>
      </div>
    </>
  );
};

export default Login;
