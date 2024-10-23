import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchInput from '../components/SearchInput';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { useState } from 'react';
import OctIcons from 'react-native-vector-icons/Octicons'



const AddAddress = ({ navigation }) => {
    const [searchVal, setSearchVal] = useState("")
    return (
        <View style={styles.container}>
            <Header searchVal={searchVal} setSearchVal={setSearchVal} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    searchVal === "" ? <>
                        <CenterBox navigation={navigation} />
                        <View style={{ paddingVertical: hp(4), display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2), width: wp(80), marginHorizontal: "auto" }}>
                            <View style={{ borderTopColor: "#D6D6D6", borderTopWidth: hp(0.15), flex: 1 }}></View>
                            <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(3), fontSize: hp(2.5), letterSpacing: wp(0.2) }}>Saved Addresses</Text>
                            <View style={{ borderTopColor: "#D6D6D6", borderTopWidth: hp(0.15), flex: 1 }}></View>
                        </View>
                        <SavedAddresses />
                    </> : <SearchItems />
                }
            </ScrollView>
        </View>
    )
}

export default AddAddress

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const Header = ({ searchVal, setSearchVal }) => {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: "#202020", borderBottomEndRadius: wp(10), borderBottomStartRadius: wp(10), paddingHorizontal: wp(5), paddingVertical: hp(4) }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5) }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' color={"#fff"} size={hp(2.5)} />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: hp(2.5), fontFamily: "OpenSans-Medium" }}>Search or Add new address</Text>
            </View>
            <View>
                <SearchInput val={searchVal} onValueChange={(text) => setSearchVal(text)} placeholder="search for area or street" />
            </View>
        </View>
    )
}

const CenterBox = ({ navigation }) => {

    return (
        <View style={{ width: wp(80), marginHorizontal: "auto", marginTop: hp(7), padding: wp(5), elevation: 1, backgroundColor: "#fff", borderRadius: wp(3) }}>
            <TouchableOpacity onPress={() => navigation.navigate("AddressScreen")} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: wp(0.1), borderRadius: wp(3), borderColor: "#202020", padding: wp(3) }}>
                <AntDesign name='plus' size={hp(2.5)} color={"#FA4A0C"} />
                <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(3), fontSize: hp(2.5), letterSpacing: wp(0.2) }}>Add Address</Text>
                <AntDesign name='right' size={hp(2.5)} color={"#FA4A0C"} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: hp(2.5), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: wp(0.1), borderRadius: wp(3), borderColor: "#202020", padding: wp(3) }}>
                <FontAwesome name='location-arrow' size={hp(2.5)} color={"#FA4A0C"} />
                <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(3), fontSize: hp(2.5), letterSpacing: wp(0.2) }}>Use Current Location</Text>
            </TouchableOpacity>
        </View>
    )
}

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

const SearchItems = () => {
    const items = [
        {
            id: 1,
            name: "Shiekh Ul Alam Intl. Airport Srinagar",
            address: "Srinagar, Jammu and Kashmir"
        },
        {
            id: 2,
            name: "Raybit Technologies, Kursu Rajbagh",
            address: "Srinagar, Jammu and Kashmir"
        },
        {
            id: 3,
            name: "City Mall, M.A road",
            address: "Srinagar, Jammu and Kashmir"
        }
    ]
    return (
        <View style={{ display: "flex", flexDirection: "column", gap: wp(3) }}>
            <View>
                {
                    items?.map((item, id) => (
                        <View key={id} style={{ padding: wp(5), display: "flex", flexDirection: "row", alignItems: "center", gap: wp(3) }}>
                            <View  >
                                <Entypo name='location-pin' size={hp(4)} color={"#FA4A0C"} />
                            </View>
                            <View>
                                <Text style={{ fontFamily: "OpenSans-Medium", color: "#000000", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>{item.name}</Text>
                                <Text style={{ fontFamily: "OpenSans-Regular", color: "#6D6D6D", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>{item?.address}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}