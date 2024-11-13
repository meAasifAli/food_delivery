import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Typography from '../../Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Completed = () => {
    return (
        <ScrollView style={{ display: "flex", flexDirection: "column", marginBottom: hp(2) }}>
            <View style={{ height: hp(40), backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center", gap: hp(2) }}>
                <Typography maxW={wp(80)} ta={"center"} title={"YOUR ORDER HAS BEEN DELIVERED!"} ff={"OpenSans-Medium"} fw={400} size={hp(5)} lh={wp(hp(1.5))} color={"#fff"} />
                <Image style={{ height: 50, width: 50, objectFit: "contain" }} source={require("../../../assets/images/completed.png")} />
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: hp(2) }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                    <View>
                        <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../../assets/images/arrived.png")} />
                    </View>
                    <View>
                        <Typography size={hp(3)} title={'Order Delivered Successfully'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3.5)} />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                    <View>
                        <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../../assets/images/shopping-bag.png")} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                        <Typography size={hp(2)} title={'4 Items'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3.5)} />
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                            <Typography size={hp(2)} title={'Details'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(2)} />
                            <Entypo name='chevron-down' color={"#202020"} size={hp(2.5)} />
                        </View>
                    </View>
                </View>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1), }}>
                    <View>
                        <Typography size={hp(2)} title={'Tip delivery Rider?'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3.5)} />
                    </View>
                    <View >

                        <Text style={{ color: "#FA4A0C", }}>ADD TIP</Text>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: wp(4), padding: wp(2), borderWidth: wp(0.1), width: wp(90), marginHorizontal: "auto", borderRadius: wp(2) }}>
                    <View>
                        <Typography size={hp(2)} title={'Rate Food'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3.5)} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: wp(4), padding: wp(2), borderWidth: wp(0.1), width: wp(90), marginHorizontal: "auto", borderRadius: wp(2) }}>
                    <View>
                        <Typography size={hp(2)} title={'Rate Us'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3.5)} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                    </View>
                </View>
            </View >
        </ScrollView>
    )
}

export default Completed

const styles = StyleSheet.create({})