import { Alert, Dimensions, View } from 'react-native'
import React, { useState } from 'react'
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


const Payment = () => {
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
                    key: 'rzp_test_TUB0CIJ5ZVOxE2',
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
        <View style={{ padding: 20, width: "95%", marginHorizontal: "auto", borderRadius: 10, backgroundColor: "#FFFFFF", marginHorizontal: "auto", elevation: 1, }}>



            <SwipeButton
                containerStyles={{ borderRadius: 30 }}
                height={60}
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
                title="Continue to Checkout"
                titleColor='#fff'
                titleStyles={{ fontFamily: "OpenSans-Semibold" }}

            />
            <PaymentSuccess isOpen={isPaymentSuccess} setIsOpen={setIsPaymentSuccess} />
        </View>
    )
}

export default Payment


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