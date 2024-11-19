import useCartStore from "./useCartStore";

function AddToCartBtn({ item }) {
    const addToCart = useCartStore((state) => state.addToCart);
    // const currentCart = useCartStore((state) => state.cart);

    // const isInCart = currentCart.some((cartItem) => cartItem.id === item.id);

    const handleAddToCart = () => {
        console.log("Adding to cart:", item);
        addToCart(item);
      };
      return <button onClick={handleAddToCart}>Add to cart</button>;
      // if (!isInCart) {
      //   return <button onClick={handleAddToCart}>Add to cart</button>;
      // } else {
      //   return <button disabled>Already in cart</button>;
      // }
    }

    export default AddToCartBtn;
