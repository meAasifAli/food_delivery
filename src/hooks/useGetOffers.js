import { Alert, } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'

const useGetOffers = () => {
    const [loading, setLoading] = useState(false)
    const [offers, setOffers] = useState([])
    const { token } = useSelector((state) => state.auth)

    const handleFetchOffers = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${BASE_URI}/api/offers`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setOffers(res?.data?.data);

        } catch (error) {
            setLoading(false)
            Alert.alert("Error: ", error?.response?.data?.message || "Something went wrong")
        }
        finally {
            setLoading(false)
        }
    }
    return { handleFetchOffers, loading, offers }
}

export default useGetOffers

