import { Alert } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'

const useGetBill = () => {
    const { token } = useSelector((state) => state?.auth)
    const [billData, setBillData] = useState(null)
    // console.log(token);

    const [loading, setLoading] = useState(false)
    const handleGetBill = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${BASE_URI}/api/bill/userBill?delivery_tip=0`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                setBillData(res?.data?.data?.bill)
            }

        } catch (error) {
            Alert.alert("Error in bill getting Api", error?.response?.data?.message)
            console.error(error?.response?.data?.message)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleGetBill, billData }
}

export default useGetBill

