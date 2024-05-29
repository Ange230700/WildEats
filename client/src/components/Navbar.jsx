import logo from "../../../server/public/assets/images/wLogo.png";

function Navbar() {
  return (
    <nav>
      <div className="logoWE">
        <img src={logo} alt="logo" />
        <p>Eats</p>
      </div>
    </nav>
  );
}

export default Navbar;
