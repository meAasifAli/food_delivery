import { StyleSheet, Text, TouchableOpacity, View, Switch, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Typography from '../../components/Typography'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import Modal from "react-native-modal"

const MyAccount = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <OrderMessages />
            <Reminders />
            <WhatsApp />
            <Sms />
            <AccountDeletion />
        </ScrollView>
    )
}

export default MyAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
                <Typography title={"My Account"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
        </View>
    )
}

const OrderMessages = () => {
    return (
        <View style={{ padding: wp(5), borderBottomWidth: wp(0.2), borderBottomColor: "#D6D6D6" }}>
            <View>
                <Typography title={"Order Related  Messages"} color={"#202020"} fw={400} size={wp(4)} ff={"OpenSans-Regular"} />
            </View>
            <View style={{ marginTop: hp(2) }}>
                <Typography title={"Order-related messages are essential to providing service, hence they cannot be disabled."} color={"#000"} fw={400} size={wp(3)} ff={"OpenSans-Regular"} />
            </View>
        </View>
    )
}

const Reminders = () => {
    return (
        <View style={{ padding: wp(5), borderBottomWidth: wp(0.2), borderBottomColor: "#D6D6D6" }}>
            <View>
                <Typography title={"Reminders"} color={"#202020"} fw={400} size={wp(4)} ff={"OpenSans-Regular"} />
            </View>
            <View style={{ marginTop: hp(2) }}>
                <Typography title={"Keep these on to receive offer recommendations & timely reminders"} color={"#000"} fw={400} size={wp(3)} ff={"OpenSans-Regular"} />
            </View>
        </View>
    )
}

const WhatsApp = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: wp(5), borderBottomWidth: wp(0.2), borderBottomColor: "#D6D6D6" }}>
            <Typography title="WhatsApp" ff={"OpenSans-Bold"} fw={500} color={"#000"} size={hp(2.2)} />
            <Switch
                trackColor={{ false: '#D6D6D6', true: '#FA4A0C' }}
                thumbColor={"#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

const Sms = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: wp(5), borderBottomWidth: wp(0.2), borderBottomColor: "#D6D6D6" }}>
            <Typography title="SMS" ff={"OpenSans-Bold"} fw={500} color={"#000"} size={hp(2.2)} />
            <Switch
                trackColor={{ false: '#D6D6D6', true: '#FA4A0C' }}
                thumbColor={"#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

const AccountDeletion = () => {
    const [openModal, setOpenModal] = useState(false)

    const toggleDrawer = () => {
        setOpenModal((prev) => !prev)
    }
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