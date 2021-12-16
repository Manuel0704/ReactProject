import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom";

const cardItem = (props) =>
{
    return <div className="card">
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Descripcion del producto en esta card</p>
            <p className="card-text">{props.price}</p>
            <ItemCount stock={10} initial={1}/>
            <Link to={`/item/${props.id}`}>
                Ver Detalle
            </Link>
        </div>
    </div>
}

export default cardItem;