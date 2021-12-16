import ItemDetail from '../ItemDetail/ItemDetail'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./estilos/ItemDetailContainer.css"

const getItem = (pId) =>
{
    return new Promise((res, rej) => 
    {
        setTimeout(() =>
        {
            if (fetch(`https://rickandmortyapi.com/api/character/${pId}`) !== undefined)
            {
                res(fetch(`https://rickandmortyapi.com/api/character/${pId}`));
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
    const {id} = useParams();

    const [item, setItem] = useState(null);
    
    useEffect(() =>
    {
        if (!id)
        {
            getItem(1)
            .then((res) => {return res.json()})
            .then((json) => setItem(json))
        }
        else
        {
            console.log(id);
            getItem(id)
            .then((res) => {return res.json()})
            .then((json) => setItem(json))
        }
    }, [id])

    if (item !== null)
        return (
        <div className="ItemDetailContainer">
            <ItemDetail obj={item}/>
        </div>)
    else
        return (
        <div className="ItemDetailContainer">
            <p>Esperando...</p>
        </div>)
}

export default ItemDetailContainer;