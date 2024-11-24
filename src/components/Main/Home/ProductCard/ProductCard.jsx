import { Card } from "./ProductCard.styles.js";
import { Link } from "react-router-dom";
import RatingStars from "../../../RatingStars/RatingStars.jsx";
// import PropTypes from 'prop-types';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + "...";
}

function ProductCard({img, alt, title, rating, description, price, id}) {
  return (
    <Card className="product-card">
      <Link to={`/product/${id}`}><img src={img} alt={alt} className="product-card--img" />
      <h2>{title}</h2>
      <div className="product-card--details">
      <RatingStars rating={rating} />
        <p>{truncateText(description, 60)}</p>
        <p>Price: {price}</p>
        </div></Link>
        <Link to={`/product/${id}`}><button>View details</button></Link>  
       
    </Card>
  );
}
//img and img alt are not required, but title, description, and price are required
// ProductCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   img: PropTypes.string,
//   alt: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };

export default ProductCard;
