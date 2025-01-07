import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useGetPastOrders from '../hooks/useGetPastOrders'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'
import PaymentSuccess from '../components/modals/PaymentSuccess'
import RazorpayCheckout from 'react-native-razorpay'


const Reorder = () => {
    const { token, user } = useSelector((state) => state?.auth)
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false)
    const { loading, handleFetchPastOrders, orders } = useGetPastOrders()
    useEffect(() => {
        handleFetchPastOrders()
    }, [])
    const handleInitiateOrder = async () => {

        try {
            const res = await axios.post(`${BASE_URI}/api/user/orderPayment`, {
                // "offer_code": "WELCOME20",
                "delivery_tip": 0
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (res?.data) {
                console.log(res?.data);

                var options = {
                    description: 'Credits towards consultation',
                    image: 'https://i.imgur.com/3g7nmJC.png',
                    currency: 'INR',
                    key: 'rzp_test_TUB0CIJ5ZVOxE2', // Your api key
                    amount: res?.data?.order?.amount,
                    order_id: res?.data?.order?.id,
                    name: user?.username, // Replace this with an order_id created using Orders API.
                    prefill: {
                        email: 'void@razorpay.com',
                        contact: '9191919191',
                        name: 'Razorpay Software'
                    },
                    theme: { color: '#F37254' },

                }
                RazorpayCheckout.open(options).then(async (data) => {
                    console.log(data?.razorpay_signature);

                    const response = await axios.post(`${BASE_URI}/api/user/verifyPayment`, {
                        razorpay_order_id: res?.data?.order.id, razorpay_payment_id: data?.razorpay_payment_id, razorpay_signature: data?.razorpay_signature
                    })
                    if (response?.data) {
                        setIsPaymentSuccess(pre => !pre)
                    }
                }).catch((error) => {

                    // handle failure
                    console.log("error: ", error?.response?.data?.message);
                    Alert.alert(`Error: ${error?.response?.data?.message}`);
                })
            }
        } catch (error) {
            console.log(error?.message);

            Alert.alert("Error in initiating the order: ", error?.response.data?.message)
        }
    }

    return (
        <View style={{ padding: 15, flex: 1, backgroundColor: "#fff" }}>
            <View>
                <Text style={{ fontSize: 16, color: "#202020", fontFamily: "OpenSans-Bold" }}>Reorder</Text>
            </View>
            <FlatList
                data={orders}
                keyExtractor={order => order.order_id.toString()}
                renderItem={({ item }) => (
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: 15,
                        backgroundColor: "#fff",
                        borderLeftColor: "#FA4A0C",
                        borderLeftWidth: 1,
                        elevation: 2,
                        shadowColor: "#FA4A0C",
                        shadowOpacity: 0.1,
                        shadowOffset: { width: 0, height: 0 },
                        shadowRadius: 10,
                        marginVertical: 10
                    }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 14, color: "#202020", fontFamily: "OpenSans-Bold", lineHeight: 25, letterSpacing: 0.1 }}>{item?.restaurant_name}</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <Text style={{ fontSize: 12, color: "#202020", fontFamily: "OpenSans-Regular", lineHeight: 20, letterSpacing: 0.1 }}>Ratings</Text>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                    <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                                    <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                                    <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={handleInitiateOrder} style={{ backgroundColor: "#FA4A0C", height: 25, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 15, marginTop: 5 }}>
                                    <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium", fontSize: 12 }}>Order again</Text>
                                </TouchableOpacity>
                                <PaymentSuccess isOpen={isPaymentSuccess} setIsOpen={setIsPaymentSuccess} />
                            </View>
                        </View>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={require("../assets/images/burgers.png")} />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default Reorder

const styles = StyleSheet.create({})