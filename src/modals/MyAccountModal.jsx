import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MyAccountModal = ({ openModal, toggleDrawer }) => {
    return (
        <Modal
            isVisible={openModal}
            animationType="slide"
            swipeDirection={"down"}
            onBackdropPress={toggleDrawer}
            animationIn={"slideInUp"}
            animationInTiming={1000}
            animationOut={"slideOutDown"}
            animationOutTiming={1000}
        >
            <View style={{
                backgroundColor: "#fff",
                width: wp(90),
                height: hp(30),
                borderRadius: wp(5),
                padding: wp(3),
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View>
                    <Text style={{ fontFamily: "OpenSans-Regular", color: "black", fontWeight: "700", fontSize: hp(2.5), lineHeight: hp(4), textAlign: "center" }}>Are you sure to delete account?</Text>
                </View>
                <View style={{ marginTop: hp(0.5) }}>
                    <Text style={{ fontFamily: "OpenSans-Regular", color: "black", fontWeight: "700", fontSize: hp(2.5), lineHeight: hp(4), textAlign: "center" }}>Once deleted, this account will lose access to Food Kart</Text>

                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: wp(6), marginTop: hp(6), gap: wp(6) }}>
                    <TouchableOpacity style={{ backgroundColor: "#fff", height: hp(6), borderColor: "#D6D6D6", borderWidth: hp(0.2), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "OpenSans-Regular", color: "#202020", fontWeight: "400", fontSize: hp(2.2) }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#FA4A0C", height: hp(6), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "OpenSans-Regular", color: "#FFFFFF", fontWeight: "400", fontSize: hp(2.2) }}>Delete</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
}

export default MyAccountModal

const styles = StyleSheet.create({})