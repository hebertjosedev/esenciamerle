import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../database/firebase";
import { CartContext } from "../../../context/CartContext";
import { formatPrice } from "../../../helpers/number";
import Loader from "../../atoms/Loader";
import { Link } from "react-router-dom";

const CardProductCosmetics = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleAgregar } = useContext(CartContext);

  useEffect(() => {
    const productosRef = collection(db, "cosmeticos");

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
    <div className="cuadricula-cosmeticos flex pl-2 gap-2 cuadricula-cosmetics bg-slate-50 shadow max-width pt-9 pb-16">
      {productos.map((producto) => (
        <div key={producto.id} className="card p-4 shadow border">
          <Link to={`/productos/cosmeticos/${producto.id}`}>
            <img
              className="image-product"
              src={producto.image}
              alt={producto.name}
            />
          </Link>
          <span className="">{producto.name}</span>
          <span>{formatPrice(producto.price)}</span>
          <button
            className="bg-red-800 text-white p-1 mt-5 boton"
            onClick={() => {
              handleAgregar(producto);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardProductCosmetics;
