import { Image, ScrollView, View } from 'react-native'
import Typography from '../../components/Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../../components/common/profile/payments/Header';
import SavedCards from '../../components/common/profile/payments/SavedCards';
import Wallets from '../../components/common/profile/payments/Wallets';

const Payments = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Header />
            <SavedCards />
            <Wallets />
        </ScrollView>
    )
}

export default Payments









