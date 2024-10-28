import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Typography from '../../components/Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Refunds = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={{ marginTop: hp(5), maxWidth: wp(90), marginHorizontal: "auto" }}>
                <Typography ta={"center"} title={"All the refunds will be directed to the original payment source"} color={"#202020"} fw={400} size={wp(5)} ff={"OpenSans-Regular"} />
            </View>
            <View style={{ marginTop: hp(10), width: wp(90), marginHorizontal: "auto", borderBottomWidth: hp(0.1), paddingBottom: hp(1) }}>
                <Typography ta={"center"} title={"You don’t have any past refund"} color={"#202020"} fw={300} size={wp(4.2)} ff={"OpenSans-Regular"} />
            </View>
        </ScrollView >
    )
}

export default Refunds

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5), borderStyle: "dashed", borderBottomWidth: wp(0.2), padding: wp(5) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name='arrowleft' size={hp(3)} color={"#202020"} />
            </TouchableOpacity>
            <View>
                <Typography title={"Refunds"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
        </View>
    )
}
