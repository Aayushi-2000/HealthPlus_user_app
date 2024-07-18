import { Route, createRoutesFromElements } from "react-router-dom";
import HomePage from "../../pages/Home";
import Layout from "../layout/layout";
import LogInPage from "../../pages/Login";
import ProductDetails from "../../pages/ProductDashboard";
import Cart from "../../pages/Cart";

const ArrayRoute = [
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductDetails /> },
  { path: "/login", element: <LogInPage /> },
  { path: "/cart", element: <Cart /> },
];

export const routes = createRoutesFromElements(
  <>
    {ArrayRoute?.map((i) => (
      <Route element={<Layout />}>
        <Route key={i?.path} path={i?.path} element={i?.element} />
      </Route>
    ))}
  </>
);
