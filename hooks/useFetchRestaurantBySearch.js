import { Alert, } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'

const usefetchRestaurantBySearch = () => {
    const [loading, setLoading] = useState(false)
    const { token } = useSelector((state) => state?.auth)
    const [searchRestaurants, setSearchRestaurants] = useState([])

    const handleFetchSearchRestaurants = async ({ query }) => {
        try {
            setLoading(true)
            const res = await axios.get(`${BASE_URI}/api/restaurant/category?latitude=34.1200&longitude=74.8200&search=${query}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (res?.data?.status.toLowerCase().trim() === "success") {
                setSearchRestaurants(res?.data?.data);
            }
        } catch (error) {
            setLoading(false)
            console.log(error?.message);

            Alert.alert("Error in fetching Searched Item: ", error?.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleFetchSearchRestaurants, searchRestaurants }
}

export default usefetchRestaurantBySearch

