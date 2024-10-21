import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from './screens/landing';
import SignUpScreen from './screens/signup';
import SigninScreen from './screens/signin';
import OtpScreen from './screens/otp';
import Dining from './tabs/Dining';
import Cart from './tabs/CartTab';
import Reorder from './tabs/Reorder';
import { View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Provider } from 'react-redux';
import { store } from './store/store';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import MyAccount from './screens/MyAccount';
import Addresses from './screens/Addresses';
import Pyaments from './screens/Payments';
import Payments from './screens/Payments';
import Refunds from './screens/Refunds';

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Dining'
      screenOptions={{
        tabBarActiveTintColor: '#FA4A0C',
        tabBarInactiveTintColor: '#202020',
        headerShown: false,
        tabBarStyle: {
          height: hp(12),
          paddingBottom: hp(2),
        },
        tabBarLabelStyle: {
          fontFamily: "OpenSans-Regular",
          fontWeight: "600",
          fontSize: wp(3.5)
        },
        tabBarLabelPosition: "below-icon",
        tabBarHideOnKeyboard: true,
        tabBarVisibilityAnimationConfig: {
          show: true
        }
      }}
    >
      <Tab.Screen name='Dining' component={Dining} options={{
        title: "Dining",
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => (
          <View
            style={[styles.activeTab,
            {
              backgroundColor: focused ? '#E8DEF8' : '#fff',
            }
            ]}
          >
            <MaterialIcon name='local-dining' size={size} color={color} />
          </View>
        )
      }} />
      <Tab.Screen name='Cart' component={Cart} options={{
        title: "Cart",
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => (
          <View
            style={[styles.activeTab,
            {
              backgroundColor: focused ? '#E8DEF8' : '#fff',
            }
            ]}
          >
            <AntDesign name='shoppingcart' size={size} color={color} />
          </View>
        )
      }} />
      <Tab.Screen name='Reorder' component={Reorder} options={{
        title: "Reorder",
        tabBarIcon: ({ color, size, focused }) => (
          <View
            style={[styles.activeTab,
            {
              backgroundColor: focused ? '#E8DEF8' : '#fff',
            }
            ]}
          >
            <Fontisto name='spinner-rotate-forward' size={size} color={color} />
          </View>
        )
      }} />
    </Tab.Navigator>
  )
}

const AuthenticatedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={Profile} options={{
      title: "Profile",
      headerShown: false
    }} />
    <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
    <Stack.Screen name='MyAccount' component={MyAccount} options={{ headerShown: false }} />
    <Stack.Screen name='Addresses' component={Addresses} options={{ headerShown: false }} />
    <Stack.Screen name='Payments' component={Payments} options={{ headerShown: false }} />
    <Stack.Screen name='Refunds' component={Refunds} options={{ headerShown: false }} />
  </Stack.Navigator>
);


const App = () => {
  isAuthenticated = !false;
  return isAuthenticated ? (
    <Provider store={store}>
      <NavigationContainer>
        <AuthenticatedStack />
      </NavigationContainer>
    </Provider>

  ) : (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarColor: '#000',
        }}>
        <Stack.Screen
          name="landing"
          component={LandingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="signin"
          component={SigninScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="otp"
          component={OtpScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  activeTab: {
    width: 64,
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16
  }
})