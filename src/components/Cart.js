import { useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ItemList from "./Itemlist";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold text-center">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg "
                    onClick={handleClearCart}>clearCart</button>

                {cartItems.length === 0 && (
                    <h1>Cart is empty.Add items to the cart</h1>
                )}
                <div>
                    <ItemList items={cartItems} />
                </div>
            </div>
        </div>
    );
};
export default Cart;

