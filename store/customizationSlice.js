import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URI } from "../config/uri";

const initialState = {
    customizations: null,
    error: null,
    loading: false
}

export const getCustomizations = createAsyncThunk("customization/getCustomizations", async ({ itemId, token }) => {
    const response = await axios.get(`${BASE_URI}/api/items/customisation/getCustomisation/${itemId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response?.data?.customizations
})

export const getSelectedCustomizations = createAsyncThunk("customization/getSelectedCustomizations", async ({ cartItemId, token }) => {
    const response = await axios.get(`${BASE_URI}/api/items/customisation/getSelectedCustomisation/${cartItemId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response?.data?.data
})

const customizationSlice = createSlice({
    name: "customization",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCustomizations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(getCustomizations.pending, (state) => {
                state.loading = true
            })
            .addCase(getCustomizations.fulfilled, (state, action) => {
                state.loading = false;
                state.customizations = action.payload
            })
            .addCase(getSelectedCustomizations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(getSelectedCustomizations.pending, (state) => {
                state.loading = true
            })
            .addCase(getSelectedCustomizations.fulfilled, (state, action) => {
                state.loading = false;
                state.customizations = action.payload
            })
    }
})

export default customizationSlice.reducer