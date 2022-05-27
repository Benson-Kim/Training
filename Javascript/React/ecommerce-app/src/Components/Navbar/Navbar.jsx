import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

<script src="https://kit.fontawesome.com/0a73bdd7d6.js" crossorigin="anonymous"></script>

function Navbar() {
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
                    <li><a href="#">Collections</a></li>
                    <li><a href="#a">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <h1 class="logo">sneakers</h1>
                <div className="right">
                    <div className="cart-top">
                        <a href="#">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
                    </div>
                    <div className="account">
                        <a href="#">
                            <img src="https://images.pexels.com/photos/7191774/pexels-photo-7191774.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                        </a>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar