// import { shallow } from 'zustand/shallow';
import useCartStore from './useCartStore';
import RemoveFromCartBtn from './RemoveFromCartBtn';
import { Link } from 'react-router-dom';
import StyledCart from './Cart.styles';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const TrashCan = styled(MdDelete)`
    font-size: 1rem;
    color: #fff;
    `;

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
    <StyledCart>
      <div>
      <h1 className="cart-header">Cart</h1>
      <p>Items in your cart: {count}</p>
      </div>
      {cart.length === 0 ? (<p className="empty-cart">Your cart is empty</p>) : (
<ul>
        {cart.map((item) => (
          <li key={item.id}>
          <Link to={`/product/${item.id}`}>
            <img src={item.image.url} alt={item.image.alt} />
            </Link>
            <div className="cart-item-details">
            <div className="cart-item-title-price-quantity">    
            <p className="cart-item-title">{item.title}</p>
            <span><p>{item.price}</p></span>
            <div className="cart-item-quantity">
              {item.quantity === 1 ? (<button className="decrease-btn" onClick={() => decreaseQuantity(item.id)}><TrashCan></TrashCan></button>) : (
            <button className="decrease-btn" onClick={() => decreaseQuantity(item.id)}>-</button>)}
            <span>{item.quantity}</span>
            <button className="increase-btn" onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            </div>
            <div className="cart-item-sum-del">
            <span>Subtotal: {(item.price * item.quantity).toFixed(2)}</span>
            <div>
            <RemoveFromCartBtn item={item} className="cart-item-delete" />
            </div>
            </div>
            </div>
          </li>
        ))}
      </ul>
      )}
      {cart.length > 0 && <p className="cart-total">Total: {totalCost}</p>}
        <div className="cart-buttons">
          <div className="cart-buttons-checkout">
            <Link to="/checkout">{cart.length > 0 && <button>Go to Checkout</button>}</Link>
          </div>  
          <Link to={"/"}><button>Continue shopping</button></Link>
          {cart.length > 0 && <button className="clear-cart-btn" onClick={clearCart}>Clear cart</button>}
        </div>
      
    </StyledCart>
  )
}
export default Cart;

/* Cart tutorial: https://www.youtube.com/watch?v=TriavSbS5Wg */ 