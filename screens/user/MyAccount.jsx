import { StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/common/profile/myAccount/Header'
import OrderMessages from '../../components/common/profile/myAccount/OrderMessages';
import Reminders from '../../components/common/profile/myAccount/Reminders';
import WhatsApp from '../../components/common/profile/myAccount/WhatsApp';
import Sms from '../../components/common/profile/myAccount/Sms';
import AccountDeletion from '../../components/common/profile/myAccount/AccountDeletion';
import { useState } from 'react';

const MyAccount = () => {
    const [openModal, setOpenModal] = useState(false)

    const toggleDrawer = () => {
        setOpenModal((prev) => !prev)
    }
    return (
        <ScrollView style={styles.container}>
            <Header />
            <OrderMessages />
            <Reminders />
            <WhatsApp />
            <Sms />
            <AccountDeletion openModal={openModal} toggleDrawer={toggleDrawer} />
        </ScrollView>
    )
}

export default MyAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


