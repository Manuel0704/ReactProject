const cardItem = (props) =>
{
    return <div className="card">
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Descripcion del producto en esta card</p>
            <button className="btn btn-primary">Añadir a carrito</button>
        </div>
    </div>
}

export default cardItem;