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
import PaymentOptions from "../screens/payments/PaymentOptions";
import AddCard from "../screens/payments/AddCard";
import AddUpi from "../screens/payments/AddUpi";
import NetBanking from "../screens/payments/NetBanking";
import Tracking from "../screens/order/Tracking";
import SearchedRestaurants from "../screens/dashboard/SearchedRestaurants";
import SearchAddresses from "../screens/location/SearchAddresses";


const Stack = createNativeStackNavigator();

const AuthenticatedUserStack = () => (
  <Stack.Navigator screenOptions={{
    statusBarColor: "#202020"
  }} initialRouteName="MainTabs">
    <Stack.Screen
      name="MainTabs"
      component={TabNavigator}
      options={{ headerShown: false }}
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
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddressScreen"
      component={Address}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SearchAddresses"
      component={SearchAddresses}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PaymentOptions"
      component={PaymentOptions}
      options={{ headerShown: false }}
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
      name="NetBanking"
      component={NetBanking}
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
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthenticatedUserStack
