import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

<script
  src="https://kit.fontawesome.com/0a73bdd7d6.js" crossorigin="anonymous"></script>;

function Navbar({CartItem}) {

  return (
    <nav class="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li>
            <Link to="/">Collections</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <h1 class="logo">sneakers</h1>
        <div className="right">
          <div className="cart-top">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              {/* <span className="cart-items">  {props.units}</span> */}
              <span className="cart-items"> {CartItem.length === 0 ? "" : CartItem.length}</span>
            </Link>
          </div>

          <div className="account">
            <a href="#">
              <img
                src="https://images.pexels.com/photos/7191774/pexels-photo-7191774.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
