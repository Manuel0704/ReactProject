import ItemList from '../ItemList/ItemList'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase/Firebase'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'

const ItemListContainer = (props) =>
{
    const {id} = useParams();
    let [ListArr, setListArr] = useState(undefined);
    
    console.log("RECARGANDO");
    
    useEffect(() =>
    {
        console.log("RESOLICITANDO");
        
        setTimeout(() =>
        {
            let arrItems = [];
            let productos = (id 
                ? query(collection(db, "items"), where("species", "==", id), limit(20)) 
                : query(collection(db, "items"), where("id", "<", 21)))
            let itemsPromise = getDocs(productos);
            itemsPromise
                .then(resultado => resultado.forEach(item => arrItems.push(item.data()))).then(() => setListArr(arrItems));
            itemsPromise
                .catch(() => console.log("ERROR AL TRAER DATOS"));
        }, 1000)

    }, [id])

    return (
        <div className="ListContainer">
            <div className="ListContainer__title">
                <h2 className="ListContainer__text">{props.greeting}</h2>
            </div>
            <div className="container">
                { (ListArr !== undefined) ? <ItemList list={ListArr}/> : <p>Esperando...</p>}
            </div>
        </div>
    )
}

export default ItemListContainer;