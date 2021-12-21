import ItemCount from "../ItemCount/ItemCount"
import "./estilos/ItemDetail.css"
import { useState } from 'react'
import { Link } from "react-router-dom"
const ItemDetail = (props) =>
{
    const [Cant, setCant] = useState(1)    

    if (Cant<=5)
    {
        return <div className="Detail">
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
                <ItemCount stock={5} val={Cant} onAdd={val => setCant(val + 1)} onReduce={val => setCant(val - 1)}/>
                <Link to={"/item/cart"}>Comprar</Link>
            </div>
        </div>
    }
    else
    {
        return <div className="Detail">
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
            <Link to={"/cart"}>Comprar</Link>
        </div>
    </div>        
    }

}

export default ItemDetail