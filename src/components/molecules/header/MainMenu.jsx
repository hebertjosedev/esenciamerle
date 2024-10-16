import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Logo from "./Logo";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const MainMenu = () => {

    const { cart } = useContext(CartContext);

  return (
    <>
      <div>
        <header className="flex justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="flex flex-col justify-center">
            <ul className="flex p-4">
              <li className="p-2 menu-link">
                <Link className="flex items-center" to="/carrito">
                  <FaCartPlus className="mr-1" /> <span className="">{cart.length}</span>
                </Link>
              </li>
              <li className="p-2 menu-link">
                <NavLink to="/productos">Perfumes</NavLink>
              </li>
              <li className="p-2 menu-link">
                <NavLink to="/cosmeticos">Cosmeticos</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default MainMenu;
