import { FaShoppingCart} from 'react-icons/fa'
import './CartWidget.scss'


const CartWidget = () => {

    return (
        <div>
            <FaShoppingCart />
            <span>{4}</span>
        </div>
    )
}

export default CartWidget 