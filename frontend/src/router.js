import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import MasterLayoutUser from "./pages/users/Theme/MasterLayout/index";
import HomePage from "./pages/users/HomePage";
import ShopPage from "./pages/users/ShopPage";
import StorePage from "./pages/users/StorePage";
import CheckoutPage from "./pages/users/CheckoutPage";
import ProductPage from "./pages/users/ProductPage";
import LoginPage from "./pages/users/LoginPage";
import RegisterPage from "./pages/users/RegisterPage";
import ProfilePage from "./pages/users/ProfilePage";
import FavoritesPage from "./pages/users/FavoritesPage";
import CartPage from "./pages/users/CartPage";
import AddressPage from "./pages/users/AddressPage";
import ReviewPage from "./pages/users/ReviewPage";

const routes = [
  {
    path: ROUTERS.USER.HOME,
    component: <HomePage />,
  },
  {
    path: ROUTERS.USER.HOMES,
    component: <HomePage />,
  },
  {
    path: ROUTERS.USER.SHOP,
    component: <ShopPage />,
  },
  {
    path: ROUTERS.USER.PRODUCT,
    component: <ProductPage />,
  },
  {
    path: ROUTERS.USER.CHECKOUT,
    component: <CheckoutPage />,
  },
  {
    path: ROUTERS.USER.LOGIN,
    component: <LoginPage />,
  },
  {
    path: ROUTERS.USER.REGISTER,
    component: <RegisterPage />,
  },
  {
    path: ROUTERS.USER.PROFILE,
    component: <ProfilePage />,
  },
  {
    path: ROUTERS.USER.FAVORITES,
    component: <FavoritesPage />,
  },
  {
    path: ROUTERS.USER.CART,
    component: <CartPage />,
  },
  {
    path: ROUTERS.USER.ADDRESS,
    component: <AddressPage />,
  },
  {
    path: ROUTERS.USER.REVIEW,
    component: <ReviewPage />,
  },
];

const RouterCustom = () => {
  return (
    <MasterLayoutUser>
      <Routes>
        {routes.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayoutUser>
  );
};

export default RouterCustom;
