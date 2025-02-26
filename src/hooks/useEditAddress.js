import axios from "axios"
import { useState } from "react"
import { Alert } from "react-native"
import { BASE_URI } from "../config/uri"
import { useDispatch, useSelector } from "react-redux"
import { fetchSavedAddresses } from "../store/addressSlice"


const useEditAddress = () => {
    const { token } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const handleEditAddress = async ({
        state,
        city,
        area,
        house_no,
        lat,
        lon,
        type,
        R_name,
        R_phone_no,
        addressId
    }) => {
        try {
            setLoading(true)
            const res = await axios.patch(`${BASE_URI}/api/user/editAddress/${addressId}`, {
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
            }
        } catch (error) {
            Alert.alert("Error in updating the address: ", error?.response?.data?.message)
            console.log(error?.response?.data?.message);
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleEditAddress }
}

export default useEditAddress

