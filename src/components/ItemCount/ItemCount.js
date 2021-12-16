import {useState} from 'react'
import "./estilos/ItemCount.css"

const Counter = (props) =>
{

    const [counter, setCounter] = useState(props.initial);

    const IncreaseCant = () =>
    {
        if(counter < props.stock)
        {
            console.log("Cantidad incrementada");
            setCounter(counter + 1);
        }
    }

    const DecreaseCant = () =>
    {
        if(counter > 0)
        {
            console.log("Cantidad disminuida");
            setCounter(counter - 1);
        }
    }

    return <div className="ItemCounter">
        <div className="ItemCounter__counter">
            <button onClick={DecreaseCant} type="button" className="btn btn-primary d-flex">
                <box-icon name='minus' color='#ffffff'></box-icon>
            </button>
            <p className="ItemCounter__cant">{counter}</p>
            <button onClick={IncreaseCant} type="button" className="btn btn-primary d-flex">
                <box-icon name='plus' color='#ffffff' ></box-icon>
            </button>
        </div>
    </div>
}

export default Counter;