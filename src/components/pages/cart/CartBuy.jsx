import { Link } from "react-router-dom";
import { useContext} from "react";
import { CartContext } from "../../../context/CartContext";
import { formatPrice } from "../../../helpers/number";

const CartProduct = () => {
  const { cart, clearCart, removeFromCart, createOrder } = useContext(CartContext);

  let value = 0;
  cart.forEach((c) => (value += c.price));

  return (
    <>
      {cart.length === 0 ? (
        <div className="mb-3">
          <Link
            to="/productos"
            className="bg-red-800 text-white p-2 rounded-md hover:cursor-pointer"
          >
            Ver productos
          </Link>
        </div>
      ) : (
        <div className="mb-3">
          <a
            className="bg-red-500 text-white p-2 rounded-md hover:cursor-pointer"
            onClick={() => clearCart()}
          >
            Vaciar carrito
          </a>
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
                className="align-middle h-20 w-full object-cover"
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
      {cart.length !== 0 && (
        <div>
          <div className="total">Total:{formatPrice(value)}</div>
          <div className="mt-3">
            <a
              className="bg-green-600 text-white p-2 rounded-md hover:cursor-pointer"
              onClick={() => createOrder(console.log(cart))}
            >
              Crear orden
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CartProduct;
