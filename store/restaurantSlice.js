import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URI } from "../config/uri";


const initialState = {
    topRated: [],
    popular: [],
    nearest: [],
    loading: false,
    error: null,
    restaurant: null
}

export const fetchRestaurants = createAsyncThunk('restaurant/fetchRestaurants', async ({ type }, thunkAPI) => {
    const state = thunkAPI.getState();  // Access the entire Redux state
    const token = state.auth.token;     // Get the token from auth slice
    const response = await axios.get(`${BASE_URI}/api/restaurant/${type}/34.0837/74.7973`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return { type, data: response.data }
})

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                const { type, data } = action.payload;
                state[type] = data.data
                state.loading = false
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export const { setRestaurant } = restaurantSlice.actions

export default restaurantSlice.reducer                                                                                                                                                                                                                                                                          