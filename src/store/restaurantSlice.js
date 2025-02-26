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
};


export const fetchRestaurants = createAsyncThunk(
    "restaurant/fetchRestaurants",
    async ({ type, latitude, longitude }, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        try {
            const response = await axios.get(
                `${BASE_URI}/api/restaurant/${type}/${latitude}/${longitude}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return { type, data: response?.data?.data };
        } catch (error) {
            // console.error("Error in getting restaurants:", error?.response?.data?.message);
            // Alert.alert("Error in getting restaurants:", error?.response?.data?.message);
            // Fix: Improved error handling
            // return thunkAPI.rejectWithValue(
            //     error.message || "Something went wrong while fetching restaurants."
            // );
        }
    }
);

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                if (!action.payload) return;
                const { type, data } = action.payload;
                state[type] = data;
                state.loading = false;
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch restaurants";
            });
    },
});

export const { setRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
