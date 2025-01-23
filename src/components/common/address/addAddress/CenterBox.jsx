import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, View, Text } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import FA from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Geolocation from "../.././../../config/locationConfig";
import { useContext } from "react";
import { LocationContext } from "../../../../context/LocationContext";
import { Alert } from "react-native";

const CenterBox = () => {
    const { setLocation, setIsMyLocation } = useContext(LocationContext)
    const navigation = useNavigation()
    const handleCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log('Position fetched:', position); // Debug log
                setLocation({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                });
                setIsMyLocation(true)
                navigation.navigate("AddressScreen");
            },
            (error) => {
                console.error('Location error:', error);
                Alert.alert('Error', 'Failed to fetch current location');
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 }
        );
    };
    return (
        <View style={{ width: wp(80), marginHorizontal: "auto", marginTop: hp(7), padding: wp(5), elevation: 1, backgroundColor: "#fff", borderRadius: wp(3) }}>
            <TouchableOpacity onPress={() => navigation.navigate("AddressScreen")} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: wp(0.1), borderRadius: wp(3), borderColor: "#202020", padding: wp(3) }}>
                <AntDesign name='plus' size={hp(2.5)} color={"#FA4A0C"} />
                <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(3), fontSize: hp(2.5), letterSpacing: wp(0.2) }}>Add New Address</Text>
                <AntDesign name='right' size={hp(2.5)} color={"#FA4A0C"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCurrentLocation} style={{ marginTop: hp(2.5), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: wp(0.1), borderRadius: wp(3), borderColor: "#202020", padding: wp(3) }}>
                <FA name='location-arrow' size={hp(2.5)} color={"#FA4A0C"} />
                <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(3), fontSize: hp(2.5), letterSpacing: wp(0.2) }}>Use Current Location</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CenterBox