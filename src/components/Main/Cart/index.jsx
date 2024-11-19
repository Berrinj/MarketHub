// import { shallow } from 'zustand/shallow';
import useCartStore from './useCartStore';
import RemoveFromCartBtn from './RemoveFromCartBtn';
import { Link } from 'react-router-dom';

function Cart() {
  const count = useCartStore((state) => state.count);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const {decreaseQuantity, increaseQuantity, getTotalCost} = useCartStore();

  // const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
  // const total = cartTotal.toFixed(2);
  // console.log(total);

  const totalCost = getTotalCost().toFixed(2);

  return (
    <div className="cart-items">
      <h1>Cart</h1>
      <p>Items in your cart: {count}</p>
      {cart.length === 0 ? (<p className="empty-cart">Your cart is empty</p>) : (
<ul>
        {cart.map((item) => (
          <>
          <li key={item.id}>
          <Link to={`/product/${item.id}`}>
            <img src={item.image.url} alt={item.image.alt} />
            </Link>
            <div className="cart-item-details">
            <p>{item.title}</p>
            </div>
            <span><p>{item.price}</p></span>
            <div>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </div>
            <span>Subtotal: {(item.price * item.quantity).toFixed(2)}</span>
            <div>
            <RemoveFromCartBtn item={item} />
            </div>
          </li>
          </>
        ))}
        {/* <p>Item total: {total}</p> */}
      </ul>
      )}
      {cart.length > 0 && <p>Total: {totalCost}</p>}
      <Link to="/checkout-success">{cart.length > 0 && <button onClick={clearCart}>Checkout</button>}</Link>
      <Link to={"/"}><button>Continue shopping</button></Link>
      {cart.length > 0 && <button onClick={clearCart}>Clear cart</button>}
      
    </div>
  )
}
export default Cart;

/* Cart tutorial: https://www.youtube.com/watch?v=TriavSbS5Wg */ 