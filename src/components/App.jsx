import { Outlet } from "react-router-dom";
import MainMenu from "./molecules/header/MainMenu";
import { CartContext } from "../context/CartContext";
import { useEffect, useState } from "react";

const App = () => {

  const cartInitial = JSON.parse(localStorage.getItem("cart")) || [];
  // const admin = localStorage.getItem("user")

  const [cart, setCart] = useState(cartInitial)

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

  const priceTotal = () => {
      let value = 0;
      cart.forEach((c) => (value += c.price));
      return value
  }

  useEffect(()=> {
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])


  return (
    <CartContext.Provider
      value={{
        cart,
        handleAgregar,
        clearCart,
        removeFromCart,
        cantidadEnCarrito,
        priceTotal,
      }}
    >
        <div className="max-width">
          <MainMenu />
          <div className="">
            <Outlet />
          </div>
        </div>
    </CartContext.Provider>
  );
}

export default App
