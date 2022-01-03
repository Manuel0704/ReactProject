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
        //EL ERROR ESTA EN EL METODO REMOVE ITEM, HACE EFECTIVAMENTE EL SETCART, SI EMBARGO, NO RE-RENDERIZA EL COMPONENTE A MENOS QUE PONGA DIRECTAMENTE SET CART EN EL COMPONENTE CONSUMER
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