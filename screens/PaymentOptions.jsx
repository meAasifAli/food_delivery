import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Typography from '../components/Typography'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fa from 'react-native-vector-icons/FontAwesome'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get("window")

const PaymentOptions = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {/* header */}
            <Header />
            {/* Tracking */}
            <DeliveryTracking />

            {/* Divider */}
            <View style={{ flex: 1, borderStyle: "dashed", borderColor: "#6D6D6D80", borderBottomWidth: wp(0.2), paddingVertical: hp(2) }}>
            </View>
            {/* preffered Payment */}
            <PrefferedPayment />
            {/* UPI ID Box */}
            <Upi />
            {/* Credit and Debit Cards */}
            <CreditAndDebitCards />
            {/* More payment Options */}
            <MoreOptions />
        </ScrollView>
    )
}

export default PaymentOptions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    headerWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

    },
    deliveryWrapper: { marginLeft: 20, marginTop: 20, display: "flex", flexDirection: "column", gap: 10, justifyContent: "flex-start" },
    deliveryTrackerWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    }
    , deliveryTacker: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
    trackerDot: { backgroundColor: "#FA4A0C", height: 10, width: 10, borderRadius: 25 },
    trackerLine: { width: 2, height: 35, backgroundColor: "#FA4A0C" },
    deliveryTackerRightWrapper: { display: "flex", flexDirection: "column", gap: 20 },
    deliveryTextWrapper: { display: "flex", flexDirection: "row", alignItems: "center" }
})

function Header() {
    const navigation = useNavigation()
    return (
        <View style={styles.headerWrapper}>
            <Pressable onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' size={20} color='black' />
            </Pressable>
            <Typography ta={"center"} flex={1} title={"Payment Options"} ff={"OpenSans-Regular"} fw={400} size={16} color={"#000"} lh={21} />
        </View>
    )
}

function DeliveryTracking() {
    return (
        <View style={styles.deliveryWrapper}>
            <View>
                <Typography title={"2 Items - Total : RS 294"} ff={"OpenSans-Regular"} fw={400} size={14} ls={0.05} color={"#6D6D6D"} lh={19} />
            </View>
            <View style={styles.deliveryTrackerWrapper}>
                <View style={styles.deliveryTacker}>
                    <View style={styles.trackerDot}></View>
                    <View style={styles.trackerLine}></View>
                    <View style={styles.trackerDot}></View>
                </View>
                <View style={styles.deliveryTackerRightWrapper}>
                    <View style={styles.deliveryTextWrapper}>
                        <Typography title={"Cafe Ertugrul | "} ff={"OpenSans-Medium"} fw={400} size={14} ls={0.05} color={"#000"} lh={19} />
                        <Typography title={"Delivery in 35-40 mins"} ff={"OpenSans-Regular"} fw={400} size={14} ls={0.05} color={"#000"} lh={19} />
                    </View>
                    <View style={styles.deliveryTextWrapper}>
                        <Typography title={"Work | "} ff={"OpenSans-Medium"} fw={400} size={14} ls={0.05} color={"#000"} lh={19} />
                        <Typography title={"Kursu Rajbagh Sgr. 190008"} ff={"OpenSans-Regular"} fw={400} size={14} ls={0.05} color={"#000"} lh={19} />
                    </View>
                </View>
            </View>
        </View>
    )
}

