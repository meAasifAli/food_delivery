import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen'
import PaymentOptions from '../screens/PaymentOptions'
import AddUpi from '../screens/AddUpi'
import AddCard from '../screens/AddCard'
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
        </cartStack.Navigator>
    )
}

export default CartTab

