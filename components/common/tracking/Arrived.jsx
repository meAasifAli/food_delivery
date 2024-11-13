import { Image, StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Arrived = () => {
    return (
        <View style={{ display: "flex", flexDirection: "column", gap: hp(2) }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../../assets/images/arrived.png")} />
                </View>
                <View>
                    <Typography size={hp(3)} title={'Your Order has Arrived'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../../assets/images/shopping-bag.png")} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                    <Typography size={hp(2)} title={'4 Items'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3)} />
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <Typography size={hp(2)} title={'Details'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3)} />
                        <Entypo name='chevron-down' color={"#202020"} size={hp(2.5)} />
                    </View>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../../assets/images/building.png")} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Typography size={hp(2)} title={'Delivering to: '} ff={"OpenSans-Regular"} color={"#000"} lh={hp(3)} fw={300} />
                    <Typography size={hp(2)} title={'Raybit Technologies'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} fw={600} />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../../assets/images/motorcycle.png")} />
                </View>
                <View>
                    <Typography size={hp(3)} title={'Hi i am Aslam'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} />
                    <Typography maxW={wp(60)} size={hp(1.5)} title={'Your Delivery Partner'} ff={"OpenSans-Regular"} color={"#000"} lh={hp(2)} />
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Feather name='phone-call' size={wp(4)} color={"#000"} />
                </View>
            </View>
        </View >
    )
}

export default Arrived

const styles = StyleSheet.create({})