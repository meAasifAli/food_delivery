import { TouchableOpacity, View, Text } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SavedAddresses = () => {
    return (
        <View style={{ width: wp(80), marginHorizontal: "auto", elevation: 1, backgroundColor: "#fff", borderRadius: wp(3), marginTop: hp(2), padding: wp(5) }}>
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), borderWidth: wp(0.1), borderRadius: wp(3), borderColor: "#202020", padding: wp(3) }}>
                <View>
                    <Entypo name='home' size={hp(2.5)} color={"#FA4A0C"} />
                </View>
                <View>
                    <Text style={{ fontFamily: "OpenSans-Medium", color: "#000000", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>Home</Text>
                    <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(2), fontSize: hp(1.8), letterSpacing: wp(0.2) }}>Kursu Rajbagh</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: hp(2), display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), borderWidth: wp(0.1), borderRadius: wp(3), borderColor: "#202020", padding: wp(3) }}>
                <View>
                    <Entypo name='home' size={hp(2.5)} color={"#FA4A0C"} />
                </View>
                <View>
                    <Text style={{ fontFamily: "OpenSans-Medium", color: "#000000", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>Home</Text>
                    <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(2), fontSize: hp(1.8), letterSpacing: wp(0.2) }}>Kursu Rajbagh</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default SavedAddresses