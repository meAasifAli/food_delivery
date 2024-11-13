import { ScrollView, StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Header from '../../components/common/paymentOtions/Header'
import DeliveryTracking from '../../components/common/paymentOtions/DeliveryTracking'
import PreferredPayment from '../../components/common/paymentOtions/PreferredPayment'
import Upi from '../../components/common/paymentOtions/Upi'
import CreditandDebitCards from '../../components/common/paymentOtions/CreditandDebitCards'
import MoreOptions from '../../components/common/paymentOtions/MoreOptions';



const PaymentOptions = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {/* header */}
            <Header />
            {/* Tracking */}
            <DeliveryTracking />

            {/* Divider */}
            <View style={{ flex: 1, borderStyle: "dashed", borderColor: "#6D6D6D80", borderBottomWidth: wp(0.2), paddingVertical: hp(2) }}>
            </View>
            {/* preffered Payment */}
            <PreferredPayment />
            {/* UPI ID Box */}
            <Upi />
            {/* Credit and Debit Cards */}
            <CreditandDebitCards />
            {/* More payment Options */}
            <MoreOptions />
        </ScrollView>
    )
}

export default PaymentOptions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

})









