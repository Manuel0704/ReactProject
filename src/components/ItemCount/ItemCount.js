import "./estilos/ItemCount.css"

const Counter = (props) =>
{
    return <div className="ItemCounter">
        <div className="ItemCounter__counter">
            <button onClick={() => {props.onReduce(props.val)}} type="button" className="btn btn-primary d-flex">
                <box-icon name='minus' color='#ffffff'></box-icon>
            </button>
            <p className="ItemCounter__cant">{props.val}</p>
            <button onClick={() => {props.onAdd(props.val)}} type="button" className="btn btn-primary d-flex">
                <box-icon name='plus' color='#ffffff' ></box-icon>
            </button>
        </div>
    </div>
}

export default Counter;