import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import Typography from '../../components/Typography'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from '../../components/common/cart/Header';
import CartItems from '../../components/common/cart/CartItems';
import SimilarItems from '../../components/common/cart/SimilarItems';
import Offers from '../../components/common/cart/Offers';
import Billing from '../../components/common/cart/Billing';
import GpayBox from '../../components/common/cart/GpayBox';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';

import { Dimensions } from 'react-native';
import { fetchCartItems } from '../../store/cartSlice';
import { useEffect } from 'react';
import { List } from 'react-content-loader/native';

const { height } = Dimensions.get('window');

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state?.cart)
    const { token } = useSelector((state) => state?.auth)

    useEffect(() => {
        dispatch(fetchCartItems({ token }))
    }, [])

    return (
        <View style={styles.container}>
            {/* header */}
            <Header />
            <View style={{ flex: 1 }}>
                {
                    cart?.length === 0 ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Image style={{ width: "100%", height: height / 3, resizeMode: "contain" }} source={require("../../assets/images/emptycart.webp")} />
                        <Text style={{ fontSize: 20, fontFamily: "OpenSans-Bold", color: "#000", textAlign: "center", maxWidth: "70%", marginHorizontal: "auto", marginTop: 20 }}>Good Food is  Always Cooking</Text>
                        <Text style={{ fontSize: 16, fontFamily: "OpenSans-Medium", color: "#000", textAlign: "center", maxWidth: "70%", marginHorizontal: "auto", marginTop: 10 }}>Your Cart is empty. Add something from the menu</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Dining")} style={{ backgroundColor: "#FA4A0C", height: 50, borderRadius: 10, padding: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#fff", fontSize: 16, fontFamily: "OpenSans-Medium" }}>Browse Restaurants</Text>
                        </TouchableOpacity>
                    </View> :
                        <ScrollView contentContainerStyle={{ padding: 10 }} showsVerticalScrollIndicator={false}>

                            <View>
                                {/* Cart Items */}
                                < CartItems />
                                {/* similar Items */}
                                < SimilarItems />
                                {/* Offers */}
                                < Offers />
                                {/* View All coupons Button */}
                                < CouponButons />
                                {/* Bill */}
                                < Billing />
                                {/* precaution Text */}
                                <View View style={{ marginBottom: 20, width: "95%", marginHorizontal: "auto" }}>
                                    <Typography title={"To prevent cancellations, please check your order and address information."} ff={"OpenSans-Medium"} color={"#000"} size={16} lh={21} fw={400} />
                                </View>
                                {/* Note Box */}
                                <View style={styles.noteBoxWrapper}>
                                    <Typography title={"Note: A complete refund will be provided if you cancel your order within 60 seconds of placing it. After sixty seconds, there will be no refunds for cancellations"} ff={"OpenSans-Regular"} color={"#000"} size={16} lh={21} fw={400} />
                                </View>
                                {/* Gpay Box */}
                                <GpayBox />
                            </View>
                        </ScrollView>
                }

            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",

    },
    noteBoxWrapper: { marginBottom: hp(4), width: "95%", marginHorizontal: "auto", borderWidth: 1, borderRadius: wp(2), borderColor: "#D6D6D6", padding: wp(2) },
})




function CouponButons() {
    return (
        <TouchableOpacity style={{ backgroundColor: "#000", height: 60, width: "95%", marginHorizontal: "auto", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, marginBottom: 20 }}>
            <Typography title="View All Coupons" color={"#fff"} ff={"OpenSans-Regular"} fw={400} size={20} lh={27} ls={0.05} />
        </TouchableOpacity>
    )
}



