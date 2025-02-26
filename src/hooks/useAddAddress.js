import axios from "axios"
import { useState } from "react"
import { Alert } from "react-native"
import { BASE_URI } from "../config/uri"
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { fetchSavedAddresses } from "../store/addressSlice"


const useAddAddress = () => {
    const { token } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const handleAddAddress = async ({
        state,
        city,
        area,
        house_no,
        lat,
        lon,
        type,
        R_name,
        R_phone_no
    }) => {
        try {
            setLoading(true)
            const res = await axios.post(`${BASE_URI}/api/user/addAddress`, {
                state,
                city,
                area,
                house_no,
                lat,
                lon,
                type,
                R_name,
                R_phone_no
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (res.data) {
                dispatch(fetchSavedAddresses({ token }))
                navigation.navigate("AddAddress")
            }
        } catch (error) {
            Alert.alert("Error in adding the address: ", error?.response?.data?.message)
            console.log(error?.response?.data?.message);
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleAddAddress }
}

export default useAddAddress

