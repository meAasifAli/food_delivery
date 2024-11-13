import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Typography from '../../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const AccountDeletion = ({ openModal, toggleDrawer }) => {

    return (
        <View style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: wp(5), borderBottomWidth: wp(0.2), borderBottomColor: "#D6D6D6", marginTop: hp(3) }}>
            <Typography title="ACCOUNT DELETION" ff={"OpenSans-Regular"} fw={500} color={"#000"} size={hp(2.2)} />
            <TouchableOpacity onPress={toggleDrawer} style={{ marginTop: hp(3) }}>
                <Typography title="Delete Account?" ff={"OpenSans-Regular"} color={"#FA4A0C"} size={hp(2.2)} />
            </TouchableOpacity>
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
                        <Typography ta={"center"} size={hp(2.5)} color={"black"} lh={hp(4)} fw={700} ff={"OpenSans-Regular"} title={"Are you sure to delete account?"} />
                    </View>
                    <View style={{ marginTop: hp(0.5) }}>
                        <Typography ta={"center"} size={hp(2)} color={"black"} fw={400} ff={"OpenSans-Regular"} lh={hp(3)} title={"Once deleted, this account will lose access to Food Kart"} />
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
        </View>
    )
}

export default AccountDeletion

const styles = StyleSheet.create({})