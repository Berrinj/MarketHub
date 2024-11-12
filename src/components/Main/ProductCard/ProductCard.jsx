import { Card } from "./ProductCard.styles.js";

function ProductCard() {
  return (
    <Card className="product-card">
      <img src="https://via.placeholder.com/200" alt="product" />
      <h2>Product name</h2>
      <p>produc title</p>
    </Card>
  );
}

export default ProductCard;
