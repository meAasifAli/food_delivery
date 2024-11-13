import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../../../Typography'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SavedCards = () => {
    const navigation = useNavigation()
    return (
        <View style={{ padding: wp(5) }}>
            <View>
                <Typography ff={"OpenSans-Medium"} title={"Saved Cards"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Cart", { screen: "AddCard" })} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(7), marginTop: hp(4), paddingBottom: hp(1.5), borderBottomColor: "#D6D6D6", borderBottomWidth: wp(0.15) }}>
                <View style={{ borderColor: "#FA4A0C", borderWidth: wp(0.2), padding: wp(2), borderRadius: wp(2) }}>
                    <AntDesign name='plus' color={"#FA4A0C"} size={hp(3)} />
                </View>
                <View>
                    <Typography ff={"OpenSans-Regular"} title={"ADD NEW CARD"} color={"#FA4A0C"} fw={400} size={wp(5)} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SavedCards

const styles = StyleSheet.create({})