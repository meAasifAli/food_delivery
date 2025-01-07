import { useNavigation } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View, Share, Alert } from "react-native"
import Typography from "../../../Typography"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import useDeleteAddress from "../../../../hooks/useDeleteAddress"

const AddressCard = ({ img, title, address, Phone, item }) => {


    const navigation = useNavigation()
    const { loading, handleDeleteAddress } = useDeleteAddress()
    const handleShareAddress = async () => {
        const response = await Share.share({
            message: address
        })
        if (response?.activityType === Share.sharedAction) {
            Alert.alert("Your Address has been Shared")
        }
    }


    const handleDeletion = async (id) => {
        await handleDeleteAddress(id)
    }
    return (
        <View style={{ display: "flex", flexDirection: "column", gap: hp(2), elevation: 3, backgroundColor: "#fff", width: "90%", marginHorizontal: "auto", marginBottom: 20, borderRadius: 15 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5), padding: 15, borderBottomWidth: 0.5, borderStyle: "dotted", borderBottomColor: "#000" }}>
                <Image source={img} style={{ width: wp(5), height: hp(5), objectFit: "contain" }} />
                <Typography title={title} color={"#000000"} ff={"OpenSans-Medium"} fw={400} lh={hp(2.5)} size={hp(2)} />
                {
                    item?.selected === 1 && <>
                        <Text style={{ color: "#FA4A0C", fontSize: hp(2), fontWeight: "600", fontFamily: "OpenSans-Bold" }}>&middot;</Text>
                        <Text style={{ color: "#FA4A0C", fontSize: hp(2), fontWeight: "600", fontFamily: "OpenSans-Bold" }}>{item?.selected === 1 ? "current" : ""}</Text>
                    </>
                }
            </View>
            <View style={{ paddingHorizontal: wp(5) }}>
                <Typography title={address} color={"#000000"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
            </View>
            <View style={{ paddingHorizontal: wp(5) }}>
                <Typography title={`ph. no : ${Phone}`} color={"#000000"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
            </View>
            <View style={{ marginHorizontal: wp(5), display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: hp(2), paddingBottom: hp(2), borderBottomWidth: hp(0.1), borderBottomColor: "#D6D6D6" }}>
                <TouchableOpacity onPress={() => navigation.navigate("AddressScreen")}>
                    <Typography title={"EDIT"} color={"#FA4A0C"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeletion(item?.id)}>
                    <Typography title={"DELETE"} color={"#FA4A0C"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShareAddress}>
                    <Typography title={"SHARE"} color={"#FA4A0C"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddressCard