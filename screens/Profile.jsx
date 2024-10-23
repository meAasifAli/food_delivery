import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../components/Typography';

const Profile = () => {
    const navigation = useNavigation()
    const Items = [
        {
            id: 1,
            title: "My Account",
            href: "MyAccount"
        },
        {
            id: 2,
            title: "Addresses",
            href: "Addresses"
        },
        {
            id: 3,
            title: "Payments",
            href: "Payments"
        },
        {
            id: 4,
            title: "Refunds",
            href: "Refunds"
        },
    ]
    return (
        <ScrollView style={styles.container}>
            <Header />
            <SecondaryHeader />
            <View style={{ borderBottomWidth: wp(0.2), marginVertical: hp(1) }}></View>
            <View>
                {
                    Items.map((item, id) => (
                        <TouchableOpacity onPress={() => navigation.navigate(item?.href)} key={id} style={{ borderBottomColor: "#202020B2", borderBottomWidth: wp(0.2), display: "flex", flexDirection: "row", paddingVertical: hp(3), paddingHorizontal: wp(3), alignItems: "center", justifyContent: "space-between" }}>
                            <Typography title={item.title} ff={"OpenSans-Regular"} color={"#202020"} fw={300} size={hp(2.5)} lh={hp(3)} />
                            <AntDesign name='right' color={"#202020"} size={wp(4)} />
                        </TouchableOpacity>
                    ))
                }
            </View>
            <OrderHistory />
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp(3)
    }
})

const Header = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' color={"#202020"} size={wp(5)} />
        </TouchableOpacity>
    )
}

const SecondaryHeader = () => {
    const navigation = useNavigation()
    return (
        <View style={{
            marginTop: hp(2), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"
        }}>
            <View>
                <Typography title={"Aasif Ali"} ff={"OpenSans-Medium"} color={"#000"} fw={400} size={hp(3)} lh={hp(3.5)} />
                <Typography title={"+91-7889423564"} ff={"OpenSans-Regular"} color={"#202020B2"} fw={400} size={hp(2)} lh={hp(2.5)} />
                <Typography title={"aasif@gmail.com"} ff={"OpenSans-Regular"} color={"#202020B2"} fw={400} size={hp(2)} lh={hp(2.5)} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                <Typography title={"Edit Profile"} ff={"OpenSans-Regular"} color={"#FA4A0C"} fw={400} size={hp(2.5)} lh={hp(3.5)} />
            </TouchableOpacity>
        </View>
    )
}

const OrderHistory = () => {
    return (
        <View style={{ marginTop: hp(6) }}>
            <View>
                <Typography title={"Recent Orders"} ff={"OpenSans-Medium"} color={"#202020"} fw={400} size={hp(3)} lh={hp(3.5)} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ borderStyle: "dashed", borderTopWidth: hp(0.1), marginTop: hp(1) }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: hp(2) }}>
                    <View>
                        <Typography title={"Biryani House"} ff={"OpenSans-Regular"} color={"#202020"} fw={400} size={hp(2.5)} lh={hp(2.5)} />
                        <Typography title={"Kursu Rajbagh"} ff={"OpenSans-Regular"} color={"#202020"} fw={400} size={hp(2)} lh={hp(2.5)} />
                        <Typography title={"Rs. 549"} ff={"OpenSans-Regular"} color={"#202020"} fw={400} size={hp(2)} lh={hp(2.5)} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <Typography title={"Delivered"} ff={"OpenSans-Regular"} color={"#202020"} fw={400} size={hp(2)} lh={hp(2.5)} />
                        <Image style={{ width: wp(4), height: hp(4), objectFit: "contain" }} source={require("../assets/images/completed.png")} />
                    </View>
                </View>
                <View style={{ marginTop: hp(3) }}>
                    <Typography title={"Pizza (1), Rista (3), Mint Mojito (1)"} ff={"OpenSans-Regular"} color={"#202020"} fw={300} size={hp(2)} lh={hp(2.5)} />
                </View>
                <View style={{ marginTop: hp(3) }}>
                    <Typography title={"May 27, 10:30 PM"} ff={"OpenSans-Regular"} color={"#202020"} fw={300} size={hp(1.8)} lh={hp(2)} />
                </View>
                <View style={{
                    marginTop: hp(3), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }}>
                    <TouchableOpacity style={{ backgroundColor: "#FA4A0C", height: hp(4), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "OpenSans-Regular", color: "#FFFFFF", fontWeight: "400", fontSize: hp(2.2) }}>Reorder</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#fff", height: hp(4), borderColor: "#D6D6D6", borderWidth: hp(0.2), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "OpenSans-Regular", color: "#202020", fontWeight: "400", fontSize: hp(2.2) }}>Rate Food</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}