import { Link } from "react-router-dom";
import { useContext} from "react";
import { CartContext } from "../../../context/CartContext";
import { formatPrice } from "../../../helpers/number";
import { API_URL } from "../../../constants/env";
import { FaWhatsapp } from "react-icons/fa";

const CartProduct = () => {
  const { cart, clearCart, removeFromCart, priceTotal } = useContext(CartContext);



  let newCart = [`Total de la compra: $${priceTotal()}`]
  let mensaje = "Orden: "
  cart.map((product) => {
    let price = `$${product.price.toString()}`
    let name = `${product.name}`
    newCart.unshift(name + " " + price + " ");
  })

  return (
    <div className="container-cart max-w-2xl px-1">
      {cart.length === 0 ? (
        <div className="mt-4 ml-4">
          <Link
            to="/"
            className="bg-red-800 text-white p-2 rounded-md hover:cursor-pointer"
          >
            Ver productos
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-center max-w-2xl mb-4 mt-4 px-5">
          <div className="total text-xl">Total:{formatPrice(priceTotal())}</div>
          <div className="flex items-center gap-2">
            <a className="flex text-center">
              <Link
                className="bg-red-500 text-white p-2 rounded-md hover:cursor-pointer text-center w-20"
                onClick={() => clearCart()}
              >
                Vaciar
              </Link>
            </a>
            <a className="flex items-center">
              <Link
                className="flex items-center bg-green-600 text-white p-2 rounded-md hover:cursor-pointer"
                to={`${API_URL}${mensaje}${newCart}`}
                onClick={() => clearCart()}
              >
                Comprar <FaWhatsapp className="ml-1" />
              </Link>
            </a>
          </div>
        </div>
      )}
      {cart.map((product) => (
        <article
          key={product.id}
          className="w-full flex justify-between items-center max-w-2xl bg-white  shadow-lg p-5 border-y-2 border-gray-300 mb-3"
        >
          <div className="flex rounded-lg overflow-hidden">
            <Link to={`/productos/${product.id}`}>
              <img
                className="align-middle h-40"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="mb-6 ml-3">
              <Link to={`/productos/${product.id}`}>
                <h3 className="text-xl font-light tracking-tight text-gray-400 mb-2">
                  {product.name}
                </h3>
              </Link>
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>
          <div className="boton">
            <a
              className="bg-red-500 text-white p-2 rounded-md hover:cursor-pointer"
              onClick={() => removeFromCart(product)}
            >
              Eliminar
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CartProduct;
