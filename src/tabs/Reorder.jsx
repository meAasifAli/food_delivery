import { FlatList, Image, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import useGetPastOrders from '../hooks/useGetPastOrders'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useSelector } from 'react-redux'
import PaymentSuccess from '../modals/PaymentSuccess'
import RazorpayCheckout from 'react-native-razorpay'
import { List } from 'react-content-loader/native'
import { LocationContext } from '../context/LocationContext'
import { getFormattedDate } from '../utils/date'


const Reorder = () => {
    const { token, user } = useSelector((state) => state?.auth)
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false)
    const { handleFetchPastOrders, orders } = useGetPastOrders()
    const { offerCode, tipAmt } = useContext(LocationContext)
    useEffect(() => {
        handleFetchPastOrders()
    }, [])
    const handleReorder = async (orderId) => {

        try {
            const res = await axios.post(`${BASE_URI}/api/user/reOrderPayment`, {
                offer_code: offerCode,
                delivery_tip: tipAmt,
                order_id: orderId
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
                    name: user?.username,
                    prefill: {
                        email: 'void@razorpay.com',
                        contact: '9191919191',
                        name: 'Razorpay Software'
                    },
                    theme: { color: '#F37254' },

                }
                RazorpayCheckout.open(options).then(async (data) => {
                    console.log(data?.razorpay_signature);

                    const response = await axios.post(`${BASE_URI}/api/user/verifyReorder`, {
                        razorpay_order_id: res?.data?.order.id, razorpay_payment_id: data?.razorpay_payment_id, razorpay_signature: data?.razorpay_signature
                    })
                    if (response?.data) {
                        setIsPaymentSuccess(pre => !pre)
                    }
                }).catch((error) => {

                    // handle failure
                    console.log("error: ", error?.response?.data?.message);
                    ToastAndroid.show(`Error: ${error?.response?.data?.message}`, ToastAndroid.LONG);
                })
            }
        } catch (error) {
            console.log(error?.message);
            ToastAndroid.show(`Error: ${error?.response?.data?.message}`, ToastAndroid.LONG);
        }
    }




    return (
        <View style={{ padding: 15, flex: 1, backgroundColor: "#fff" }}>
            <View>
                <Text style={{ fontSize: 16, color: "#202020", fontFamily: "OpenSans-Bold" }}>Reorder</Text>
            </View>
            <FlatList
                contentContainerStyle={{ paddingBottom: 50, marginTop: 20 }}
                showsVerticalScrollIndicator={false}
                data={orders}
                keyExtractor={order => order.order_id.toString()}
                ListEmptyComponent={() => (
                    <View style={{ marginTop: 20, flex: 1 }}>
                        <List />
                    </View>
                )}
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
                        marginVertical: 10,
                        paddingVertical: 10
                    }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 14, color: "#202020", fontFamily: "OpenSans-Bold", lineHeight: 25, letterSpacing: 0.1 }}>{item?.restaurant_name}</Text>
                            <View>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <Text style={{ fontSize: 12, color: "#202020", fontFamily: "OpenSans-Medium", lineHeight: 20, letterSpacing: 0.1 }}>Ratings: </Text>
                                    <Text style={{ fontSize: 12, color: "#202020", fontFamily: "OpenSans-Medium", lineHeight: 20, letterSpacing: 0.1 }}>{item?.items[0]?.user_rating}</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, marginTop: -5 }}>
                                    <Text style={{ fontSize: 12, color: "#202020", fontFamily: "OpenSans-Medium", lineHeight: 20, letterSpacing: 0.1 }}>ordered on: </Text>
                                    <Text style={{ fontSize: 12, color: "#202020", fontFamily: "OpenSans-Medium", lineHeight: 20, letterSpacing: 0.1 }}>{getFormattedDate(item?.order_date)}</Text>
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => handleReorder(item?.order_id)} style={{ backgroundColor: "#FA4A0C", height: 30, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 15, marginTop: 5 }}>
                                <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium", fontSize: 12 }}>Order again</Text>
                            </TouchableOpacity>
                            <PaymentSuccess isOpen={isPaymentSuccess} setIsOpen={setIsPaymentSuccess} />

                        </View>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{ width: 100, height: 100, resizeMode: "cover", borderRadius: 15 }} source={{ uri: item?.profile }} />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default Reorder

