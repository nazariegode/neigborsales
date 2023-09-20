import { FiShoppingCart } from "react-icons/fi";
import './CartWidget.scss';

const CartWidget = () => {
    return (
        <div>
            <FiShoppingCart className="custom-cart-icon" />
            <span>{4}</span>
        </div>
    );
}

export default CartWidget;
