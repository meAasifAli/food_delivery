import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Typography from '../../components/Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../../components/common/cart/Header';
import CartItems from '../../components/common/cart/CartItems';
import Offers from '../../components/common/cart/Offers';
import Billing from '../../components/common/cart/Billing';
import Payment from '../../components/common/cart/Payment';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';
import { Dimensions } from 'react-native';
import { fetchBill, fetchCartItems, fetchOffers } from '../../store/cartSlice';
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LocationContext } from '../../context/LocationContext';



const { height } = Dimensions.get('window');

const CartScreen = () => {
    const { offerCode, setOfferCode, tipAmt, setTipAmt } = useContext(LocationContext)
    const dispatch = useDispatch()
    const { cart, offers } = useSelector((state) => state?.cart)
    const { token } = useSelector((state) => state?.auth)

    useEffect(() => {
        dispatch(fetchBill({ token, tip: tipAmt, code: offerCode }))
    }, [])

    useEffect(() => {
        dispatch(fetchCartItems({ token }))
    }, [])
    useEffect(() => {
        dispatch(fetchOffers())
    }, [dispatch])

    return (
        <View style={styles.container}>
            {/* header */}
            <Header />
            <View style={{ flex: 1 }}>
                {
                    cart?.length === 0 ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Image style={{ width: "100%", height: height / 3, resizeMode: "contain" }} source={require("../../assets/images/emptycart.webp")} />
                        <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold", color: "#000", textAlign: "center", maxWidth: "70%", marginHorizontal: "auto", marginTop: 20 }}>Good Food is  Always Cooking</Text>
                        <Text style={{ fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", textAlign: "center", maxWidth: "60%", marginHorizontal: "auto", marginTop: 10 }}>Your Cart is empty. Add something from the menu</Text>
                    </View>
                        :
                        <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                            {/* Cart Items */}
                            < CartItems tipAmt={tipAmt} />
                            {/* similar Items
                            < SimilarItems /> */}
                            {
                                offers?.length > 0 &&
                                <Offers offerCode={offerCode} setOfferCode={setOfferCode} />
                            }
                            <CouponButons />
                            {/* Bill */}
                            <Billing tipAmt={tipAmt} setTipAmt={setTipAmt} offerCode={offerCode} />
                            {/* precaution Text */}
                            <View View style={{ marginBottom: 20, width: "95%", marginHorizontal: "auto" }}>
                                <Typography title={"To prevent cancellations, please check your order and address information."} ff={"OpenSans-Medium"} color={"#000"} size={16} lh={21} fw={400} />
                            </View>
                            {/* Note Box */}
                            <View style={styles.noteBoxWrapper}>
                                <Text style={{ fontSize: 16, fontFamily: "OpenSans-Bold", color: "#FA4A0C", marginBottom: 10, lineHeight: 21 }}>Note: <Text style={{ color: "#202020", fontFamily: "OpenSans-Regular", fontSize: 14 }}>A complete refund will be provided if you cancel your order within 60 seconds of placing it. After sixty seconds, there will be no refunds for cancellations</Text></Text>
                            </View>
                            {/* Payment */}
                            <Payment tip={tipAmt} setOfferCode={setOfferCode} offerCode={offerCode} />
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
    noteBoxWrapper: { marginBottom: hp(4), width: "95%", marginHorizontal: "auto", borderWidth: 1, borderRadius: wp(2), borderColor: "#D6D6D6", padding: wp(2), marginTop: 10 },
})




function CouponButons() {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Coupons")} style={{ backgroundColor: "#000", width: "95%", marginHorizontal: "auto", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, marginVertical: 20, paddingVertical: 15 }}>
            <Typography title="View All Coupons" color={"#fff"} ff={"OpenSans-Regular"} fw={400} size={20} lh={27} ls={0.05} />
        </TouchableOpacity>
    )
}



