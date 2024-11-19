import { Text, TouchableOpacity, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ActionButtons = ({ onPress, setIsEditable }) => {
    return (
        <View style={{
            marginTop: hp(4), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: wp(90), marginHorizontal: "auto"
        }}>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor: "#FA4A0C", height: hp(6), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontFamily: "OpenSans-Regular", color: "#FFFFFF", fontWeight: "400", fontSize: hp(2.2) }}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsEditable(pre => !pre)} style={{ backgroundColor: "#fff", height: hp(6), borderColor: "#D6D6D6", borderWidth: hp(0.2), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontFamily: "OpenSans-Regular", color: "#202020", fontWeight: "400", fontSize: hp(2.2) }}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionButtons