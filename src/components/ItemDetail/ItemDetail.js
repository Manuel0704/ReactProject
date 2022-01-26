import ItemCount from "../ItemCount/ItemCount"
import "./estilos/ItemDetail.css"
import { useState, useContext } from 'react'
import { cartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({obj}) =>
{
    const [Cant, setCant] = useState(1);
    const [Shown, setShown] = useState(false);
    const {dispatch, types} = useContext(cartContext);

    let objProduct = 
    {
        id: obj.id,
        name: obj.name,
        price: obj.price,
        stock: obj.episode.length,
        quantity: Cant
    };

    return (
    <div className="Detail">
        <div className="Detail__visual">
            <img className="Detail__image" src={obj.image} alt="imagen producto" />
        </div>
        <div className="Detail__data">
            <p className="Detail__title">{obj.name}</p>
            <p>
                {obj.status}<br/>
                {obj.gender}<br/>
                {obj.species}<br/>
            </p>
            <p className="Detail__price"><b>Precio:</b> S/{obj.price}</p>
            <ItemCount
                show={Cant < objProduct.stock ? false : true}
                stock={objProduct.stock}
                val={Cant}
                onAdd={val => setCant(val + 1)}
                onReduce={val => {if (val > 0) {setCant(val - 1)}}}/>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => { dispatch({type: types.addItem, payload: objProduct}); setShown(true); } }>
                Añadir a carrito
            </button>
            <Link type="button" className={Shown? "btn btn-info dark margin10" : "hidden"} to={"/cart"}>
                Ir a carrito
            </Link>
        </div>
    </div>)
}

export default ItemDetail