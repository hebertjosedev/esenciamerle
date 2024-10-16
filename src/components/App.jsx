import { Outlet } from "react-router-dom";
import MainMenu from "./molecules/header/MainMenu";
import { CartContext } from "../context/CartContext";
import { useState } from "react";

const App = () => {

  const [cart, setCart] = useState([])

  const handleAgregar = (producto) => {
      setCart([...cart, producto]);
    };

  const cantidadEnCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const clearCart = () => {
      setCart([]);
    };

  const removeFromCart = (product) => {
      const productRemove = cart.filter((productf) => productf.id !== product.id);
      setCart(productRemove);
    };

  const createOrder = () => {

  }

  return (
    <div>
      <CartContext.Provider value={ {cart, handleAgregar, clearCart, removeFromCart, cantidadEnCarrito, createOrder } }>
        <div className="max-width">
          <MainMenu />
          <div className="">
            <Outlet />
          </div>
        </div>
      </CartContext.Provider>
    </div>
  );
}

export default App
