import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useSelector } from "react-redux"
import { PURGE } from "redux-persist"

const initialState = {
    allProduct: []
}

const URL = 'https://fakestoreapi.com/products/'

export const getProduct = createAsyncThunk(
    'product/getProduct', async () => {
        try {
            response = await axios.get(`${URL}`)
            return response
        }
        catch (error) {
            return error
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProduct?.pending, (state) => {
            state.allProduct = null
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.allProduct = action.payload.data
        });
        builder.addCase(getProduct.rejected, (state, action) => {
            state.allProduct = null
        })
        builder.addCase(PURGE, () => initialState)
    }
})
export default productSlice.reducer;

export const { } = productSlice.actions;

export const productSelector = () => {
    const allProduct = useSelector(state => state.product.allProduct);
    return {
        allProduct
    }
}