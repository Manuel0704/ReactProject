import ItemPurchase from "../ItemPurchase/ItemPurchase"
import FormPurchase from "../FormPurchase/FormPurchase"
import { cartContext } from "../CartContext/CartContext"
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./estilos/Purchase.css"

const Purchase = () =>
{
    const {Cart, TotalItems, TotalPrice} = useContext(cartContext);

    return (
        <div className="Purchase">
            {Cart.length > 0
                ?
                <>
                    {Cart.map(prod => <ItemPurchase key={prod.id} product={prod}/>)}
                    <div className="Purchase__totals">
                        <p><b>Cantidad Total:</b> {TotalItems}</p>
                        <p><b>Precio Total:</b> S/{TotalPrice}</p>
                    </div>
                    <FormPurchase/>
                </>
                :
                <div className="Purchase__empty">
                    <p className="Purchase__text">Aún no seleccionaste productos!</p>
                    <Link to={"/"}>Ir al inicio</Link>
                </div>
            }
        </div>)
}

export default Purchase