import { cartContext } from "../CartContext/CartContext"
import { useContext } from "react";
import "./estilos/ItemPurchase.css"

const ItemPurchase = (props) =>
{
    const {dispatch, types} = useContext(cartContext);

    return (
        <div className="PurchaseItem">
            <h6 className="PurchaseItem__title">{props.product.name}</h6>
            <p className="PurchaseItem__quantity">Cantidad: {props.product.quantity}</p>
            <button onClick={() => {dispatch({type: types.removeItem, payload: props.product})}} className="PurchaseItem__removeButton">Remover del carrito</button>
        </div>
    )
}

export default ItemPurchase