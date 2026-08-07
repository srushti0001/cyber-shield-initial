import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="CyberShield Logo" className="logo-img" />
        <span>CyberShield</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;