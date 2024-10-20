import App from "../components/App";
import {createBrowserRouter} from "react-router-dom"
import Error404 from "../components/pages/Error404";
import ProductsTemplate from "../components/templates/ProductsTemplate";
import Home from "../components/pages/Home";
import CartBuy from "../components/pages/cart/CartBuy";
import CardProductCosmetics from "../components/pages/products/CardProductCosmetics";
import ProductDetail from "../components/pages/products/ProductDetail";
import LoginNew from "../components/pages/admin/LoginNew";
import CreateProduct from "../components/pages/admin/CreateProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginNew />,
      },
      {
        path: "/login/crear/producto",
        element: <CreateProduct />,
      },
      {
        path: "/productos/perfumes",
        element: <ProductsTemplate />,
      },
      {
        path: "/productos/perfumes/:id",
        element: <ProductDetail ruta={"productos"} />,
      },
      {
        path: "/productos/cosmeticos",
        element: <CardProductCosmetics />,
      },
      {
        path: "/productos/cosmeticos/:id",
        element: <ProductDetail ruta={"cosmetics"} />,
      },
      {
        path: "/carrito",
        element: <CartBuy />,
      },
    ],
  },
]);

export default router