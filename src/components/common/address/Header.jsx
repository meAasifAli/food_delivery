import { Keyboard, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import SearchInput from '../../SearchInput'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
const Header = ({ isHidden }) => {
    const navigation = useNavigation()
    const [searchVal, setSearchVal] = useState("")

    const onFocus = () => {
        Keyboard.dismiss()
        navigation.navigate("SearchAddresses")
    }
    return (
        <View style={{ backgroundColor: "#202020", borderBottomEndRadius: wp(10), borderBottomStartRadius: wp(10), paddingHorizontal: wp(5), paddingVertical: hp(4) }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5) }}>
                <TouchableOpacity onPress={() => navigation.navigate("AddAddress")}>
                    <Ionicons name='arrow-back' color={"#fff"} size={hp(2.5)} />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: hp(2.5), fontFamily: "OpenSans-Medium" }}>Search or Add new address</Text>
            </View>
            <View>
                {!isHidden && <SearchInput val={searchVal} onValueChange={(text) => setSearchVal(text)} handleFocus={onFocus} placeholder="search for area or street" />}
            </View>
        </View>
    )
}

export default Header