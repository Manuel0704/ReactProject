import ItemPurchase from "../ItemPurchase/ItemPurchase"
import { cartContext } from "../CartContext/CartContext"
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./estilos/Purchase.css"

const Purchase = () =>
{
    const {Cart} = useContext(cartContext);

    console.log("Render");

    return (
        <div className="Purchase">
            {Cart.length > 0
                ?
                Cart.map(prod => <ItemPurchase key={prod.id} product={prod}/>)
                :
                <div className="Purchase__empty">
                    <p className="Purchase__text">Aún no seleccionaste productos!</p>
                    <Link to={"/"}>Ir al inicio</Link>
                </div>
            }
        </div>)
}

export default Purchase