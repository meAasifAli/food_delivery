import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/dashboard';
import TopRated from '../screens/TopRated';
import Nearest from '../screens/Nearest';
import PopularBrands from '../screens/PopularBrands';
import Category from '../screens/Category';
import Restaurant from '../screens/Restaurant';

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

