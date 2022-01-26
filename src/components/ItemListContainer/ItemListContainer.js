import ItemList from '../ItemList/ItemList'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase/Firebase'
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import "./estilos/ItemListContainer.css"

//*CODIGO UTIL PARA ACTUALIZAR DATOS DE FORMA MASIVA
// const updateDocsFirebase = () =>
// {
//     getDocs(collection(db, "items")).then(resp =>
//     {
//         resp.docs.forEach(doc => updateDoc(doc.ref, { price: Math.floor((Math.random() * 100) + 1) })
//                                      .then(()=>console.log("exito")))
//     })
// }

const ItemListContainer = (props) =>
{
    const {id} = useParams();
    let [ListArr, setListArr] = useState(null);
    
    console.log("RECARGANDO");
    
    useEffect(() =>
    {
        console.log("RESOLICITANDO");
        
        setTimeout(() =>
        {
            let arrItems = [];
            let productos = id 
                ? query(collection(db, "items"), where("species", "==", id), orderBy("id", "asc"), limit(20))
                : query(collection(db, "items"), where("id", "<", 21))
            getDocs(productos)
                .then(res => 
                    {
                        if (!res.empty) return res;
                        else setListArr(false)
                    })
                .then(res => { if (res !== undefined) res.forEach(item => arrItems.push(item.data())) })
                .then(() => { if (arrItems.length > 0) setListArr(arrItems) });
        }, 1000)

    }, [id])

    const GetJSXByListArr = () =>
    {
        if (ListArr === null)
            return (
                <div className="ListContainer__waitingBox">
                    <p className="ListContainer__waitingText">Esperando...</p>
                </div>);
        return !ListArr
        ?
            <div className="ListContainer__errorBox">
                <p className="ListContainer__errorText">No existen los productos!</p>
            </div>
        : 
            <div className="container">
                <ItemList list={ListArr}/>
            </div>
    }

    return (
        <div className="ListContainer">
            <div className="ListContainer__title">
                <h2 className="ListContainer__text">{props.greeting}</h2>
            </div>
            {GetJSXByListArr()}
        </div>
    )
}

export default ItemListContainer;