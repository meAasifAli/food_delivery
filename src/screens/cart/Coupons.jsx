import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux'
import Typography from '../../components/Typography'
import { useContext } from 'react'
import { LocationContext } from '../../context/LocationContext'

const Coupons = ({ navigation }) => {
    const { setOfferCode, offerCode } = useContext(LocationContext)
    const { offers } = useSelector((state) => state?.cart)

    // console.log(offers);

    console.log("offerCode: ", offerCode);


    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <TouchableOpacity onPress={() => navigation?.navigate("CartScreen")}>
                    <AntDesign size={22} color={"#202020"} name='arrowleft' />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold", color: "#000" }}>APPLY COUPON</Text>
                </View>
            </View>
            <FlatList
                contentContainerStyle={{ marginTop: 20 }}
                data={offers}
                keyExtractor={(item) => item?.id}
                renderItem={({ item: offer }) => (
                    <View style={{ marginTop: 10 }}>
                        <View style={{ width: "95%", marginHorizontal: "auto", borderTopEndRadius: 10, borderTopStartRadius: 10, borderStyle: "dashed", borderColor: "#D6D6D6", borderWidth: 1, padding: 10 }}>
                            <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 16, color: "#000" }}>{offer?.code}</Text>
                            <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 12, color: "#000" }}>{offer?.description}</Text>
                        </View>
                        {
                            offerCode === offer?.code ? <Pressable style={{ width: "95%", paddingVertical: 5, marginHorizontal: "auto", backgroundColor: "#000", borderBottomEndRadius: 10, borderBottomStartRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                                <Typography title={"Congrats! you saved ₹100"} ff={"OpenSans-Medium"} lh={32} size={16} color={"#fff"} fw={300} />
                            </Pressable> : <Pressable onPress={() => setOfferCode(offer?.code)} style={{ width: "95%", paddingVertical: 5, marginHorizontal: "auto", backgroundColor: "#FA4A0C", borderBottomEndRadius: 10, borderBottomStartRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                                <Typography title={"Apply"} ff={"OpenSans-Medium"} lh={32} size={16} color={"#fff"} fw={300} />
                            </Pressable>
                        }
                    </View>
                )}
            />
        </View>
    )
}

export default Coupons

