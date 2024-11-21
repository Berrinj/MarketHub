import useCartStore from "../Cart/useCartStore";
import { Link } from "react-router-dom";
import { StyledCheckoutUl } from "./Checkout.styles";

function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <div>
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
              <div>
                <p>{item.title}</p>
              </div>
              <span>
                <p>{item.price}</p>
              </span>
              <span>
                <p>Quantity: {item.quantity}</p>
              </span>
            </li>
          ))}
        </StyledCheckoutUl>
        <p>Total: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
      </>
    )}
      <Link to="/checkout-success">{cart.length > 0 && <button onClick={clearCart}>Checkout</button>}</Link>
      <Link to="/cart"><button>Edit Cart</button></Link>
    </div>
  );
}

export default Checkout;