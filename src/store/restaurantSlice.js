import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URI } from "../config/uri";
import { Alert } from "react-native";

const initialState = {
    topRated: [],
    popular: [],
    nearest: [],
    loading: false,
    error: null,
    restaurant: null
};

// Fix: Pass location as an argument instead of using useContext
export const fetchRestaurants = createAsyncThunk(
    "restaurant/fetchRestaurants",
    async ({ type, location }, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        try {
            const response = await axios.get(
                `${BASE_URI}/api/restaurant/${type}/34.074744/74.820444`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return { type, data: response.data };
        } catch (error) {
            console.error("Error in getting restaurants:", error?.response?.data?.message);
            // Alert.alert("Error in getting restaurants:", error?.response?.data?.message);
            // Fix: Improved error handling
            return thunkAPI.rejectWithValue(
                error.message || "Something went wrong while fetching restaurants."
            );
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
                const { type, data } = action.payload;
                state[type] = data.data;
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
