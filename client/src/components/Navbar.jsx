import { Link } from "react-router-dom";
import logo from "../../../server/public/assets/images/wLogo.png";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logoWE">
        <img src={logo} alt="logo" />
        <p>Eats</p>
      </Link>
    </nav>
  );
}

export default Navbar;
