import "./estilos/ItemDetail.css"

const ItemDetail = (props) =>
{
    return <div className="Detail">
        <div className="Detail__visual">
            <img className="Detail__image" src={props.obj.image} alt="imagen producto" />
        </div>
        <div className="Detail__data">
            <p>{props.obj.title}</p>
            <p>{props.obj.description}</p>
            <p>{props.obj.price}</p>
        </div>
    </div>
}

export default ItemDetail