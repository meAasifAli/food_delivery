import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URI } from "../config/uri";
import Toast from "react-native-toast-message";


const initial = {
    cart: [],
    loading: false,
    error: null,
    billData: null,
    billError: null,
    billLoading: false,
    billError: null,
    offers: [],
    offerLoading: false,
}


export const fetchOffers = createAsyncThunk('cart/fetchOffers', async () => {
    const response = await axios.get(`${BASE_URI}/api/offers`)
    return response?.data?.data
})


export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async ({ token }) => {
    const response = await axios.get(`${BASE_URI}/api/cart/getItems`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response?.data?.data
})


export const fetchBill = createAsyncThunk('cart/fetchBill', async ({ token, tip, code }) => {
    try {
        const response = await axios.get(`${BASE_URI}/api/bill/userBill?delivery_tip=${tip}&offer_code=${code}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response?.data?.data?.bill
    } catch (error) {
        const errorMessage = error?.response?.data?.message || "Something went wrong";

        Toast.show({
            type: "error",
            text1: "error in fetching the Bill:",
            text2: error?.response?.data?.message,
            visibilityTime: 3000
        })
        console.log("Error fetching bill:", errorMessage);

        return rejectWithValue(errorMessage);
    }
})



const cartSlice = createSlice({
    name: "cart",
    initialState: initial,
    reducers: {

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
            .addCase(fetchBill.pending, (state, action) => {
                state.billLoading = true;
                state.billError = null;
            })
            .addCase(fetchBill.fulfilled, (state, action) => {
                state.billLoading = false;
                state.billData = action.payload
            })
            .addCase(fetchBill.rejected, (state, action) => {
                state.billLoading = false;
                state.billError = action.payload;
            })
            .addCase(fetchOffers.fulfilled, (state, action) => {
                state.offers = action.payload
                state.offerLoading = false
            })
            .addCase(fetchOffers.rejected, (state, action) => {
                state.offerLoading = false
            })
            .addCase(fetchOffers.pending, (state, action) => {
                state.offerLoading = true
            })

    }
})


export default cartSlice.reducer