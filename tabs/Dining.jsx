import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/dashboard/dashboard';
import TopRated from '../screens/dashboard/TopRated';
import Nearest from '../screens/dashboard/Nearest';
import PopularBrands from '../screens/dashboard/PopularBrands';
import Category from '../screens/dashboard/Category';
import Restaurant from '../screens/dashboard/Restaurant';

const Stack = createNativeStackNavigator();


const Dining = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                statusBarColor: "#202020",
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

