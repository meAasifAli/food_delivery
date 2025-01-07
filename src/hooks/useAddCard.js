import { Alert } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'


const useAddCard = () => {
    const { token } = useSelector((state) => state?.auth)
    const [loading, setLoading] = useState(false)

    const handleAddCard = async ({ card_no,
        valid,
        cvv,
        name_on_card,
        nick_name }) => {
        try {
            setLoading(true)
            const res = await axios.post(`${BASE_URI}/api/user/addCard`,
                {
                    card_no,
                    valid,
                    cvv,
                    name_on_card,
                    nick_name
                }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                Alert.alert("Card Added Successfully")
            }
        } catch (error) {
            setLoading(false)
            Alert.alert("Error in Adding Card: ", error?.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleAddCard }
}

export default useAddCard

