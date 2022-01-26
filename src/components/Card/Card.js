import {Link} from "react-router-dom";
import "./estilos/Card.css"

const cardItem = (props) =>
{
    return <div className="card border-0">
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">S/{props.price}</p>
            <Link to={`/item/${props.id}`}>
                Ver Detalle
            </Link>
        </div>
    </div>
}

export default cardItem;