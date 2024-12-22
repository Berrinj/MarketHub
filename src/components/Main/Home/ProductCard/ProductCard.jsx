import { Card } from "./ProductCard.styles.js";
import { Link } from "react-router-dom";
import RatingStars from "../../../RatingStars/RatingStars.jsx";
import Price from "../../../Price/Price";
import PricePercent from "../../../Price/PricePercent.jsx";
// import PropTypes from 'prop-types';

/**
 * 
 * @param {*} text, the description of the product that needs to be truncated
 * @param {*} maxLength 
 * @returns the truncated text of the description if the text length is greater than the maxLength
 */

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + "...";
}

function ProductCard({img, alt, title, rating, reviews, description, price, discountedPrice, id}) {
  return (
    <Card className="product-card">

      <Link to={`/product/${id}`}><img src={img} alt={alt || "Product Image"} className="product-card--img" />
      <PricePercent price={discountedPrice} previousPrice={price}/>

      <h2>{title}</h2>
      <div className="product-card--details">
      <RatingStars rating={rating} reviews={reviews} />
        <p className="product-card--description">{truncateText(description, 60)}</p>
        <Price price={price} discountedPrice={discountedPrice}/>
        </div></Link>
        <Link to={`/product/${id}`}><button>View details</button></Link>  
       
    </Card>
  );
}

export default ProductCard;
