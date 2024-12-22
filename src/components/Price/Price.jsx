import PricePercent from "./PricePercent";

/**
 * 
 * @param {*} Price
 * @param {*} discountedPrice
 * @description This component is responsible for rendering the price of a product, original price and/or discounted price
 * @returns the Price component
 */

function Price({price, discountedPrice}) {
    if (discountedPrice < price) {
      return (
        <div className="sale-price-container">
          <PricePercent price={discountedPrice} previousPrice={price} />
          <div className="sale-price">
          <p className="price--discount">{discountedPrice}</p>
          <p className="price--original">{price}</p>
          </div>
        </div>
      );
    }
    return <p className="price">{price}</p>;
  }

  export default Price;