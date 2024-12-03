import axios from "axios"
import { useState } from "react"
import { Alert } from "react-native"
import { BASE_URI } from "../config/uri"
import { useSelector } from "react-redux"


const useAddAddress = () => {
    const { token } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)
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
                Alert.alert("Your Address has been Added")
            }
        } catch (error) {
            Alert.alert("Error in adding the address: ", error?.message)
            console.log(error?.message);
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleAddAddress }
}

export default useAddAddress

