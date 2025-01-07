import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../screens/auth/landing";
import OtpScreen from "../screens/auth/otp";
import SigninScreen from "../screens/auth/signin";
import SignUpScreen from "../screens/auth/signup";


const Stack = createNativeStackNavigator()

const UnAuthenticatedUserStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                statusBarColor: '#000',
            }}>
            <Stack.Screen
                name="landing"
                component={LandingPage}
                options={{
                    headerShown: false,
                    presentation: "containedModal",
                    animation: "fade_from_bottom",
                    animationDuration: 400,
                }}
            />
            <Stack.Screen
                name="signup"
                component={SignUpScreen}
                options={{
                    headerShown: false,
                    presentation: "formSheet",
                    animation: "slide_from_left",
                    animationDuration: 400
                }}
            />

            <Stack.Screen
                name="signin"
                component={SigninScreen}
                options={{
                    headerShown: false,
                    presentation: "formSheet",
                    animation: "slide_from_right",
                    animationDuration: 400
                }}
            />
            <Stack.Screen
                name="otp"
                component={OtpScreen}
                options={{
                    headerShown: false,
                    presentation: "formSheet",
                    animation: "slide_from_right",
                    animationDuration: 400
                }}
            />
        </Stack.Navigator>
    );
};

export default UnAuthenticatedUserStack