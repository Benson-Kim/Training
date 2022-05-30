import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { useState, useContext } from "react"
import { CartContext } from '../CartContext'

<script src="https://kit.fontawesome.com/0a73bdd7d6.js" crossorigin="anonymous"></script>


function Product() {
    
    const [cartItems, setCartItems] = useState(0)

    const [cart, setCart] = useContext(CartContext)

    const addToCart = () => {
        // const item = { name: 'sneaker', price: 300}
        setCart(curr => [...curr, cartItems]);
    }

    return (
        <section className='product-container'>
            <article className="img-container">
                <img className='product-image' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/265543/1.jpg?4011" alt="" />
            </article>
            <article className="product-info">
                <h6>sneaker company</h6>
                <h4>fall limited edition sneakers</h4>
                <p className="product-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati aspernatur reprehenderit asperiores ut dolorum at.
                </p>

                <div className="price-container">
                    <div className="price-left">
                        <span className="curr-price">$125.00</span>
                        <span className="disc">50%</span>
                    </div>
                    <div className="price-right">
                        <span className="old-price">$250.00</span>
                    </div>
                </div>
                <div className="quantity-container">
                    <button className='quantity' id="quantity-minus"
                        onClick={() => setCartItems(cartItems - 1)}
                        disabled={cartItems <= 0}>-</button>

                    <span className="quantity-amount">{cartItems}</span>

                    <button className='quantity' id="quantity-add"
                        onClick={() => setCartItems(cartItems + 1)} >+</button>

                </div>
                <button className="cart-container" onClick={()=>addToCart(cartItems)}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="add-to-cart">Add to cart</span>
                </button>
            </article>
        </section >
    )
}

export default Product