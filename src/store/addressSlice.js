import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URI } from "../config/uri";


export const fetchSavedAddresses = createAsyncThunk("address/fetchSavedAddresses", async ({ token }) => {
    const response = await axios.get(`${BASE_URI}/api/user/getUserAddresses`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response?.data?.data
})

const initial = {
    address: null,
    loading: false,
    savedUserAddresses: [],
    deliveryBoy: null
}

const addressSlice = createSlice({
    name: "address",
    initialState: initial,
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setDeliveryBoy: (state, action) => {
            state.deliveryBoy = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSavedAddresses.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(fetchSavedAddresses.fulfilled, (state, action) => {
                state.loading = false;
                state.savedUserAddresses = action.payload
            })
            .addCase(fetchSavedAddresses.rejected, (state, action) => {
                state.loading = false;
            })
    }
})

export const { setAddress, setDeliveryBoy } = addressSlice.actions;

export default addressSlice.reducer;