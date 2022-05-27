import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'

<script src="https://kit.fontawesome.com/0a73bdd7d6.js" crossorigin="anonymous"></script>


function Product() {
    return (
        <section className='product-container'>
            <article className="img-container">
                <img className='product-image' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/265543/1.jpg?4011" alt="" />
                {/* <span className="arrow-left"> <FontAwesomeIcon icon={faArrowLeft} /> </span>
                <span className="arrow-right"> <FontAwesomeIcon icon={faArrowRight} /> </span> */}
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
                    <button className='quantity' id="quantity-minus">-</button>
                    <span className="quantity-amount">0</span>
                    <button className='quantity' id="quantity-add">+</button>
                </div>
                <button className="cart-container">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="add-to-cart">Add to cart</span>
                </button>
            </article>
        </section >
    )
}

export default Product