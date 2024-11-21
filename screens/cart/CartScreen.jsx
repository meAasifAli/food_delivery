import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import Typography from '../../components/Typography'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from '../../components/common/cart/Header';
import CartItems from '../../components/common/cart/CartItems';
import SimilarItems from '../../components/common/cart/SimilarItems';
import Offers from '../../components/common/cart/Offers';
import Billing from '../../components/common/cart/Billing';
import GpayBox from '../../components/common/cart/GpayBox';

const CartScreen = () => {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={styles.container} showsVerticalScrollIndicator={false}>
            {/* header */}
            <Header />
            {/* Cart Items */}
            <CartItems />
            {/* similar Items */}
            <SimilarItems />
            {/* Offers */}
            <Offers />
            {/* View All coupons Button */}
            <CouponButons />
            {/* Bill */}
            <Billing />
            {/* precaution Text */}
            <View style={{ marginBottom: 20, width: "95%", marginHorizontal: "auto" }}>
                <Typography title={"To prevent cancellations, please check your order and address information."} ff={"OpenSans-Medium"} color={"#000"} size={16} lh={21} fw={400} />
            </View>
            {/* Note Box */}
            <View style={styles.noteBoxWrapper}>
                <Typography title={"Note: A complete refund will be provided if you cancel your order within 60 seconds of placing it. After sixty seconds, there will be no refunds for cancellations"} ff={"OpenSans-Regular"} color={"#000"} size={16} lh={21} fw={400} />
            </View>
            {/* Gpay Box */}
            <GpayBox />
        </ScrollView>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp(2),
        backgroundColor: "#fff"

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



