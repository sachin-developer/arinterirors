import small_logo from "../assets/images/small_logo.png";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return (       
      <nav className="navbar grid grid-cols-12 px-1 mb-2 shadow-xl shadow-slate-300 font-bold">
        <Link to="/" className="navbar-brand-cm col-start-1 col-end-2">
          <img src={small_logo} alt="AR Interiors" />
        </Link>
        <ul className="rightMenu col-start-10 col-end-13 flex ">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;