function PrefferedPayment() {
    const navigation = useNavigation()
    return (
        <View style={{ marginLeft: wp(5), marginTop: hp(2) }}>
            <View>
                <Typography title={"Preffered Payment"} ff={"OpenSans-Bold"} fw={400} size={16} ls={0.05} color={"#000"} lh={21} />
            </View>
            <View style={{ width: "95%", borderColor: "#D6D6D6", borderWidth: 0.5, borderRadius: 10, marginTop: 20, padding: 20 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <View>
                            <Image style={{ width: 50, height: 50, objectFit: "contain" }} source={require("../assets/images/gpay.webp")} />
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <Typography title={"Google Pay"} ff={"OpenSans-Medium"} fw={400} size={14} ls={0.05} color={"#000"} lh={19} />
                            <Typography title={"Upto Rs250 cashback on RuPay CC on UPI Transactions above Rs 200"} ff={"OpenSans-Medium"} fw={400} size={8} ls={0.03} color={"#6D6D6D"} maxW={146} lh={10} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#60B246", height: 25, width: 25, borderRadius: 25 }}>
                        <MaterialIcons name='done' color={"#fff"} size={23} />
                    </View>
                </View>
                <View style={{ marginTop: hp(3) }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Cart", { screen: "Tracking" })} style={{ backgroundColor: "#FA4A0C", padding: wp(3.5), borderRadius: wp(3), width: "100%", alignItems: "center", marginHorizontal: "auto" }}>
                        <Text style={{ color: "#fff", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>continue</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}

function Upi() {
    const navigation = useNavigation()
    return (
        <View style={{ marginLeft: 20, marginTop: 20 }}>
            <View>
                <Typography title={"Pay By Any UPI ID"} ff={"OpenSans-Bold"} fw={400} size={16} ls={0.05} color={"#000"} lh={21} />
            </View>
            <View style={{ width: "95%", borderColor: "#D6D6D6", borderWidth: 0.5, borderRadius: 10, marginTop: 20, padding: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Cart", { screen: "AddUpi" })} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 30 }}>
                    <View style={{ borderColor: "#D6D6D6", borderWidth: 0.5, borderRadius: 10, padding: 10 }}>
                        <AntDesign name='plus' color={"#FA4A0C"} size={20} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        <Typography title={"Add New UPI ID"} ff={"OpenSans-Bold"} fw={400} size={16} ls={0.05} color={"#FA4A0C"} lh={21} />
                        <Typography title={"Add Registered UPI ID"} ff={"OpenSans-Bold"} fw={400} size={8} ls={0.05} color={"#6D6D6D"} lh={21} />
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}

function CreditAndDebitCards() {
    const navigation = useNavigation()
    return (
        <View style={{ marginLeft: 20, marginTop: 20 }}>
            <View>
                <Typography title={"Credit & Debit Cards"} ff={"OpenSans-Bold"} fw={400} size={16} ls={0.05} color={"#000"} lh={21} />
            </View>
            <View style={{ width: "95%", borderColor: "#D6D6D6", borderWidth: 0.5, borderRadius: 10, marginTop: 20, padding: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Cart", { screen: "AddCard" })} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 30 }}>
                    <View style={{ borderColor: "#D6D6D6", borderWidth: 0.5, borderRadius: 10, padding: 10 }}>
                        <AntDesign name='plus' color={"#FA4A0C"} size={20} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        <Typography title={"Add New Card"} ff={"OpenSans-Bold"} fw={400} size={16} ls={0.05} color={"#FA4A0C"} lh={21} />
                        <Typography title={"Save and Pay via Cards"} ff={"OpenSans-Bold"} fw={400} size={8} ls={0.05} color={"#6D6D6D"} lh={21} />
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}

function MoreOptions() {
    const navigation = useNavigation()
    return (
        <View style={{ marginLeft: 20, marginTop: 20 }}>
            <View>
                <Typography title={"More Payment options"} ff={"OpenSans-Bold"} fw={400} size={16} ls={0.05} color={"#000"} lh={21} />
            </View>
            <View style={{ width: "95%", borderColor: "#D6D6D6", borderWidth: 0.5, borderRadius: 10, marginVertical: 20, }}>
                <View style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <View style={{ borderColor: "#D6D6D6", borderWidth: 0.5, borderRadius: 10, padding: 10 }}>
                            <AntDesign name='wallet' color={"#000000"} size={20} />
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", gap: wp(1) }}>
                            <Typography title={"Wallets"} ff={"OpenSans-Bold"} fw={400} size={hp(1.8)} ls={0.05} color={"#FA4A0C"} lh={hp(3)} />
                            <Typography title={"Paytm, PhonePe, Amazon Pay & more"} ff={"OpenSans-Bold"} fw={400} size={8} ls={0.05} color={"#6D6D6D"} lh={11} />
                        </View>
                    </View>
                    <View>
                        <Fa name='angle-right' size={30} color={"#6D6D6D"} />
                    </View>
                </View>
                <View style={{ borderStyle: "dashed", borderColor: "#000", borderWidth: 0.50, flex: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0 }}></View>
                <View style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Cart", { screen: "NetBanking" })} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <View style={{ borderColor: "#D6D6D6", borderWidth: 0.5, borderRadius: 10, padding: 10 }}>
                            <Fa name='bank' color={"#000"} size={20} />
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                            <Typography title={"Net Banking"} ff={"OpenSans-Bold"} fw={400} size={hp(1.8)} ls={0.05} color={"#FA4A0C"} lh={hp(3)} />
                            <Typography title={"Select from List of Banks"} ff={"OpenSans-Bold"} fw={400} size={8} ls={0.05} color={"#6D6D6D"} lh={11} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Fa name='angle-right' size={30} color={"#6D6D6D"} />
                    </View>
                </View>
                <View style={{ borderStyle: "dashed", borderColor: "#000", borderWidth: 0.50, flex: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0 }}></View>
                <View style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <View style={{ borderColor: "#D6D6D6", borderWidth: 0.5, borderRadius: 10, padding: 10 }}>
                            <MC name='cash' color={"#000"} size={20} />
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                            <Typography title={"Cash on Delivery(cash/Upi)"} ff={"OpenSans-Bold"} fw={400} size={hp(1.8)} ls={0.05} color={"#FA4A0C"} lh={21} />
                            <Typography maxW={138} title={"Pay Cash to delivery partner or ask for QR code to pay via UPI"} ff={"OpenSans-Bold"} fw={400} size={8} ls={0.05} color={"#6D6D6D"} lh={11} />
                        </View>
                    </View>
                    <View>
                        <Fa name='angle-right' size={30} color={"#6D6D6D"} />
                    </View>
                </View>
            </View>
        </View >
    )
}