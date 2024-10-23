import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SearchInput from '../components/SearchInput'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { Marker } from 'react-native-maps';
import Fa5 from 'react-native-vector-icons/FontAwesome5'
import Modal from 'react-native-modal';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo'


const Address = () => {
    const [openModal, setOpenModal] = useState(false)
    // const { location } = useContext(LocationContext)
    return (
        <View style={{ flex: 1, position: "relative" }}>
            <Header isHidden={openModal} />
            <MapComponent />
            <BottomComponent openModal={openModal} setOpenModal={setOpenModal} />
        </View>
    )
}

export default Address


const Header = ({ isHidden }) => {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: "#202020", borderBottomEndRadius: wp(10), borderBottomStartRadius: wp(10), paddingHorizontal: wp(5), paddingVertical: hp(4) }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5) }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' color={"#fff"} size={hp(2.5)} />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: hp(2.5), fontFamily: "OpenSans-Medium" }}>Search or Add new address</Text>
            </View>
            <View>
                {!isHidden && <SearchInput placeholder="search for area or street" />}
            </View>
        </View>
    )
}

const Input = ({ placeholder }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ paddingVertical: hp(1) }}>
            <TextInput placeholderTextColor={"#FFFFFF"} style={{ paddingVertical: hp(2), paddingHorizontal: wp(2), borderWidth: wp(0.1), borderColor: "#D6D6D680", fontFamily: "OpenSans-Regular", lineHeight: hp(3), fontSize: hp(2), color: "#fff", borderRadius: wp(3) }} placeholder={placeholder} />
        </KeyboardAvoidingView>
    )
}

const MapComponent = () => {
    return (
        <MapView
            showsUserLocation={true}
            initialRegion={
                {
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }
            }
            style={{
                flex: 1
            }}>
            <Marker coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }} title='Order Will be delivered here' />
        </MapView>
    )
}

const ModalComponent = ({ openModal, setOpenModal }) => {
    return (
        <Modal
            avoidKeyboard={true}
            backdropColor='transparent'
            backdropOpacity={0.50}
            animationIn={"slideInUp"}
            animationInTiming={1000}
            animationOut={"slideOutDown"}
            animationOutTiming={1000}
            isVisible={openModal}
            onBackdropPress={() => setOpenModal(false)}
            style={{ justifyContent: 'flex-end', margin: 0 }} // Adjust the position to bottom
        >
            <View
                style={{ width: "100%", backgroundColor: "#202020", borderTopLeftRadius: wp(3), borderTopRightRadius: wp(3) }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ padding: wp(5) }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(10) }}>
                        <View>
                            <Fa5 name='location-arrow' color={"#FA4A0C"} size={hp(3)} />
                        </View>
                        <View>
                            <Text style={{ fontFamily: "OpenSans-Bold", color: "#fff", lineHeight: hp(2.5), fontSize: hp(1.7), letterSpacing: wp(0.2) }}>Kursu Rajbagh</Text>
                            <Text style={{ fontFamily: "OpenSans-Regular", color: "#fff", lineHeight: hp(2.8), fontSize: hp(1.5), letterSpacing: wp(0.2) }}>Srinagar</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: hp(2), display: "flex", justifyContent: "center", alignItems: "center", maxWidth: wp(75), marginHorizontal: "auto" }}>
                        <Text style={{ fontFamily: "OpenSans-Italic", textAlign: "center", color: "#fff", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>Please Provide Your Full Address for Fast and Accurate Delivery!</Text>
                    </View>
                    <View style={{ marginTop: hp(2) }}>
                        <Input placeholder={"House / Flat / Floor no"} />
                        <Input placeholder={"Area / Sector / Locality"} />
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: hp(2), gap: wp(4) }}>
                            <View style={{ flex: 1, borderBlockColor: "#fff", borderStyle: "dashed", borderBottomWidth: wp(0.2) }}></View>
                            <Text style={{ color: "white", fontFamily: "OpenSans-Regular", fontSize: hp(1.7) }}>May be Used to assist Delivery</Text>
                            <View style={{ flex: 1, borderBlockColor: "#fff", borderStyle: "dashed", borderBottomWidth: wp(0.2) }}></View>
                        </View>
                        <Input placeholder={"Receiver’s Number (OPTIONAL)"} />
                        <Input placeholder={"Receiver’s Number (OPTIONAL)"} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: hp(1.5) }}>
                        <TouchableOpacity style={{ backgroundColor: "#fff", paddingVertical: hp(1.5), paddingHorizontal: wp(5), borderRadius: wp(2), display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                            <Entypo name="home" color={"#FA4A0C"} size={hp(2)} />
                            <Text style={{ color: "#000", fontFamily: "OpenSans-Medium", fontSize: hp(1.8) }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#fff", paddingVertical: hp(1.5), paddingHorizontal: wp(5), borderRadius: wp(2), display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                            <Fa5 name="building" color={"#FA4A0C"} size={hp(2)} />
                            <Text style={{ color: "#000", fontFamily: "OpenSans-Medium", fontSize: hp(1.8) }}>Work</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: "#FA4A0C", paddingVertical: hp(2), paddingHorizontal: wp(5), borderRadius: wp(2), marginTop: hp(1) }}>
                        <Text style={{ color: "#fff", textAlign: "center", fontFamily: "OpenSans-Medium", fontSize: hp(1.8) }}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Modal>
    )
}

const BottomComponent = ({ openModal, setOpenModal }) => {
    return (
        <View style={{ position: "absolute", padding: wp(4), bottom: 0, width: "100%", height: hp(20), backgroundColor: "white", }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5) }}>
                    <View>
                        <Fa5 name='location-arrow' size={hp(3)} color={'#FA4A0C'} />
                    </View>
                    <View>
                        <Text style={{ fontFamily: "OpenSans-Bold", color: "#000000", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>Kursu Rajbagh</Text>
                        <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>Srinagar</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{
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
            </View>
            <TouchableOpacity onPress={() => setOpenModal(true)} style={{ width: wp(92), height: hp(7), backgroundColor: "#FA4A0C", borderRadius: wp(2), marginTop: hp(3), alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }}>
                <Text style={{ fontFamily: "OpenSans-Medium", color: "#fff", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>Enter more address details </Text>
            </TouchableOpacity>
            <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
        </View>
    )
}