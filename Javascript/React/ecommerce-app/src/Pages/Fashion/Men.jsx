import { Link } from "react-router-dom";
import '../Fashion/fashion.css'

function Men() {
  return (
      <div className="categories">
          <h3 className="category-title">Men's Fashion</h3>
          <div className="fashion">

              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/MensFL/T-shirts-M.png" alt="" />
                  <p>T-shirts</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/MensFL/Casual-Shirts-M.png" alt="" />
                  <p>Shirts</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/Freelinks/Mobile/Mens-Jeans.jpg" alt="" />
                  <p>Jeans</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/MensFL/Shorts-M.png" alt="" />
                  <p>Shorts</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/Freelinks/Mobile/Chinos.jpg" alt="" />
                  <p>Pants</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/MensFL/Boxers-M.png" alt="" />
                  <p>Boxers</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/MensFL/Sneakers_M.png" alt="" />
                  <p>Sneakers</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/Freelinks/Mobile/Mens-Slippers.jpg" alt="" />
                  <p>Slippers</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/MensFL/Watches-M.png" alt="" />
                  <p>Watches</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/Freelinks/Mobile/Mens-Belts.jpg" alt="" />
                  <p>Belts</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/MensFL/Wallets-M.png" alt="" />
                  <p>Wallets</p>
              </Link>
              <Link className='category' to="/product">
                  <img src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/MensFL/Accessories-M.png" alt="" />
                  <p>Accessories</p>
              </Link>
          </div>
      </div>
  )
}

export default Men