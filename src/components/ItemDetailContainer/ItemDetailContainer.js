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
        setTimeout(() => res(getDocs(queryCollection)), 1000))
}

const ItemDetailContainer = () =>
{
    const {id} = useParams();
    const [Item, setItem] = useState(null);
    
    useEffect(() =>
    {
        getItem(parseInt(id))
            .then(val => {return val})
            .then(fu => fu.forEach(i => setItem(i.data())));        
    }, [id])

    return (
        <div className="ItemDetailContainer">
            {Item !== null ? <ItemDetail obj={Item}/> : <p>Esperando...</p>}
        </div>
    )
}

export default ItemDetailContainer;