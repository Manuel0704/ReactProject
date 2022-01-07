import ItemCount from "../ItemCount/ItemCount"
import "./estilos/ItemDetail.css"
import { useState, useContext } from 'react'
import { cartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = (props) =>
{
    const [Cant, setCant] = useState(1);
    const {dispatch, types} = useContext(cartContext);

    let objProduct = 
    {
        id: props.obj.id,
        name: props.obj.name,
        price: props.obj.episode.length,
        stock: props.obj.episode.length,
        quantity: Cant
    };

    const IncreaseCant = (val) =>
    {
        setCant(val + 1);
    }

    const DecreaseCant = (val) =>
    {
        if (val > 0)
            setCant(val - 1);
    }

    return (
    <div className="Detail">
        <div className="Detail__visual">
            <img className="Detail__image" src={props.obj.image} alt="imagen producto" />
        </div>
        <div className="Detail__data">
            <p>{props.obj.name}</p>
            <p>
                {props.obj.status}<br/>
                {props.obj.gender}<br/>
                {props.obj.species}<br/>
            </p>
            <p>{props.obj.episode.length}</p>
            <ItemCount
                show={Cant < objProduct.stock ? false : true}
                stock={objProduct.stock}
                val={Cant}
                onAdd={val => IncreaseCant(val)}
                onReduce={val => DecreaseCant(val)}/>
            <Link
                to={"/item/cart"}
                onClick={() => dispatch({type: types.addItem, payload: objProduct})}>
                Comprar
            </Link>
        </div>
    </div>)
}

export default ItemDetail