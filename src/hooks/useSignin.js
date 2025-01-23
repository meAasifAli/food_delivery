
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useState } from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { setOtp, setPhone, setVerificationWindow } from '../store/authSlice'
import { BASE_URI } from '../config/uri'

const useSignin = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const handleSigninUser = async (mobile) => {
        try {
            setLoading(true)
            const res = await axios.post(`${BASE_URI}/api/user/userSendOtp`, {
                phone_no: mobile
            })
            if (res?.data) {
                dispatch(setOtp(res?.data?.otp))
                dispatch(setPhone(mobile))
                dispatch(setVerificationWindow("signin"))
                navigation.navigate("otp")
            }

        } catch (error) {
            setLoading(false)
            console.log(error?.response);
            Alert.alert(error?.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleSigninUser }
}

export default useSignin

