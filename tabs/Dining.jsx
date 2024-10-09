import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/dashboard';

const Stack = createNativeStackNavigator();


const Dining = () => {
    return (

        <Stack.Navigator
            screenOptions={{
                statusBarColor: "#000"
            }}
        >
            <Stack.Screen name="Home" component={DashboardScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>

    )
}

export default Dining

