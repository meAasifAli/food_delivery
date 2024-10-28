import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/user/dashboard';
import TopRated from '../screens/user/TopRated';
import Nearest from '../screens/user/Nearest';
import PopularBrands from '../screens/user/PopularBrands';
import Category from '../screens/user/Category';
import Restaurant from '../screens/user/Restaurant';

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
            <Stack.Screen name="TopRated" component={TopRated} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Nearest" component={Nearest} options={{
                headerShown: false
            }} />
            <Stack.Screen name="PopularBrands" component={PopularBrands} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Category" component={Category} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Restaurant" component={Restaurant} options={{
                headerShown: false
            }} />
        </Stack.Navigator>

    )
}

export default Dining

