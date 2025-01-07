import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Typography from '../../Typography'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PreferredPayment = () => {
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
                            <Image style={{ width: 50, height: 50, objectFit: "contain" }} source={require("../../../assets/images/gpay.webp")} />
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

export default PreferredPayment

const styles = StyleSheet.create({})