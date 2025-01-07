import { View } from 'react-native'
import Typography from '../../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Wallet from './Wallet';

const Wallets = () => {
    return (
        <View style={{ marginTop: hp(3), padding: wp(5) }}>
            <View>
                <Typography ff={"OpenSans-Medium"} title={"Wallets"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
            <View style={{ marginTop: hp(4) }}>
                <Wallet img={require("../../../../assets/images/paytm_logo.png")} color title={"Paytm Wallet"} />
                <Wallet img={require("../../../../assets/images/amazon_pay.png")} color title={"AmazonPay"} />
                <Wallet img={require("../../../../assets/images/phonepe_logo.png")} color title={"PhonePe"} />
                <Wallet img={require("../../../../assets/images/mobikwik.png")} color title={"Mobikwik"} />
            </View>
        </View>
    )
}

export default Wallets