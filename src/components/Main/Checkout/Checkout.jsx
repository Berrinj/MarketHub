import useCartStore from "../Cart/useCartStore";
import { Link } from "react-router-dom";
import { StyledCheckout, StyledCheckoutUl } from "./Checkout.styles";

function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <StyledCheckout>
      <h1>Checkout</h1>
      <p>Items ready for checkout: {cart.length}</p>
      {cart.length === 0 ? (
        <>
        <p>Uh oh! Your cart is empty</p>
        <Link to="/"><button>Continue shopping</button></Link>
        </>
      ) : (
        <>
        <StyledCheckoutUl>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image.url} alt={item.image.alt} />
              <span>
                <p>{item.price}</p>
              </span>
              <span>
                <p>x {item.quantity}</p>
              </span>
            </li>
          ))}
        </StyledCheckoutUl>
        <p>Total: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
      </>
    )}
    <div className="checkout-buttons">
      <Link to="/checkout-success">{cart.length > 0 && <button className="complete-checkout-btn" onClick={clearCart}>Place Order</button>}</Link>
      <Link to="/cart"><button className="edit-cart-btn">Edit Cart</button></Link>
    </div>
    </StyledCheckout>
  );
}

export default Checkout;