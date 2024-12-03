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
    city: "",
    district: "",
    state: "",
    postcode: "",
    country: "",
    suburb: "",
    fullAddress: "",
    county: "",
    place: "",
    name: "",
    loading: false,
    savedUserAddresses: []
}

const addressSlice = createSlice({
    name: "address",
    initialState: initial,
    reducers: {
        setAddress: (state, action) => {
            state.city = action.payload.city
            state.district = action.payload.district
            state.state = action.payload.state
            state.postcode = action.payload.postcode
            state.country = action.payload.country
            state.suburb = action.payload.suburb
            state.fullAddress = action.payload.fullAddress
            state.county = action.payload.county
            state.place = action.payload.place
            state.name = action.payload.name
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

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;