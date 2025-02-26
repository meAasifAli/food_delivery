import axios from 'axios'
import { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'
const RateFood = ({ isOpen, setIsOpen, id }) => {
    const [ratingCount, setRatingCount] = useState(0)
    const { token } = useSelector((state) => state?.auth)

    const onRateFood = async () => {
        try {
            const response = await axios.post(`${BASE_URI}/api/user/rateItem`, {
                order_id: id,
                ratings: ratingCount.toString()
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response?.data) {
                setIsOpen(false)
            }
        } catch (error) {
            Alert.alert("Error in rating the food", error?.response?.data?.message)
        }
    }


    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(false)}
        >
            <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10, alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontFamily: "OpenSans-Bold", color: "#202020", textAlign: "center" }}>Rate Food</Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    {[...Array(5)].map((_, i) => {
                        return (
                            <TouchableOpacity key={i} onPress={() => setRatingCount(i + 1)}>
                                <Text style={{ fontSize: 30, fontFamily: "OpenSans-Bold", color: i < ratingCount ? "#FFC107" : "#202020" }}>★</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <TouchableOpacity onPress={onRateFood} style={{ backgroundColor: "#FA4A0C", padding: 10, borderRadius: 10, marginTop: 20, width: "100%" }}>
                    <Text style={{ fontSize: 16, fontFamily: "OpenSans-Bold", color: "#fff", textAlign: "center" }}>Rate</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default RateFood

const styles = StyleSheet.create({})