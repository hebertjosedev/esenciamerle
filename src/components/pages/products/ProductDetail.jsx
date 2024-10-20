import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../database/firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaStar } from "react-icons/fa";
import { formatPrice } from "../../../helpers/number";
import { CartContext } from "../../../context/CartContext";
import Loader from "../../atoms/Loader";

const ProductDetail = ({ruta}) => {
  const { cart, handleAgregar,removeFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState();
  const paramsId = useParams().id;

  useEffect(() => {
    const docRef = doc(db, ruta, paramsId);
    const docSnap = getDoc(docRef)
    docSnap.then((resp) => {
        setProduct({...resp.data(), id: resp.id})
        setLoading(false)
    })
  }, [paramsId]);

  if (loading) return <Loader />;

  return (
    <article className="product-detail flex justify-evenly w-full bg-white rounded-lg shadow-lg p-7 mt-20">
      <div className="flex container-img-precio">
        <div className="product-detail-img mb-5 rounded-lg overflow-hidden shadow">
          <img
            className="product-detail-img-image flex justify-center align-middle h-80 w-full"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="product-detail-info p-5 pt-0 flex flex-col justify-center">
          <div className="flex flex-col pb-7 gap-1">
            <Link className="text-link text-sm" to="/productos/perfumes">
              Seguir viendo perfumes
            </Link>
            <span className="text-sm text-gray-500">Nuevo | +3 vendidos</span>
          </div>
          <div className="info">
            <h1 className="text-xl font-semibold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <div className="flex text-gray-500 mb-3">
              <div className="">
                <span className="">5.0</span>
              </div>
              <div className="flex ml-2 center-star">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </div>
            </div>
            <div className="precio flex flex-col mb-3">
              <span className="text-xl">US: {formatPrice(product.price)}</span>
              <span>Bs. 34.200</span>
            </div>
          </div>
          {!cart.find((c) => c.id === product.id) ? (
            <button
              className="bg-red-800 text-white p-1 mt-5 boton"
              onClick={() => {
                handleAgregar(product);
              }}
            >
              Agregar al carrito
            </button>
          ) : (
            <button
              className="bg-red-500 text-white p-1 mt-5 boton"
              onClick={() => {
                removeFromCart(product);
              }}
            >
              Remover del carrito
            </button>
          )}
        </div>
      </div>
      <div className="product-details-description py-6 mb-3">
        <h2 className="text-2xl">Descripción</h2>
        <p className="text-gray-600 text-sm tracking-wide pt-2 pb-5">
          {product.description}
        </p>
      </div>
    </article>
  );
};

export default ProductDetail;
