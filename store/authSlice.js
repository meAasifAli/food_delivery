import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        otp: null,
        isAuthenticated: false
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload.data,
                state.otp = action.payload.otp
        },
        setAuthenticated(state, action) {
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})

export const { setUser, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;