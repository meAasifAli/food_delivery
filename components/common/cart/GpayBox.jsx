import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typography from '../../Typography'
import IonIcons from 'react-native-vector-icons/Ionicons'

const { height } = Dimensions.get("window")
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import RazorpayCheckout from 'react-native-razorpay'
import { useSelector } from 'react-redux'



const GpayBox = () => {

    const { user } = useSelector((state) => state.auth)
    const navigation = useNavigation()

    var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_KfnAxR9MGf1dHT', // Your api key
        amount: '5000',
        name: user?.username,
        prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software'
        },
        theme: { color: '#F37254' },

    }

    const handlePaymnet = () => {
        RazorpayCheckout.open(options).then((data) => {
            console.log(data);

        }).catch((error) => {
            // handle failure
            console.log(error);

            Alert.alert(`Error: ${error.code} | ${error.description}`);
        })
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

            <TouchableOpacity onPress={handlePaymnet} style={{
                backgroundColor: "#FA4A0C",
                marginTop: hp(2.5),
                height: hp(7),
                borderRadius: wp(10),
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: hp(0.3)

            }}>
                <View style={{ height: hp(6), marginTop: 2, borderRadius: 50, backgroundColor: "white", width: wp(12), marginLeft: wp(3), display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                    <IonIcons name='chevron-forward' size={hp(2.5)} color={"#FA4A0C"} />
                    <IonIcons name='chevron-forward' size={hp(3.5)} color={"#FA4A0C"} style={{ marginLeft: -hp(2) }} />
                </View>
                <View style={{ marginLeft: wp(3) }}>
                    <Typography title={"Continue to pay | Rs 579"} ff={"OpenSans-Bold"} color={"#FFF"} size={16} lh={21} fw={600} />
                </View>
            </TouchableOpacity>


        </View>
    )
}

export default GpayBox

const styles = StyleSheet.create({})