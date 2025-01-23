import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Fa5 from 'react-native-vector-icons/FontAwesome5'
import ModalComponent from './ModalComponent';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Bottom = ({ openModal, setOpenModal, pinLocation }) => {
    const { address } = useSelector((state) => state.address)
    const navigation = useNavigation()


    // console.log("Address: ", address);


    return (
        <View style={{ padding: wp(4), bottom: 0, width: "100%", backgroundColor: "white", }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5) }}>
                    <View>
                        <Fa5 name='location-arrow' size={hp(3)} color={'#FA4A0C'} />
                    </View>
                    <View style={{ maxWidth: "70%" }}>
                        <Text style={{ fontFamily: "OpenSans-Bold", color: "#000000", lineHeight: 27, fontSize: 16, letterSpacing: wp(0.2) }}>{address?.split(",")[0]}</Text>
                        <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: 16, fontSize: 12, }}>{address}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        paddingHorizontal: wp(4),
                        paddingVertical: wp(2),
                        borderRadius: wp(1.5),
                        // Shadow for iOS
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        // Shadow for Android
                        elevation: 3,
                        backgroundColor: "#fff",
                    }}>
                    <Text style={{ fontFamily: "OpenSans-Medium", color: "#000", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>Change</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={() => setOpenModal(true)} style={{ width: wp(92), height: hp(7), backgroundColor: "#FA4A0C", borderRadius: wp(2), marginTop: hp(3), alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }}>
                <Text style={{ fontFamily: "OpenSans-Medium", color: "#fff", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>Enter more address details </Text>
            </TouchableOpacity>
            <ModalComponent pinLocation={pinLocation} openModal={openModal} setOpenModal={setOpenModal} />
        </View>
    )
}

export default Bottom

const styles = StyleSheet.create({})