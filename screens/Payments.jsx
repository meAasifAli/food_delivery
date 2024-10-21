import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Typography from '../components/Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Payments = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <SavedCards />
            <Wallets />
        </View>
    )
}

export default Payments

const styles = StyleSheet.create({})

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5), borderStyle: "dashed", borderBottomWidth: wp(0.2), padding: wp(5) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name='arrowleft' size={hp(3)} color={"#202020"} />
            </TouchableOpacity>
            <View>
                <Typography title={"Payments"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
        </View>
    )
}


const SavedCards = () => {
    const navigation = useNavigation()
    return (
        <View style={{ padding: wp(5) }}>
            <View>
                <Typography ff={"OpenSans-Medium"} title={"Saved Cards"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Cart", { screen: "AddCard" })} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(7), marginTop: hp(4), paddingBottom: hp(1.5), borderBottomColor: "#D6D6D6", borderBottomWidth: wp(0.15) }}>
                <View style={{ borderColor: "#FA4A0C", borderWidth: wp(0.2), padding: wp(2), borderRadius: wp(2) }}>
                    <AntDesign name='plus' color={"#FA4A0C"} size={hp(3)} />
                </View>
                <View>
                    <Typography ff={"OpnSans-Regular"} title={"ADD NEW CARD"} color={"#FA4A0C"} fw={400} size={wp(5)} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Wallet = ({ title, img }) => {
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: hp(1), borderBottomColor: "#D6D6D6", borderBottomWidth: hp(0.15), paddingTop: hp(2) }}>
            <View style={{ display: "flex", alignItems: "center", gap: wp(10), flexDirection: "row" }}>
                <Image style={{ height: hp(5), width: wp(10), objectFit: "contain" }} source={img} />
                <Typography color={"#000"} size={hp(2)} title={title} ff={"OpenSans-Regular"} />
            </View>
            <View style={{ borderColor: "#FA4A0C", borderWidth: wp(0.2), padding: wp(1.5), borderRadius: wp(2) }}>
                <AntDesign name='plus' color={"#FA4A0C"} size={hp(3)} />
            </View>
        </View>
    )
}

const Wallets = () => {
    return (
        <View style={{ marginTop: hp(3), padding: wp(5) }}>
            <View>
                <Typography ff={"OpenSans-Medium"} title={"Wallets"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
            <View style={{ marginTop: hp(4) }}>
                <Wallet img={require("../assets/images/paytm.png")} color title={"Paytm Wallet"} />
                <Wallet img={require("../assets/images/amazonPay.png")} color title={"AmazonPay"} />
                <Wallet img={require("../assets/images/phonepe.png")} color title={"PhonePe"} />
                <Wallet img={require("../assets/images/mobikwik.png")} color title={"Mobikwik"} />
            </View>
        </View>
    )
}