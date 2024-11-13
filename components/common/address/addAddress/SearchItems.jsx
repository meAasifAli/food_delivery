import { Text, View } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'

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

export default SearchItems