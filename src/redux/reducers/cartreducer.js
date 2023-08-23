import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";

const initialState = {
    myCart: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setAddToCart(state, action) {
            state.myCart = action.payload
        },
        // removeFromCart(state, action) {
        //     const itemId = action.payload;
        //     state.myCart = state.myCart.filter(item => item.id !== itemId);
        // }
    }
})

export const { setAddToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const cartSelector = () => {
    const myCart = useSelector(state => state.cart.myCart)
    return { myCart }
}