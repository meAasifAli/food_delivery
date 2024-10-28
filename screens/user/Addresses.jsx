import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import Typography from '../../components/Typography'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Addresses = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={{ padding: wp(5) }}>
                <Typography title={"Saved Addresses"} ff={"OpenSans-Regular"} color={"#000000"} fw={300} size={hp(2.3)} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AddressCard title={"Home"} Phone={"7889423564"} address={"Nowgam, Srinagar, J&K, 191113 "} img={require("../../assets/images/home.png")} />
                <AddressCard title={"Work"} Phone={"7889423564"} address={"Kursoo Rajbagh, Srinagar, J&K, 190008 "} img={require("../../assets/images/building.png")} />
            </ScrollView>
        </ScrollView>
    )
}

export default Addresses

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
                <Typography title={"Addresses"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
        </View>
    )
}

const AddressCard = ({ img, title, address, Phone }) => {
    return (
        <View style={{ display: "flex", flexDirection: "column", gap: hp(2) }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5), padding: wp(5) }}>
                <Image source={img} style={{ width: wp(5), height: hp(5), objectFit: "contain" }} />
                <Typography title={title} color={"#000000"} ff={"OpenSans-Medium"} fw={400} lh={hp(2.5)} size={hp(2)} />
            </View>
            <View style={{ paddingHorizontal: wp(5) }}>
                <Typography title={address} color={"#000000"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
            </View>
            <View style={{ paddingHorizontal: wp(5) }}>
                <Typography title={`ph. no : ${Phone}`} color={"#000000"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
            </View>
            <View style={{ marginHorizontal: wp(5), display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: hp(2), paddingBottom: hp(2), borderBottomWidth: hp(0.1), borderBottomColor: "#D6D6D6" }}>
                <TouchableOpacity>
                    <Typography title={"EDIT"} color={"#FA4A0C"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Typography title={"DELETE"} color={"#FA4A0C"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Typography title={"SHARE"} color={"#FA4A0C"} ff={"OpenSans-Regular"} fw={400} lh={hp(2.5)} size={hp(2)} />
                </TouchableOpacity>
            </View>
        </View>
    )
}