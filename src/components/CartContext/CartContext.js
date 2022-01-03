import { createContext, useReducer } from "react";

const cartContext = createContext();
const {Provider} = cartContext;

const types =
{
    addItem: 'addItem',
    removeItem: 'removeItem',
    clearCart: 'clearCart',
}

const reducer = (state, action) =>
{
    let newState = state;

    switch (action.type)
    {
        case types.addItem:
            if (state.some(item => item.id === action.payload.id) === false) //si no esta en el carrito se agrega al estado Cart
                return [...newState, action.payload];
            else //si esta, encontramos la ubicacion del producto en el array y aumentamos su cantidad
            {
                newState[newState.findIndex(item => item.id === action.payload.id)].quantity += action.payload.quantity;
                return newState;
            }

        case types.removeItem:
            newState = state.filter(item => item.id !== action.payload.id);
            return newState;

        case types.clearCart:
            return [];

        default:
            return state;
    }
}

const CartContext = ({children}) =>
{
    const [Cart, dispatch] = useReducer(reducer, []);

    let TotalItems = 0;
    Cart.forEach(item => TotalItems += item.quantity);

    const CartValue = {Cart, TotalItems, dispatch, types};

    return (
        <Provider value={CartValue}>
            {children}
        </Provider>
    )
}

export {cartContext};
export default CartContext;