import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dining from "../tabs/Dining";
import Reorder from "../tabs/Reorder";
import { View, StyleSheet, Easing } from "react-native";
import Cart from "../tabs/Cart";
import { Image } from "react-native";


const Tab = createBottomTabNavigator()

export const TabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName="Dining"
            screenOptions={{
                tabBarActiveTintColor: '#FA4A0C',
                tabBarInactiveTintColor: '#888080',
                headerShown: false,
                tabBarStyle: {
                    height: "10%",
                    paddingBottom: 10,
                    position: "absolute",
                    zIndex: 50,
                    backgroundColor: "#fff",
                    borderTopWidth: 1,
                    borderTopColor: "#E0E0E0",
                },
                tabBarLabelStyle: {
                    fontFamily: 'OpenSans-Regular',
                    fontWeight: '600',
                    fontSize: 16,
                },
                tabBarLabelPosition: 'below-icon',
                tabBarHideOnKeyboard: true,
                tabBarVisibilityAnimationConfig: {
                    show: true,
                },
            }}>

            <Tab.Screen
                name="Dining"
                component={Dining}

                options={{
                    title: 'Dining',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {
                                focused ? <Image style={{ width: 24, height: 24, resizeMode: "contain" }} source={require("../assets/images/dining_on.png")} /> : <Image style={{ width: 24, height: 24, resizeMode: "contain" }} source={require("../assets/images/dining_off.png")} />
                            }
                        </View>
                    ),
                    transitionSpec: {
                        animation: 'timing',
                        config: {
                            duration: 150,
                            easing: Easing.inOut(Easing.ease),
                        },
                    },

                }}
            />

            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {
                                focused ? <Image style={{ width: 24, height: 24, resizeMode: "contain" }} source={require("../assets/images/cart_on.png")} /> : <Image style={{ width: 24, height: 24, resizeMode: "contain" }} source={require("../assets/images/cart_off.png")} />
                            }
                        </View>
                    ),
                    transitionSpec: {
                        animation: 'timing',
                        config: {
                            duration: 150,
                            easing: Easing.inOut(Easing.ease),
                        },
                    },
                }}
            />

            <Tab.Screen
                name="Reorder"
                component={Reorder}
                options={{
                    title: 'Reorder',
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {
                                focused ? <Image style={{ width: 24, height: 24, resizeMode: "contain" }} source={require("../assets/images/reorder_on.png")} /> : <Image style={{ width: 24, height: 24, resizeMode: "contain" }} source={require("../assets/images/reorder_off.png")} />
                            }
                        </View>
                    ),
                    transitionSpec: {
                        animation: 'timing',
                        config: {
                            duration: 150,
                            easing: Easing.inOut(Easing.ease),
                        },
                    },
                }}
            />


        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    activeTab: {
        width: 64,
        height: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
})