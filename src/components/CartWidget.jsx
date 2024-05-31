import { Link } from "react-router-dom";
import cart from "../assets/img/cart.svg"
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {getCountProducts} = useContext(CartContext);

    if (getCountProducts() > 0) {
        return (
            <Link to={"/cart"} className="btn btn-light position-relative">
            <img src={cart} alt="carrito de compras" width={32}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {getCountProducts()}
            </span>
            </Link>
        )
    }
}

export default CartWidget;