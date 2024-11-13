import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fa from 'react-native-vector-icons/FontAwesome'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MoreOptions = () => {
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

export default MoreOptions

const styles = StyleSheet.create({})