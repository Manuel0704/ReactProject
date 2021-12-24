import { useState, createContext } from "react";

export const cartContext = createContext();
const {Provider} = cartContext;

const CartContext = ({children}) =>
{
    const [Cart, SetCart] = useState([]);

    const AddItem = (product) =>
    {
        if (IsInCart(product.id) === false) //si no esta en el carrito se agrega al estado Cart
        {
            let newCart = Cart;
            newCart.push(product);
            SetCart(newCart);
        }
        else //si esta, encontramos la ubicacion del producto en el array y aumentamos su cantidad
        {
            let newCart = Cart;
            newCart.forEach( element =>
            {
                if (element.id === product.id) element.quantity += product.quantity
            });
            SetCart(newCart);
        }
    }

    const RemoveItem = (product) =>
    {
        Cart.forEach( iProduct =>
        {
            if (iProduct.id === product.id)
            {
                const idItem = Cart.indexOf(iProduct);
                let newCart = Cart;
                newCart.splice(idItem);
                SetCart(newCart);
            }
        });
    }

    const ClearCart = () =>
    {
        SetCart([]);
    }

    const IsInCart = (pId) =>
    {
        return Cart.some(item => item.id === pId)
    }

    const CartValue = {Cart, AddItem, RemoveItem, ClearCart};

    return (
        <Provider value={CartValue}>
            {children}
        </Provider>
    )
}

export default CartContext