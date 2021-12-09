import Card from '../Card/Card'

const Item = (props) =>
{
    return <div className='col'>
        <Card title={props.title} image={props.image} price={props.price}/>
    </div>
}

export default Item