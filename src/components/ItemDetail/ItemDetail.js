import "./estilos/ItemDetail.css"

const ItemDetail = (props) =>
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
        </div>
    </div>
}

export default ItemDetail