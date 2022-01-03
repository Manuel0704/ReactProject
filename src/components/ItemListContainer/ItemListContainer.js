import ItemList from '../ItemList/ItemList'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) =>
{
    const {id} = useParams();

    let [ListArr, setListArr] = useState(undefined);

    console.log("RECARGANDO")
    
    useEffect(() =>
    {
        console.log("RESOLICITANDO")
        setTimeout(() =>
        {
            if (!id)
            {
                fetch("https://rickandmortyapi.com/api/character").then((res) => {return res.json()}).then((res) => {setListArr(res)})                
            }
            else
            {
                fetch(`https://rickandmortyapi.com/api/character/?species=${id}`).then((res) => {return res.json()}).then((res) => {setListArr(res)})
            }
        }, 2000)
    }, [id])

    if (ListArr !== undefined)
    {
        return <div className="ListContainer">
            <div className="ListContainer__title">
                <h2 className="ListContainer__text">{props.greeting}</h2>
            </div>

            <div className="container">
                <ItemList list={ListArr.results}/>
            </div>
        </div>  
    }
    else
    {
        return <div className="ListContainer">
        <div className="ListContainer__title">
            <h2 className="ListContainer__text">{props.greeting}</h2>
        </div>

        <div className="container">
            Esperando...
        </div>
    </div>  

    }
}

export default ItemListContainer;