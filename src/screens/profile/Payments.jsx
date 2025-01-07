import { ScrollView, View } from 'react-native'
import Header from '../../components/common/profile/payments/Header';
import SavedCards from '../../components/common/profile/payments/SavedCards';
import Wallets from '../../components/common/profile/payments/Wallets';

const Payments = () => {

    return (
        <View>
            <Header />
            <ScrollView>
                <SavedCards />
                <Wallets />
            </ScrollView>
        </View>
    )
}

export default Payments









