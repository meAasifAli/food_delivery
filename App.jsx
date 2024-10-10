import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from './screens/landing';
import SignUpScreen from './screens/signup';
import SigninScreen from './screens/signin';
import OtpScreen from './screens/otp';
import Dining from './tabs/Dining';
import Cart from './tabs/Cart';
import Reorder from './tabs/Reorder';
import { View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const App = () => {
  isAuthenticated = !false;
  return isAuthenticated ? (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Dining'
        screenOptions={{
          tabBarActiveTintColor: '#FA4A0C',
          tabBarInactiveTintColor: '#202020',
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            height: 80,
            paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontFamily: "OpenSans-Regular",
            fontWeight: "600"
          },

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
    </NavigationContainer>

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