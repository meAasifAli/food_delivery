
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'


const usefetchRestaurantBySearch = () => {
    // const {location} = useContext(LocationContext)
    const [loading, setLoading] = useState(false)
    const { token } = useSelector((state) => state?.auth)
    const [searchRestaurants, setSearchRestaurants] = useState([])


    const handleFetchSearchRestaurants = async ({ query, latitude, longitude }) => {
        try {
            setLoading(true)

            const res = await axios.get(`${BASE_URI}/api/restaurant/category?latitude=${latitude}&longitude=${longitude}&search=${query}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                setSearchRestaurants(res?.data?.data);
            }

        } catch (error) {
            setLoading(false)
            console.log(error?.response);

            // Alert.alert("Error in fetching Searched Item: ", error?.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleFetchSearchRestaurants, searchRestaurants }
}

export default usefetchRestaurantBySearch

