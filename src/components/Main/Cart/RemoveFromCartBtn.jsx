import useCartStore from "./useCartStore";
import { MdDelete } from "react-icons/md";

function RemoveFromCartBtn({ item }) {
    const removeItem = useCartStore((state) => state.removeFromCart);

    const handleRemoveFromcartBtn = () => {
        console.log("Removed from Cart:", item);
        removeItem(item.id);
      };

    return <button onClick={handleRemoveFromcartBtn}><MdDelete>Delete</MdDelete></button>;
    }

    export default RemoveFromCartBtn;