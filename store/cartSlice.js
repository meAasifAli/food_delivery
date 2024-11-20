import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URI } from "../config/uri";


const initial = {
    cart: [],
    loading: false,
    error: null
}



export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async ({ token }) => {
    const response = await axios.get(`${BASE_URI}/api/cart/getItems`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response?.data?.rows
})


const cartSlice = createSlice({
    name: "cart",
    initialState: initial,
    reducers: {
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity > 1) {
                item.quantity -= 1
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.loading = false;

                state.cart = action.payload
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action?.payload?.error?.reponse?.data?.message
            })

    }
})

export const { decrementQuantity, incrementQuantity } = cartSlice.actions
export default cartSlice.reducer