
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useState } from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { setUser, setVerificationWindow } from '../store/authSlice'
import { BASE_URI } from '../config/uri'

const useSignup = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const handleSignupUser = async (inputs, setInputs) => {
        try {
            setLoading(true)
            const res = await axios.post(`${BASE_URI}/api/user/createUser`, {
                username: inputs.name,
                email: inputs.email,
                phone_no: inputs.phone
            })
            if (res?.data) {
                dispatch(setUser(res?.data?.data))
                dispatch(setVerificationWindow("signup"))
                navigation.navigate("otp")
                setInputs({
                    name: "",
                    email: "",
                    phone: ""
                })
            }

        } catch (error) {
            setLoading(false)
            console.log(error?.message);
            Alert.alert(error?.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleSignupUser }
}

export default useSignup

