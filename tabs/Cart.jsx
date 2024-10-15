import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen'
// import { useSelector } from 'react-redux'

const cartStack = createNativeStackNavigator()

const CartTab = () => {
    // const { cart } = useSelector((state) => state?.cart)

    return (
        <cartStack.Navigator>
            <cartStack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
        </cartStack.Navigator>
    )
}

export default CartTab

const styles = StyleSheet.create({})