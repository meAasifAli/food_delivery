import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Typography from '../components/Typography'


const { height, width } = Dimensions.get("window")

const CartScreen = () => {
    return (
        <ScrollView style={styles.container}>
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
            <View style={{ marginBottom: 20 }}>
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
        padding: 10,

    },
    headingWrapper: { display: "flex", alignItems: "center", flexDirection: "row" },
    ItemContainer: {
        height: height * 0.30,
        width: width * 0.95,
        marginHorizontal: "auto",
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,

    },
    ItemWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },
    ItemLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10
    },
    ItemRightWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    ItemRightLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        height: 25,
        width: width * 0.20,
        borderRadius: 5,
    },
    actionTextPlus: { fontSize: 15, lineHeight: 16, fontWeight: " 400", color: "#FA4A0C", marginLeft: 10 },
    actionTextMinus: { fontSize: 15, lineHeight: 16, fontWeight: " 400", color: "#FA4A0C", marginRight: 10 },
    similarItemsContainer: { marginTop: 20, borderColor: "#D6D6D6", borderWidth: 1, borderRadius: 10, height: height * 0.20, padding: 10 },
    similarItemsWrapper: { width: width * 0.6, height: height * 0.13, borderColor: "#D6D6D680", borderWidth: 1, borderRadius: 10, marginTop: 10, marginRight: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" },
    similarItemsLeftWrapper: { display: "flex", flexDirection: "row", gap: 10, alignItems: "center", marginLeft: 20 },
    noteBoxWrapper: { marginBottom: 20, width: width * 0.95, marginHorizontal: "auto", borderWidth: 1, borderRadius: 10, borderColor: "#D6D6D6", padding: 10 },
    billingWraper: { width: width * 0.95, height: height * 0.32, marginHorizontal: "auto", borderColor: "#D6D6D6", marginTop: 30, borderWidth: 1, padding: 20, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 20 },
    billItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }
})

function Header() {
    return (
        <View style={styles.headingWrapper}>
            <IonIcons name='arrow-back' size={24} color={"#202020"} />
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
                    <Image source={require("../assets/images/arrowUpBox.png")} style={{ height: 20, width: 20, resizeMode: "cover" }} />
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
                    <Image source={require("../assets/images/arrowUpBox.png")} style={{ height: 20, width: 20, resizeMode: "cover" }} />
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
                    <Image source={require("../assets/images/arrowUpBox.png")} style={{ height: 20, width: 20, resizeMode: "cover" }} />
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
                    <Image source={require("../assets/images/arrowUpBox.png")} style={{ height: 20, width: 20, resizeMode: "cover" }} />
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
                        <Image style={{ height: 10, width: 10, resizeMode: "contain" }} source={require("../assets/images/dotBox.png")} />
                        <View>
                            <Typography title={"Mango"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                            <Typography title={"Rs 299"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: height * 0.13, width: width * 0.25, resizeMode: "cover", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require("../assets/images/shake.png")} />
                    </View>
                </View>
                <View style={styles.similarItemsWrapper}>
                    <View style={styles.similarItemsLeftWrapper}>
                        <Image style={{ height: 10, width: 10, resizeMode: "contain" }} source={require("../assets/images/dotBox.png")} />
                        <View>
                            <Typography title={"Mango"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                            <Typography title={"Rs 299"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: height * 0.13, width: width * 0.25, resizeMode: "cover", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require("../assets/images/shake.png")} />
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

function Offers() {
    return (
        <View style={{ marginTop: 30 }}>
            <View>
                <Typography title={"Offers for you"} ff={"OpenSans_Regular"} lh={32} size={24} fw={400} color={"#000"} />
            </View>
            <View style={{ width: width * 0.95, height: height * 0.15, marginHorizontal: "auto", borderTopEndRadius: 10, borderTopStartRadius: 10, borderStyle: "dashed", borderColor: "#D6D6D6", marginTop: 30, borderWidth: 1, padding: 20 }}>
                <Typography title={"WELCOME100"} ff={"OpenSans_Bold"} lh={32} size={24} fw={400} color={"#000"} />
                <Typography title={"Save Another 50"} ff={"OpenSans_Regular"} lh={32} size={16} fw={200} color={"#000"} />
            </View>
            <Pressable style={{ width: width * 0.95, height: height * 0.07, marginHorizontal: "auto", backgroundColor: "#FA4A0C", borderBottomEndRadius: 10, borderBottomStartRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <Typography title={"Apply"} ff={"OpenSans_Regular"} lh={32} size={20} color={"#fff"} fw={300} />
            </Pressable>
        </View>
    )
}


function CouponButons() {
    return (
        <TouchableOpacity style={{ backgroundColor: "#000", height: height * 0.08, width: width * 0.95, marginHorizontal: "auto", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, marginBottom: 20 }}>
            <Typography title="View All Coupons" color={"#fff"} ff={"OpenSans-Regular"} fw={400} size={20} lh={27} ls={0.05} />
        </TouchableOpacity>
    )
}

function Billing() {
    return (
        <View style={{ marginTop: 20, marginBottom: 30 }}>
            <View>
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
                <Typography title={"---------------------------------------------------------------------------------------"} />
                <View style={[styles.billItem, { marginTop: 10 }]}>
                    <Typography title={"To Pay"} ff={"OpenSans-Bold"} lh={21} size={16} fw={600} color={"#000"} />
                    <Typography title={"RS 572.99"} ff={"OpenSans-Bold"} lh={21} size={16} fw={600} color={"#000"} />
                </View>
            </View>
        </View>
    )
}

function GpayBox() {
    return (
        <View style={{ marginBottom: 20, padding: 20, marginTop: 20, width: width * 0.95, height: height * 0.25, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#fff", marginHorizontal: "auto" }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <View>
                        <Image style={{ height: 50, width: 50, resizeMode: "contain" }} source={require("../assets/images/gpay.png")} />
                    </View>
                    <View>
                        <Typography title={"Pay using"} ff={"OpenSans-Regular"} color={"#000"} size={14} lh={19} fw={400} />
                        <Typography title={"Google Pay"} ff={"OpenSans-Bold"} color={"#202020"} size={14} lh={21} fw={600} />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <Typography title={"Change"} ff={"OpenSans-Regular"} color={"#FA4A0C"} size={14} lh={19} fw={400} />
                    <IonIcons name='chevron-forward' size={20} color={"#FA4A0C"} />
                </View>
            </View>
            <View>
                <Typography color={"#D6D6D6"} title={"-----------------------------------------------------------------------------------"} />
            </View>
            <Pressable style={{
                backgroundColor: "#FA4A0C",
                marginTop: 20,
                height: height * 0.08,
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <View style={{ height: 50, marginTop: 2, borderRadius: 50, backgroundColor: "white", width: width * 0.15, marginLeft: 20, display: "flex", justifyContent: "center", alignItems: "center", gap: 0 }}>
                    <IonIcons name='chevron-forward' size={25} color={"#FA4A0C"} />
                </View>
                <View style={{ marginLeft: 30 }}>
                    <Typography title={"Continue to pay | Rs 579"} ff={"OpenSans-Bold"} color={"#FFF"} size={16} lh={21} fw={600} />
                </View>
            </Pressable>
        </View>
    )
}