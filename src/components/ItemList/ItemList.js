import Card from '../Card/Card'

const ItemList = (props) =>
{
    return <div className="row">
        {
            props.list.map(i => 
                <div className='col-3' key={i.id}>
                    <Card key={i.id} id={i.id} title={i.name} image={i.image} price={i.price}/>
                </div>)
        }
    </div>
}

export default ItemList;