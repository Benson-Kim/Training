import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

<script src="https://kit.fontawesome.com/0a73bdd7d6.js" crossorigin="anonymous"></script>


function Product(props) {

    return (
        <section className='product-container'>
            <article className="img-container">
                <img className='product-image' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/265543/1.jpg?4011" alt="" />
            </article>
            <article className="product-info">
                <h6>sneaker company</h6>
                <h4>{props.product.name}</h4>
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
                        onClick={props.itemsub}
                        disabled={props.units <= 0}
                    >
                        <FontAwesomeIcon className='medium' icon={faMinus} />
                    </button>

                    <span className="quantity-amount">{props.units}</span>

                    <button className='quantity' id="quantity-add"
                        onClick={props.itemadd} >
                        <FontAwesomeIcon className='medium' icon={faPlus} />
                        </button>

                </div>
                <button className="cart-container" onClick={props.onAdd(props.product)}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="add-to-cart">Add to cart</span>
                </button>
            </article>
        </section >
    )
}

export default Product