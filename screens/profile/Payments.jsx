import { ScrollView } from 'react-native'
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









