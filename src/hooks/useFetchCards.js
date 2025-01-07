import { Alert } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'

const useFetchCards = () => {
    const { token } = useSelector((state) => state?.auth)
    const [cards, setCards] = useState([])
    const [upis, setUpis] = useState([])
    // console.log(token);

    const [loading, setLoading] = useState(false)
    const handleGetCards = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${BASE_URI}/api/user/fetchPayments`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                setCards(res?.data?.data?.cards)
                setUpis(res?.data?.data?.UPIs)
            }

        } catch (error) {
            Alert.alert("Error in  getting cards and upis", error?.response?.data?.message)
            console.error(error?.response?.data?.message)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleGetCards, cards }
}

export default useFetchCards

