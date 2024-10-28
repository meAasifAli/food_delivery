import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/user/CartScreen'
import PaymentOptions from '../screens/user/PaymentOptions'
import AddUpi from '../screens/user/AddUpi'
import AddCard from '../screens/user/AddCard'
import NetBanking from '../screens/user/NetBanking'
import Tracking from '../screens/user/Tracking'
// import { useSelector } from 'react-redux'

const cartStack = createNativeStackNavigator()

const CartTab = () => {
    // const { cart } = useSelector((state) => state?.cart)

    return (
        <cartStack.Navigator>
            <cartStack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
            <cartStack.Screen name='PaymentOptions' component={PaymentOptions} options={{ headerShown: false }} />
            <cartStack.Screen name='AddUpi' component={AddUpi} options={{ headerShown: false }} />
            <cartStack.Screen name='AddCard' component={AddCard} options={{ headerShown: false }} />
            <cartStack.Screen name='NetBanking' component={NetBanking} options={{ headerShown: false }} />
            <cartStack.Screen name='Tracking' component={Tracking} options={{ headerShown: false }} />
        </cartStack.Navigator>
    )
}

export default CartTab

