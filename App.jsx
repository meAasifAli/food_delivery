import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/landing';
import SignUpScreen from './screens/signup';
import SigninScreen from './screens/signin';
import OtpScreen from './screens/otp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer

    >
      <Stack.Navigator
        screenOptions={{
          statusBarColor: "#000"
        }}
      >
        <Stack.Screen name="landing" component={LandingPage} options={{
          headerShown: false
        }} />
        <Stack.Screen name="signup" component={SignUpScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="signin" component={SigninScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="otp" component={OtpScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

