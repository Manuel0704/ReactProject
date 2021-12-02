import Card from '../Card/Card'

let imagenes = ["./assets/productos/producto1.jpg",
                "./assets/productos/producto2.jpg",
                "./assets/productos/producto3.jpg"];

const ItemListContainer = (props) =>
{
    return <div className="ListContainer">
        <div className="ListContainer__title">
            <h2 className="ListContainer__text">{props.greeting}</h2>
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <Card title="Producto 1" image={imagenes[0]}/>
                </div>

                <div className="col">
                    <Card title="Producto 2" image={imagenes[1]}/>
                </div>

                <div className="col">
                    <Card title="Producto 3" image={imagenes[2]}/>
                </div>
            </div>
        </div>
    </div>
}

export default ItemListContainer;