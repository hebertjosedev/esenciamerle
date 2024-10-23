import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../database/firebase";
import { CartContext } from "../../../context/CartContext";
import { formatPrice } from "../../../helpers/number";
import Loader from "../../atoms/Loader";
import { Link } from "react-router-dom";

const CardProduct = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cart, removeFromCart, handleAgregar } = useContext(CartContext);

  useEffect(() => {
    const productosRef = collection(db, "perfumes");

    getDocs(productosRef).then((resp) => {
      setLoading(false);
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {productos.map((producto) => (
        <div key={producto.id} className="card p-4 shadow">
          <Link to={`/productos/perfumes/${producto.id}`}>
            <img src={producto.image} alt={producto.name} width="150px" />
          </Link>
          <span className="">{producto.name}</span>
          <span>{formatPrice(producto.price)}</span>
          {!cart.find((c) => c.id === producto.id) ? (
            <button
              className="bg-red-800 text-white p-1 mt-5 boton"
              onClick={() => {
                handleAgregar(producto);
              }}
            >
              Agregar al carrito
            </button>
          ) : (
            <button
              className="bg-red-500 text-white p-1 mt-5 boton"
              onClick={() => {
                removeFromCart(producto);
              }}
            >
              Remover del carrito
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default CardProduct;
