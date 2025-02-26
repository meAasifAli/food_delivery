import { ToastAndroid, View } from 'react-native'
import React, { useState, useContext } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import RazorpayCheckout from 'react-native-razorpay'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URI } from '../../../config/uri'
import SwipeButton from 'rn-swipe-button';
import PaymentSuccess from '../../../modals/PaymentSuccess'
import { useSocket } from '../../../context/SocketContext'
import { LocationContext } from '../../../context/LocationContext'


const Payment = () => {
    const { offerCode, tipAmt } = useContext(LocationContext)
    const [resetKey, setResetKey] = useState(0);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false)
    const { token } = useSelector((state) => state.auth)
    const socket = useSocket()






    const handleInitiateOrder = async () => {
        try {
            const res = await axios.post(
                `${BASE_URI}/api/user/orderPayment`,
                {
                    delivery_tip: tipAmt,
                    offer_code: offerCode,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const order = res?.data?.order;
            if (!order) {
                throw new Error("Failed to retrieve order details.");
            }

            const options = {
                description: "Credits towards consultation",
                image: "https://i.imgur.com/3g7nmJC.png",
                currency: "INR",
                key: "rzp_test_TUB0CIJ5ZVOxE2",
                amount: order.amount,
                order_id: order.id,
                name: "Food Kart LTD.",
                prefill: {
                    email: "void@razorpay.com",
                    contact: "9191919191",
                    name: "Razorpay Software",
                },
                theme: { color: "#FA4A0C" },
            };

            // Open Razorpay Checkout
            RazorpayCheckout.open(options)
                .then(async (data) => {
                    try {
                        const response = await axios.post(
                            `${BASE_URI}/api/user/verifyPayment`,
                            {
                                razorpay_order_id: order.id,
                                razorpay_payment_id: data?.razorpay_payment_id,
                                razorpay_signature: data?.razorpay_signature,
                            }
                        );

                        if (response?.data) {
                            setIsPaymentSuccess(true);

                            if (socket) {
                                socket.connect();
                                socket.emit("userConnect");
                                console.log("✅ Payment Successful & Socket Reconnected");
                                setResetKey((prevKey) => prevKey + 1);
                            }
                        }
                    } catch (error) {
                        handleError(error, "Payment verification failed");
                    }
                })
                .catch((error) => handleError(error, "Payment failed"));

        } catch (error) {
            handleError(error, "Order initiation failed");
        }
    };

    // Generic error handler function
    const handleError = (error, defaultMessage) => {
        const errorMessage = error?.response?.data?.message || error?.message || defaultMessage;
        console.log("❌ Error: ", errorMessage);
        ToastAndroid.showWithGravity(`Error: ${errorMessage}`, ToastAndroid.TOP, ToastAndroid.LONG);
    };

    return (
        <View style={{ padding: 20, width: "95%", marginHorizontal: "auto", borderRadius: 10, backgroundColor: "#FFFFFF", marginHorizontal: "auto", elevation: 1, }}>
            <SwipeButton
                key={resetKey}
                containerStyles={{ borderRadius: 30, borderWidth: 0, elevation: 2, }}
                height={60}
                // onSwipeFail={() => updateSwipeStatusMessage('Incomplete swipe!')}
                // onSwipeStart={() => updateSwipeStatusMessage('Swipe started!')}
                onSwipeSuccess={() => {
                    handleInitiateOrder()
                }}
                railBackgroundColor="#FA4A0C"
                railStyles={{ borderRadius: 25, borderWidth: 0, borderColor: "#FA4A0C" }}
                thumbIconComponent={CheckoutButton}
                // thumbIconImageSource={arrowRight}
                thumbIconStyles={{ borderWidth: 0 }}
                // thumbIconWidth={100}
                title="Continue to Checkout"
                titleColor='#fff'
                titleStyles={{ fontFamily: "OpenSans-SemiBold", textAlign: "center", marginLeft: 10, fontSize: 16 }}

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