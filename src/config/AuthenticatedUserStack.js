import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import Profile from "../screens/profile/Profile";
import EditProfile from "../screens/profile/EditProfile";
import MyAccount from "../screens/profile/MyAccount";
import Addresses from "../screens/profile/Addresses";
import Payments from "../screens/profile/Payments";
import Refunds from "../screens/profile/Refunds";
import AddAddress from "../screens/location/AddAddress";
import Address from "../screens/location/AddressScreen";

import AddCard from "../screens/payments/AddCard";
import AddUpi from "../screens/payments/AddUpi";
import Tracking from "../screens/order/Tracking";
import SearchedRestaurants from "../screens/dashboard/SearchedRestaurants";
import SearchAddresses from "../screens/location/SearchAddresses";
import MenuSearch from "../screens/dashboard/MenuSearch";
import TopRated from "../screens/dashboard/TopRated";
import Nearest from "../screens/dashboard/Nearest";
import PopularBrands from "../screens/dashboard/PopularBrands";
import Restaurant from "../screens/dashboard/Restaurant";
import CartScreen from "../screens/cart/CartScreen";
import Coupons from "../screens/cart/Coupons";





const Stack = createNativeStackNavigator();

const AuthenticatedUserStack = () => {

  return (

    <Stack.Navigator screenOptions={{
      statusBarColor: "#202020"
    }} initialRouteName="MainTabs">


      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{
          headerShown: false,
          presentation: "card",
          animation: "fade_from_bottom",
          animationDuration: 700,
        }}
      />

      <Stack.Screen name="TopRated" component={TopRated} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Nearest" component={Nearest} options={{
        headerShown: false
      }} />
      <Stack.Screen name="PopularBrands" component={PopularBrands} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Restaurant" component={Restaurant} options={{
        headerShown: false
      }} />
      <Stack.Screen name="CartScreen" component={CartScreen} options={{
        headerShown: false,
        presentation: "fullScreenModal",
        animation: "slide_from_bottom",
        animationDuration: 400
      }} />
      <Stack.Screen name="Coupons" component={Coupons} options={{
        headerShown: false,
        presentation: "fullScreenModal",
        animation: "slide_from_bottom",
        animationDuration: 400
      }} />

      <Stack.Screen
        name="SearchMenu"
        component={MenuSearch}
        options={{
          title: 'Search Menu',
          headerShown: false,
          presentation: "modal",
          animation: "fade_from_bottom",
          animationDuration: 400
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Addresses"
        component={Addresses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Refunds"
        component={Refunds}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AddressScreen"
        component={Address}
        options={{
          headerShown: false,
          presentation: "modal",
          animation: "fade_from_bottom",
          animationDuration: 8000
        }}
      />
      <Stack.Screen
        name="SearchAddresses"
        component={SearchAddresses}
        options={{
          headerShown: false, presentation: "modal",
          animation: "fade_from_bottom",
          animationDuration: 8000
        }}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddUpi"
        component={AddUpi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tracking"
        component={Tracking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchedRestaurants"
        component={SearchedRestaurants}
        options={{
          headerShown: false,
          presentation: "modal",
          animation: "slide_from_bottom",
          animationDuration: 400
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthenticatedUserStack
