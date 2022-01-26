import ItemDetail from '../ItemDetail/ItemDetail'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase/Firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import "./estilos/ItemDetailContainer.css"

const getItem = (pId) =>
{
    const queryCollection = query(collection(db, "items"), where("id", "==" , pId));
    return new Promise ((res, rej) =>
        setTimeout(() =>
        {
            getDocs(queryCollection)
                .then(suc => res(suc))
                .catch(err => rej(err))
        }, 1000))
}

const ItemDetailContainer = () =>
{
    const {id} = useParams();
    const [Item, setItem] = useState(null);
    
    useEffect(() =>
    {
        getItem(parseInt(id))
            .then(val =>
            {
                if(!val.empty) return val;
                else setItem(false);
            })
            .then(val => { if (val !== undefined) val.forEach(i => setItem(i.data())) } )
    }, [id])

    const GetJSXByItem = () =>
    {
        if (Item === null)
            return (
                <div className="ItemDetailContainer__waitingBox">
                    <p className="ItemDetailContainer__waitingText">Esperando...</p>
                </div>)
        return !Item
        ?
            <div className="ItemDetailContainer__errorBox">
                <p className="ItemDetailContainer__errorText">No existe el producto!</p>
            </div>
        : <ItemDetail obj={Item}/>
    }

    return (
        <div className="ItemDetailContainer">
            {GetJSXByItem()}
        </div>
    )
}

export default ItemDetailContainer;