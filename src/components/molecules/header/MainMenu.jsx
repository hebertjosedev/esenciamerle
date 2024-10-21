import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Logo from "./Logo";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { deleteToken, token } from "../../../helpers/auth";
import { IoIosCloseCircleOutline } from "react-icons/io";

const MainMenu = () => {
  const { cart } = useContext(CartContext);
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false)
  const [carritoIcon, setCarritoIcon] = useState(false)

  const handleSession = () => {
    deleteToken();
    nav("/");
  };

  return (
    <>
      <div className="">
        <header className="header flex justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <div className="contenedor-menu flex items-center relative">
            <div className="p-2 menu-link carrito-responsive">
              <Link className="flex items-center" to="/carrito">
                <FaCartPlus className="mr-1 text-2xl" />{" "}
                <span className="">{cart.length}</span>
              </Link>
            </div>
            <nav className="nav flex flex-col justify-center">
              <div
                className={!menuOpen ? "menu" : "hidden"}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  setCarritoIcon(!carritoIcon);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className={menuOpen ? "open relative" : "flex p-4"}>
                <span
                  className="menu-responsive-cerrar"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <IoIosCloseCircleOutline />
                </span>
                <li className="p-2 menu-link">
                  <NavLink to="/productos/perfumes">Perfumes</NavLink>
                </li>
                <li className="p-2 menu-link">
                  <NavLink to="/productos/cosmeticos">Cosmeticos</NavLink>
                </li>
                {token("token") && (
                  <li className="p-2 menu-link">
                    <Link to="/login/crear/producto">Crear producto</Link>
                  </li>
                )}
                <li className="p-2 menu-link">
                  {token("token") ? (
                    <a className="cursor-pointer" onClick={handleSession}>
                      Cerrar sesión
                    </a>
                  ) : (
                    <NavLink to="/login">Login</NavLink>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default MainMenu;
