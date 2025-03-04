import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URI } from '../config/uri'
import axios from "axios";
import { setAuthenticated, setOtp, setToken, setUser } from "../store/authSlice";
import { Alert } from "react-native";


const useOtp = () => {
    const dispatch = useDispatch()
    const { verificationWindow, user, phone } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)


    const handleVerify = async ({ otp }) => {
        try {
            setLoading(true);
            if (verificationWindow === 'signup') {
                const res = await axios.post(
                    `${BASE_URI}/api/user/userSignUp/${user?.phone_no}/${user?.username}/${user?.email}`,
                    {
                        givenOTP: otp,
                    },
                );
                if (res?.data) {
                    dispatch(setAuthenticated());
                    dispatch(setToken(res?.data?.token));
                    dispatch(setOtp(null))
                }
            }
            if (verificationWindow === 'signin') {
                const res = await axios.post(
                    `${BASE_URI}/api/user/userLogin/${phone}`,
                    {
                        givenOTP: otp,
                    },
                );
                if (res?.data) {
                    dispatch(setAuthenticated());
                    dispatch(setUser(res?.data?.userData));
                    dispatch(setToken(res?.data?.token));
                }
                else {
                    Alert.alert('Something went wrong in login')
                }
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
            setLoading(false);
            Alert.alert(error?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };
    return { handleVerify, loading }
}

export default useOtp

