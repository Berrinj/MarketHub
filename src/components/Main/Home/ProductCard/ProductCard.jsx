import { Card } from "./ProductCard.styles.js";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <Card className="product-card">
      <img src="https://via.placeholder.com/200" alt="product" />
      <h2>Product name</h2>
      <p>produc title</p>
      <p>product price</p>
        <button>Add to cart</button>
        <Link to="/product/"><button>View details</button></Link>   
    </Card>
  );
}

export default ProductCard;
