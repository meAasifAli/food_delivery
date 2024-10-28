import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Typography from '../../components/Typography'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
const { height, width } = Dimensions.get("window")

const CartScreen = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

    },
    headingWrapper: { display: "flex", alignItems: "center", flexDirection: "row", width: "95%", marginHorizontal: "auto" },
    ItemContainer: {
        flex: 1,
        height: hp(30),
        width: "95%",
        marginHorizontal: "auto",
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: wp(2),
        marginTop: hp(2),
        display: "flex",
        flexDirection: "column",
        gap: hp(1),

    },
    ItemWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: wp(2)
    },
    ItemLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: wp(3)
    },
    ItemRightWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(3)
    },
    ItemRightLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: wp(1),
        borderColor: "#D6D6D6",
        borderWidth: 1,
        height: hp(4),
        width: wp(20),
        borderRadius: wp(1),
    },
    actionTextPlus: { fontSize: wp(3), lineHeight: hp(2), fontWeight: "400", color: "#FA4A0C", marginLeft: wp(3) },
    actionTextMinus: { fontSize: wp(3), lineHeight: hp(2), fontWeight: "400", color: "#FA4A0C", marginRight: wp(3) },
    similarItemsContainer: { width: "95%", marginHorizontal: "auto", marginTop: 30, borderColor: "#D6D6D6", borderWidth: 1, borderRadius: 10, padding: wp(2) },
    similarItemsWrapper: { width: wp(60), borderColor: "#D6D6D680", borderWidth: 1, borderRadius: 10, marginTop: 15, marginRight: "1%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" },
    similarItemsLeftWrapper: { display: "flex", flexDirection: "row", gap: wp(3), alignItems: "center", marginLeft: wp(5) },
    noteBoxWrapper: { marginBottom: hp(4), width: "95%", marginHorizontal: "auto", borderWidth: 1, borderRadius: wp(2), borderColor: "#D6D6D6", padding: wp(2) },
    billingWraper: { width: "95%", height: hp(33), marginHorizontal: "auto", borderColor: "#D6D6D6", marginTop: hp(4), borderWidth: 1, padding: wp(6), borderRadius: wp(2), paddingHorizontal: wp(2), paddingVertical: hp(4) },
    billItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: hp(2) }
})

function Header() {
    const navigation = useNavigation()
    return (
        <View style={styles.headingWrapper}>
            <Pressable onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' size={24} color={"#202020"} />
            </Pressable>
            <Typography title={"Cart"} ta={"center"} ff={"OpenSans_Regular"} size={24} lh={32} fw={400} color={"#000000"} flex={1} />
        </View>
    )
}

