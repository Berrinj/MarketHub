import useCartStore from "../Cart/useCartStore";
import { Link } from "react-router-dom";

function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <div>
      <h1>Checkout</h1>
      <Link to="/checkout-success">{cart.length > 0 && <button onClick={clearCart}>Checkout</button>}</Link>
    </div>
  );
}

export default Checkout;