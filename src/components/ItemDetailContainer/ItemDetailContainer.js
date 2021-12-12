import ItemDetail from '../ItemDetail/ItemDetail'
import {useEffect, useState} from 'react'
import "./estilos/ItemDetailContainer.css"


const getItem = () =>
{
    return new Promise((res, rej) => 
    {
        setTimeout(() =>
        {
            if (fetch('https://my-json-server.typicode.com/Manuel0704/MyFakeJSONS/items/1') !== undefined)
            {
                res(fetch('https://my-json-server.typicode.com/Manuel0704/MyFakeJSONS/items/1'));
            }
            else
            {
                rej();
            }
        }, 2000)
    })
}

const ItemDetailContainer = () =>
{
    const [item, setItem] = useState(null);
    
    useEffect(() =>
    {
        getItem()
        .then((res) => {return res.json()})
        .then((json) => setItem(json))
    })

    if (item == null)
    {
        return <div className="ItemDetailContainer">
            <p>Esperando...</p>
        </div>
    }
    else return <div className="ItemDetailContainer">
        <ItemDetail obj={item}/>
    </div>
}

export default ItemDetailContainer;