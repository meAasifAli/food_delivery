import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Typography from '../../Typography'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const { height } = Dimensions.get("window")
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import RazorpayCheckout from 'react-native-razorpay'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URI } from '../../../config/uri'
import SwipeButton from 'rn-swipe-button';
import PaymentSuccess from '../../modals/PaymentSuccess'


const GpayBox = () => {
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false)
    const { user, token } = useSelector((state) => state.auth)
    const navigation = useNavigation()

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

                        // Alert.alert("Payment Successful")
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
        <View style={{ padding: 20, width: "95%", marginHorizontal: "auto", height: height * 0.25, borderRadius: 10, backgroundColor: "#FFFFFF", marginHorizontal: "auto", elevation: 1, }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <View>
                        <Image style={{ height: 50, width: 50, resizeMode: "contain" }} source={require("../../../assets/images/gpay.webp")} />
                    </View>
                    <View>
                        <Typography title={"Pay using"} ff={"OpenSans-Regular"} color={"#000"} size={14} lh={19} fw={400} />
                        <Typography title={"Google Pay"} ff={"OpenSans-Bold"} color={"#202020"} size={14} lh={21} fw={600} />
                    </View>
                </View>
                <Pressable onPress={() => navigation.navigate("PaymentOptions")} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                    <Typography title={"Change"} ff={"OpenSans-Regular"} color={"#FA4A0C"} size={hp(2)} lh={hp(2.5)} fw={400} />
                    <IonIcons name='chevron-forward' size={hp(2.5)} color={"#FA4A0C"} />
                </Pressable>
            </View>
            <View style={{ borderStyle: "dashed", borderColor: "#000", borderWidth: 0.50, flex: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0 }}></View>


            <SwipeButton
                containerStyles={{ borderRadius: 25, marginTop: 20 }}
                height={50}
                // onSwipeFail={() => updateSwipeStatusMessage('Incomplete swipe!')}
                // onSwipeStart={() => updateSwipeStatusMessage('Swipe started!')}
                onSwipeSuccess={() => {
                    handleInitiateOrder()
                }}
                railBackgroundColor="#FA4A0C"
                railStyles={{ borderRadius: 25, borderWidth: 0 }}
                thumbIconComponent={CheckoutButton}
                // thumbIconImageSource={arrowRight}
                // thumbIconStyles={{ borderRadius: 5 }}
                // thumbIconWidth={100}
                title="Continue with Gpay"
                titleColor='#fff'
                titleStyles={{ fontFamily: "OpenSans-Semibold" }}

            />
            <PaymentSuccess isOpen={isPaymentSuccess} setIsOpen={setIsPaymentSuccess} />
        </View>
    )
}

export default GpayBox

const styles = StyleSheet.create({})

const CheckoutButton = () => {
    return (
        <View style={{ width: 100, height: "100%", backgroundColor: '#fff', borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
            <Entypo color="#FA4A0C" size={20} name="chevron-right" />
            <View style={{ marginLeft: -15 }}>
                <Entypo color="#FA4A0C" size={25} name="chevron-right" />
            </View>
        </View>
    );
}