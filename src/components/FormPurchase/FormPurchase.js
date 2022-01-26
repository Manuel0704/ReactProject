import React, { useState, useContext } from 'react'
import { db } from '../Firebase/Firebase'
import { collection, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { cartContext } from "../CartContext/CartContext"
import "./estilos/FormPurchase.css"

const FormPurchase = () =>
{
    const {Cart, TotalPrice, dispatch, types} = useContext(cartContext);
    const InitialStateOrder =
    {
        buyer: { name: "", phone: 0, email: "" },
        items: Cart,
        total: TotalPrice,
        date: serverTimestamp(),
        state: "generated"
    }
    const collection_orders = collection(db, "orders");
    const [Order, SetOrder] = useState(InitialStateOrder);
    const [VerifEmail, SetVerifEmail] = useState(false);

    const HandleInputChange = (e) =>
    {
        const { name, value } = e.target;
        let tempOrder = Order;
        tempOrder.buyer = {...Order.buyer, [name]:  value};
        SetOrder(tempOrder);
    }

    const CheckEmail = (e) =>
    {
        if (Order.buyer.email === e.target.value)
            SetVerifEmail(true);
        else SetVerifEmail(false);
    }

    const SubmitOrderToFirestore = (e) =>
    {
        e.preventDefault();
        if (VerifEmail)
        {
            addDoc(collection_orders, Order)
                .then(doc => {updateDoc(doc, {id: doc.id}); return doc})
                .then(doc => alert(`TU CODIGO DE COMPRA ES ${doc.id}. GUARDALO BIEN!`));
            SetVerifEmail(false);
            SetOrder(InitialStateOrder);
            dispatch({type: types.clearCart})
        }
        else
            alert("Los email ingresados deben ser iguales");
    }
    
    return (
        <form id='PurchaseForm' className='MiForm' onSubmit={SubmitOrderToFirestore}>
            <p className='MiForm__title'>Formulario</p>
            <div id='field_name' className='MiForm__field'>
                <input required onChange={HandleInputChange} className='MiForm__input' name='name' type="text" placeholder='nombre' />
            </div>
            <div id='field_phone' className='MiForm__field'>
                <input required onChange={HandleInputChange} className='MiForm__input' name='phone' type="number" placeholder='teléfono'/>
            </div>
            <div id='field_email_1' className='MiForm__field'>
                <input required onChange={HandleInputChange} className='MiForm__input' name='email' type="email" placeholder='correo electronico'/>
            </div>
            <div id='field_email_2' className='MiForm__field'>
                <input required onChange={CheckEmail} className='MiForm__input' name='email_check' type="email" placeholder=' confirmar correo electronico'/>
            </div>
            <div id='field_button' className= 'MiForm__field'>
                <button type='submit' className='MiForm__button'>Comprar!</button>
            </div>
        </form>
    )
}

export default FormPurchase
