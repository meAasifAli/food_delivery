import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Fa5 from 'react-native-vector-icons/FontAwesome5'
import Input from './Input'
import Entypo from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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

export default ModalComponent

const styles = StyleSheet.create({})