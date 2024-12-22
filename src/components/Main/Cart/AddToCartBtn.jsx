import useCartStore from "./useCartStore";

/**
 * @param {*} item, item to add to the cart
 * @returns the AddToCartBtn component with the button to add an item to the cart
 */

function AddToCartBtn({ item }) {
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        addToCart(item);
      };
      return <button onClick={handleAddToCart}>Add to cart</button>;
    }

    export default AddToCartBtn;
