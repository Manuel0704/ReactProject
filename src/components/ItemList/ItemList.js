import Item from '../Item/Item'

const ItemList = (props) =>
{
    return <div className="row">
        {props.list.map(i => <Item key={i.id} id={i.id} title={i.name} image={i.image} price={5} />)}
    </div>
}

export default ItemList;