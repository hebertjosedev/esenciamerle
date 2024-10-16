import App from "../components/App";
import {createBrowserRouter} from "react-router-dom"
import Error404 from "../components/pages/Error404";
import ProductsTemplate from "../components/templates/ProductsTemplate";
import Home from "../components/pages/Home";
import CartBuy from "../components/pages/cart/CartBuy";


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
        path: "/productos",
        element: <ProductsTemplate />,
      },
      {
        path: "/cosmeticos",
        element: <ProductsTemplate />,
      },
      {
        path: "/carrito",
        element: <CartBuy />,
      },
    ],
  },
]);

export default router