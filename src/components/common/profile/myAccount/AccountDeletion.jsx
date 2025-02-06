import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Typography from '../../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import MyAccountModal from '../../../../modals/MyAccountModal';


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
            <MyAccountModal openModal={openModal} toggleDrawer={toggleDrawer} />
        </View>
    )
}

export default AccountDeletion

const styles = StyleSheet.create({})