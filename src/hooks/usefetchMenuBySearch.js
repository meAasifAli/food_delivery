import { Alert } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'

const usefetchMenuBySearch = () => {
    const [loading, setLoading] = useState(false)
    const { token } = useSelector((state) => state?.auth)
    const [searchMenuItems, setSearchMenuItems] = useState([])
    const handleFetchSearchItems = async ({ query, restaurantId }) => {
        try {
            setLoading(true)
            const res = await axios.get(`${BASE_URI}/api/menu/getItemsBySearch/${restaurantId}?search=${query}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (res?.data?.status.toLowerCase().trim() === "success") {
                setSearchMenuItems(res?.data?.data);
            }
        } catch (error) {
            setLoading(false)
            Alert.alert("Error in fetching Searched Item: ", error?.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleFetchSearchItems, searchMenuItems }
}

export default usefetchMenuBySearch

