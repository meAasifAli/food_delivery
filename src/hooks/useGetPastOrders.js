import { Alert, } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'

const useGetPastOrders = () => {
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const { token } = useSelector((state) => state.auth)

    const handleFetchPastOrders = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${BASE_URI}/api/orders/getPastOrders`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setOrders(res?.data?.data);

        } catch (error) {
            setLoading(false)
            Alert.alert("Error: ", error?.response?.data?.message || "Something went wrong")
        }
        finally {
            setLoading(false)
        }
    }
    return { handleFetchPastOrders, loading, orders }
}

export default useGetPastOrders

