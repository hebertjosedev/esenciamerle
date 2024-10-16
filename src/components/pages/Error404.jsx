import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex justify-center container container-404 max-width">
      <div className="pagina-error-mobile flex justify-center justify-items-center">
        <div className="contenedor-titulo">
          <h1 className="titulo-404 text-center text-md-end">404</h1>
        </div>
        <div className="flex flex-col justify-center m-2 text-center">
          <p>Ups...</p>
          <span className="d-block">La pagina no ha sido encontrada</span>
          <span>
            <Link className="link-perfumes" to="/">
              Ver perfumes
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Error404