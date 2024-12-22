import useCartStore from "./useCartStore";
import { MdDelete } from "react-icons/md";

/**
 * @param {*} item, item to remove from the cart
 * @param {*} className, class name for the button
 * @returns the RemoveFromCartBtn component with the button to remove an item from the cart
 */

function RemoveFromCartBtn({ item, className }) {
    const removeItem = useCartStore((state) => state.removeFromCart);

    const handleRemoveFromcartBtn = () => {
        removeItem(item.id);
      };

    return <button className={className} onClick={handleRemoveFromcartBtn}><MdDelete>Delete</MdDelete></button>;
    }

    export default RemoveFromCartBtn;