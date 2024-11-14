import { Card } from "./ProductCard.styles.js";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ProductCard({img, alt, title, description, price, id}) {
  return (
    <Card className="product-card">
      <img src={img} alt={alt} className="product-card--img" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
        <button>Add to cart</button>
        <Link to={`/product/${id}`}><button>View details</button></Link>   
    </Card>
  );
}
//img and img alt are not required, but title, description, and price are required
ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProductCard;
