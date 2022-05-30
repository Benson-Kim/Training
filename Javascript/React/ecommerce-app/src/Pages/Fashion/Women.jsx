import { Link } from "react-router-dom";
import "../Fashion/fashion.css";

function Women() {
  return (
    <div className="categories">
      <h3 className="category-title">Women's Fashion</h3>
      <div className="fashion">
        <Link to="/product" className="category">
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/WomenFL/dresses-M.jpg"
            alt=""
          />
          <p>Dresses</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/WomenFL/Skirts-M.png"
            alt=""
          />
          <p>Skirts</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/Freelinks/Mobile/Women-Jeans.jpg"
            alt=""
          />
          <p>Jeans</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/Freelinks/Mobile/Women-Pants.jpg"
            alt=""
          />
          <p>Pants</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/WomenFL/Sleepwear-M.png"
            alt=""
          />
          <p>Sleepware</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/WomenFL/Bags-M.png"
            alt=""
          />
          <p>Handbags</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/WomenFL/Slippers-M.jpg"
            alt=""
          />
          <p>Sandals</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/WomenFL/Flats-&-Ballerinas_M.png"
            alt=""
          />
          <p>Flats</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/WomenFL/Sneakers-M.png"
            alt=""
          />
          <p>Sneakers</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/Freelinks/Mobile/Women-Boots.jpg"
            alt=""
          />
          <p>Boots</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/WomenFL/Heels-M.png"
            alt=""
          />
          <p>Heels</p>
        </Link>
        <Link className="category" to='/product'>
          <img
            src="https://ke.jumia.is/cms/TNG/L1/Fashion/Master/Freelinks/Mobile/Women-Wallets.jpg"
            alt=""
          />
          <p>Wallets</p>
        </Link>
      </div>
    </div>
  );
}

export default Women;
