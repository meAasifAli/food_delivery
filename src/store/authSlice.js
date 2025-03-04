import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URI } from "../config/uri";

export const getUser = createAsyncThunk('auth/getUser', async ({ token }) => {
    try {
        const response = await axios.get(`${BASE_URI}/api/user/getUserDetails`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data?.userData[0]
    } catch (error) {
        console.log("error in getting user: ", error?.response?.data?.message);
    }


})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        verificationWindow: "signup",
        phone: null,
        otp: null,
        token: null,
        userData: null,
        file: null,
        loading: false
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setAuthenticated(state,) {
            state.isAuthenticated = !state.isAuthenticated
        },
        setVerificationWindow(state, action) {
            state.verificationWindow = action.payload
        },
        setPhone(state, action) {
            state.phone = action.payload
        },
        setOtp(state, action) {
            state.otp = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        setUserData(state, action) {
            state.userData = action.payload
        },
        setFile(state, action) {
            state.file = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false
        })
            .addCase(getUser.rejected, (state, action) => {
                state.user = null
                state.loading = false;
            })
            .addCase(getUser.pending, (state, action) => {
                state.user = null;
                state.loading = true
            })
    }
})

export const { setUser, setAuthenticated, setVerificationWindow, setOtp, setPhone, setToken, setFile } = authSlice.actions;
export default authSlice.reducer;