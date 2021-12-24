import { cartContext } from "../CartContext/CartContext"
import { useContext } from "react";

const Purchase = () =>
{
    const cartPurchase = useContext(cartContext);

    console.log(cartPurchase.Cart);

    return  <div>
        Componente vacio
    </div>
}

export default Purchase