import { Pressable, StyleSheet, Text, View } from 'react-native'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Offers = () => {
    return (
        <View style={{ marginTop: 30 }}>
            <View style={{ marginLeft: "2%" }}>
                <Typography title={"Offers for you"} ff={"OpenSans_Regular"} lh={32} size={24} fw={400} color={"#000"} />
            </View>
            <View style={{ width: "95%", height: hp(15), marginHorizontal: "auto", borderTopEndRadius: 10, borderTopStartRadius: 10, borderStyle: "dashed", borderColor: "#D6D6D6", marginTop: 30, borderWidth: 1, padding: hp(4) }}>
                <Typography title={"WELCOME100"} ff={"OpenSans_Bold"} lh={hp(3.5)} size={hp(3)} fw={400} color={"#000"} />
                <Typography title={"Save Another 50"} ff={"OpenSans_Regular"} lh={hp(3)} size={hp(2.5)} fw={200} color={"#000"} />
            </View>
            <Pressable style={{ width: "95%", height: hp(7), marginHorizontal: "auto", backgroundColor: "#FA4A0C", borderBottomEndRadius: 10, borderBottomStartRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <Typography title={"Apply"} ff={"OpenSans_Regular"} lh={32} size={20} color={"#fff"} fw={300} />
            </Pressable>
        </View>
    )
}

export default Offers

const styles = StyleSheet.create({})