import { Link } from "react-router-dom";
import imagen from "../../../assets/merle.png"

const Logo = () => {
  return (
      <div className="">
        <Link className="" to="/">
          <img className="img" src={imagen} alt="logo ecommerce" />
        </Link>
      </div>
  );
}

export default Logo