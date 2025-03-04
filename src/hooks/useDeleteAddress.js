import { Alert, ToastAndroid } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSavedAddresses } from '../store/addressSlice'

const useDeleteAddress = () => {
    const { token } = useSelector((state) => state?.auth)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleDeleteAddress = async (addressId) => {
        try {
            setLoading(true)
            await axios.delete(`${BASE_URI}/api/user/deleteAddress/${addressId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            ToastAndroid.show("Address Deleted Successfully", ToastAndroid.LONG)
            dispatch(fetchSavedAddresses({ token }))

        } catch (error) {
            setLoading(false)
            Alert.alert("Error in Deleting the Address: ", error?.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleDeleteAddress }
}

export default useDeleteAddress

