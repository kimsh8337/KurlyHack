import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pagePaths } from 'modules/defines/paths';
import Home from 'pages/Home';
import User from 'pages/User';
import Cart from 'pages/Cart';



const Router = () => (
  <Routes>
    <Route path={pagePaths.home} element={<Home />} />
    <Route path={pagePaths.user} element={<User />} />
    <Route path={pagePaths.cart} element={<Cart />} />
    <Route path="*" element={<Navigate replace to={pagePaths.home} />} />
  </Routes>
);

export default Router;