import ItemList from '../ItemList/ItemList'
import {useEffect, useState} from 'react'

const ItemListContainer = (props) =>
{
    let [ListArr, setListArr]= useState([])

    let preArrList = [
        {id: 1,title:"Item1", image:"./assets/productos/producto1.jpg", price:"S/15.00"},
        {id: 2,title:"Item2", image:"./assets/productos/producto2.jpg", price:"S/25.00"},
        {id: 3,title:"Item3", image:"./assets/productos/producto3.jpg", price:"S/86.00"}]

    useEffect(() =>
    {
        const prom = new Promise((res, rej) =>
        {
            setTimeout(()=>
            {
                if(preArrList !== undefined)
                    res()
                else
                    rej()
            }, 2000)
        })
        prom
            .then(()=>
            {
                setListArr(preArrList);
            })
            .catch(()=>
            {
                setListArr([]);
            })
    })


    return <div className="ListContainer">
        <div className="ListContainer__title">
            <h2 className="ListContainer__text">{props.greeting}</h2>
        </div>

        <div className="container">
            <ItemList list={ListArr}/>
        </div>
    </div>
}

export default ItemListContainer;