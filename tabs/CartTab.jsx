import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/cart/CartScreen'

// import { useSelector } from 'react-redux'

const cartStack = createNativeStackNavigator()

const CartTab = () => {
    // const { cart } = useSelector((state) => state?.cart)

    return (
        <cartStack.Navigator>
            <cartStack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
        </cartStack.Navigator>
    )
}

export default CartTab

