import { Link } from "react-router-dom";
import "./estilos/CartWidget.css"
import { cartContext } from "../CartContext/CartContext"
import { useContext } from "react";

const CartIcon = () =>
{
    const { TotalItems } = useContext(cartContext)

    return (
        <Link className={ TotalItems > 0 ? "CartWidget" : "CartWidget CartWidget--Hidden"} to={"/cart"}>
            <box-icon name='cart' type='solid' color='#ffffff' ></box-icon>
            <span>{TotalItems}</span>
        </Link>
    )
}

export default CartIcon;