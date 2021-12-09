import Item from '../Item/Item'

const ItemList = (props) =>
{
    console.log(props.list)
    return <div className="row">
        {props.list.map(i => <Item key={i.id} title={i.title} image={i.image} price={i.price} />)}
    </div>;
}

export default ItemList;