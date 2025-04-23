import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "@/pages/Login";
import {privateRoutes,publicRoutes} from "@/router";
import NotFound from '@/pages/NotFound';
import { AuthContext } from '@/context';
import Loader from '@/components/ui/loader/Loader';

const AppRouter = () => {
  const { isAuth, setAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    <Loader />;
  }

  return isAuth ? (
    <>
      <Routes>
        {privateRoutes.map((route, index) => (
          <Route path={route.path} element={<route.component />} key={index} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  ) : (
    <>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route path={route.path} element={<route.component />} key={index} />

                        )
                    }
        <Route path="*" element={<Login />} />
        {/*Редирект по умолчанию*/}
      </Routes>
    </>
  );
};

export default AppRouter;
