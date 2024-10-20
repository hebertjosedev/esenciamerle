import CardBestSeller from "./products/CardBestSeller";
import Footer from "../atoms/Footer";

const Home = () => {
  return (
    <div className="carrusel max-width">
      <div className="slider rounded">
        <ul>
          <li>
            <img
              className="object-cover w-full h-full"
              src="https://i.ibb.co/yXKNCDb/pexels-karolina-grabowska-4938191.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              className="object-cover w-full h-full"
              src="https://i.ibb.co/PhF9NYd/cerave-todos-los-productos.webp"
              alt=""
            />
          </li>

          <li>
            <img
              className="object-cover w-full h-full"
              src="https://i.ibb.co/LvY1LdQ/pexels-valeriya-965989.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              className="object-cover w-full h-full"
              src="https://i.ibb.co/8cgMmDJ/pexels-karolina-grabowska-4041392.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="favorito flex justify-center">
        <span className="favoritos-hijo flex items-center">
          Los mas vendidos
        </span>
      </div>
      <CardBestSeller />
      <Footer />
    </div>
  );
};

export default Home;