function CartItems() {
    return (

        <View style={styles.ItemContainer}>
            {/* item1  */}
            <View style={styles.ItemWrapper}>
                <View style={styles.ItemLeftWrapper}>
                    <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                        <AntDesign name='caretup' size={hp(1)} color={"#FA4A0C"} />
                    </View>
                    <Typography title={"Popcorn Chicken Pizza"} ff={"OpenSans_Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                </View>
                <View style={styles.ItemRightWrapper}>
                    <View style={styles.ItemRightLeftWrapper}>
                        <Pressable>
                            <Text style={styles.actionTextPlus}>+</Text>
                        </Pressable>
                        <View>
                            <Typography title={"1"} ff={"OpenSans_Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                        </View>
                        <Pressable>
                            <Text style={styles.actionTextMinus}>-</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Typography title={"Rs 299"} ff={"OpenSans_Regular"} size={12} lh={16} fw={400} color={"#202020"} />
                    </View>
                </View>
            </View>
            {/* item 2 */}
            <View style={styles.ItemWrapper}>
                <View style={styles.ItemLeftWrapper}>
                    <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                        <AntDesign name='caretup' size={hp(1)} color={"#FA4A0C"} />
                    </View>
                    <Typography title={"Popcorn Chicken Pizza"} ff={"OpenSans_Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                </View>
                <View style={styles.ItemRightWrapper}>
                    <View style={styles.ItemRightLeftWrapper}>
                        <Pressable>
                            <Text style={styles.actionTextPlus}>+</Text>
                        </Pressable>
                        <View>
                            <Typography title={"1"} ff={"OpenSans_Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                        </View>
                        <Pressable>
                            <Text style={styles.actionTextMinus}>-</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Typography title={"Rs 299"} ff={"OpenSans_Regular"} size={12} lh={16} fw={400} color={"#202020"} />
                    </View>
                </View>
            </View>
            {/* item 3  */}
            <View style={styles.ItemWrapper}>
                <View style={styles.ItemLeftWrapper}>
                    <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                        <AntDesign name='caretup' size={hp(1)} color={"#FA4A0C"} />
                    </View>
                    <Typography title={"Popcorn Chicken Pizza"} ff={"OpenSans_Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                </View>
                <View style={styles.ItemRightWrapper}>
                    <View style={styles.ItemRightLeftWrapper}>
                        <Pressable>
                            <Text style={styles.actionTextPlus}>+</Text>
                        </Pressable>
                        <View>
                            <Typography title={"1"} ff={"OpenSans_Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                        </View>
                        <Pressable>
                            <Text style={styles.actionTextMinus}>-</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Typography title={"Rs 299"} ff={"OpenSans_Regular"} size={12} lh={16} fw={400} color={"#202020"} />
                    </View>
                </View>

            </View>
            {/* item4 */}
            <View style={styles.ItemWrapper}>
                <View style={styles.ItemLeftWrapper}>
                    <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                        <AntDesign name='caretup' size={hp(1)} color={"#FA4A0C"} />
                    </View>
                    <Typography title={"Popcorn Chicken Pizza"} ff={"OpenSans_Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                </View>
                <View style={styles.ItemRightWrapper}>
                    <View style={styles.ItemRightLeftWrapper}>
                        <Pressable>
                            <Text style={styles.actionTextPlus}>+</Text>
                        </Pressable>
                        <View>
                            <Typography title={"1"} ff={"OpenSans_Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                        </View>
                        <Pressable>
                            <Text style={styles.actionTextMinus}>-</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Typography title={"Rs 299"} ff={"OpenSans_Regular"} size={12} lh={16} fw={400} color={"#202020"} />
                    </View>
                </View>
            </View>
        </View>

    )
}

function SimilarItems() {
    return (
        <View horizontal={true} showsHorizontalScrollIndicator={false} style={styles.similarItemsContainer}>
            <View>
                <Typography title={"You may also like!"} ff={"OpenSans_Regular"} lh={21} size={16} color={"#000"} />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.similarItemsWrapper}>
                    <View style={styles.similarItemsLeftWrapper}>
                        <View style={{ paddingHorizontal: hp(0.35), borderColor: "#60B246", borderWidth: wp(0.35) }}>
                            <Octicons name='dot-fill' size={hp(1.5)} color={"#60B246"} />
                        </View>
                        <View>
                            <Typography title={"Mango"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                            <Typography title={"Rs 299"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: 80, width: 90, resizeMode: "contain", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require("../../assets/images/shake.png")} />
                    </View>
                </View>
                <View style={styles.similarItemsWrapper}>
                    <View style={styles.similarItemsLeftWrapper}>
                        <View style={{ paddingHorizontal: hp(0.35), borderColor: "#60B246", borderWidth: wp(0.35) }}>
                            <Octicons name='dot-fill' size={hp(1.5)} color={"#60B246"} />
                        </View>
                        <View>
                            <Typography title={"Mango"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                            <Typography title={"Rs 299"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: 80, width: 90, resizeMode: "contain", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require("../../assets/images/shake.png")} />
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

function Offers() {
    return (
        <View style={{ marginTop: 30 }}>
            <View style={{ marginLeft: "2%" }}>
                <Typography title={"Offers for you"} ff={"OpenSans_Regular"} lh={32} size={24} fw={400} color={"#000"} />
            </View>
            <View style={{ width: "95%", height: hp(15), marginHorizontal: "auto", borderTopEndRadius: 10, borderTopStartRadius: 10, borderStyle: "dashed", borderColor: "#D6D6D6", marginTop: 30, borderWidth: 1, padding: hp(4) }}>
                <Typography title={"WELCOME100"} ff={"OpenSans_Bold"} lh={hp(3.5)} size={hp(3)} fw={400} color={"#000"} />
                <Typography title={"Save Another 50"} ff={"OpenSans_Regular"} lh={hp(3)} size={hp(2.5)} fw={200} color={"#000"} />
            </View>
            <Pressable style={{ width: "95%", height: hp(7), marginHorizontal: "auto", backgroundColor: "#FA4A0C", borderBottomEndRadius: 10, borderBottomStartRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <Typography title={"Apply"} ff={"OpenSans_Regular"} lh={32} size={20} color={"#fff"} fw={300} />
            </Pressable>
        </View>
    )
}


function CouponButons() {
    return (
        <TouchableOpacity style={{ backgroundColor: "#000", height: 60, width: "95%", marginHorizontal: "auto", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, marginBottom: 20 }}>
            <Typography title="View All Coupons" color={"#fff"} ff={"OpenSans-Regular"} fw={400} size={20} lh={27} ls={0.05} />
        </TouchableOpacity>
    )
}

function Billing() {
    return (
        <View style={{ marginTop: hp(3), marginBottom: hp(4) }}>
            <View style={{ marginLeft: "2%" }}>
                <Typography title={"Billing Details"} ff={"OpenSans-Regular"} lh={32} size={24} fw={400} color={"#000"} />
            </View>
            <View style={styles.billingWraper}>
                <View style={styles.billItem}>
                    <Typography title={"Item Total"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={"RS 499.59"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"Delivery Fee"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={"RS 49.00"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"Delivery Tip"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={"Add Tip"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#FA4A0C"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"GST & Restaurant Charges"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={"RS 24.99"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={{ borderStyle: "dashed", borderColor: "#000", borderWidth: 0.50, flex: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0 }}></View>
                <View style={[styles.billItem, { marginTop: hp(2) }]}>
                    <Typography title={"To Pay"} ff={"OpenSans-Bold"} lh={21} size={16} fw={600} color={"#000"} />
                    <Typography title={"RS 572.99"} ff={"OpenSans-Bold"} lh={21} size={16} fw={600} color={"#000"} />
                </View>
            </View>
        </View>
    )
}

function GpayBox() {
    const navigation = useNavigation()
    return (
        <View style={{ marginBottom: 20, padding: 20, marginTop: 20, width: "95%", height: height * 0.25, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#fff", marginHorizontal: "auto" }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <View>
                        <Image style={{ height: 50, width: 50, resizeMode: "contain" }} source={require("../../assets/images/gpay.webp")} />
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
            <Pressable
                onPress={() => navigation.navigate("Cart", { screen: "Tracking" })}
                style={{
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
            </Pressable>
        </View>
    )
}