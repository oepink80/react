import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '@/components/AppRouter';
import Navbar from '@/components/ui/navbar/Navbar';
import { AuthContext } from '@/context';

import './index.css';
import { store } from '@/store';

import { Provider } from 'react-redux';

export const App = () => {
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{
          isAuth,
          setAuth,
          isLoading,
        }}
      >
        <BrowserRouter>
          <div className="container mx-auto p-4">
            <Navbar />
            <AppRouter />
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </Provider>
  );
};
