import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import MasterLayoutUser from "./pages/users/Theme/MasterLayout/index";
import HomePage from "./pages/users/HomePage";
import ShopPage from "./pages/users/ShopPage";
import StorePage from "./pages/users/StorePage";
import CheckoutPage from "./pages/users/CheckoutPage";
import ProductPage from "./pages/users/ProductPage";

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
    path: ROUTERS.USER.STORE,
    component: <StorePage />,
  },
  {
    path: ROUTERS.USER.PRODUCT,
    component: <ProductPage />,
  },
  {
    path: ROUTERS.USER.CHECKOUT,
    component: <CheckoutPage />,
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
