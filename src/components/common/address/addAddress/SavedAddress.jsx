import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Entypo from 'react-native-vector-icons/Entypo'
import FA from 'react-native-vector-icons/FontAwesome'

const SavedAddress = ({ item }) => {
    return (
        <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), borderWidth: wp(0.1), borderRadius: wp(3), borderColor: "#202020", padding: wp(3), marginVertical: 10 }}>
            <View>
                {item?.type?.includes("home") ? <Entypo name='home' size={hp(2.5)} color={"#FA4A0C"} /> : <FA name='building' size={hp(2.5)} color={"#FA4A0C"} />}
            </View>
            <View>
                <Text style={{ fontFamily: "OpenSans-Medium", color: "#000000", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2), textTransform: "capitalize" }}>{item?.type}</Text>
                <Text numberOfLines={1} style={{ overflow: "hidden", fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(2), fontSize: hp(1.8), letterSpacing: wp(0.2), textTransform: "capitalize" }}>{`${item?.area} `}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default SavedAddress

const styles = StyleSheet.create({})