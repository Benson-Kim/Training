import './home.css'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Men from '../Fashion/Men'
import Women from '../Fashion/Women'


function Home({ productItems, addToCart, CartItem, shopItems }) {
    return (
        <div>
            <About />
            <Men shopItems={shopItems} addToCart={addToCart} />
            <Women shopItems={shopItems} addToCart={addToCart} />
            <Contact />
        </div>
    )
}

export default Home