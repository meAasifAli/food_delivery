import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dining from "../tabs/Dining";
import Reorder from "../tabs/Reorder";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { View, StyleSheet, Easing } from "react-native";

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Dining"
            screenOptions={{
                tabBarActiveTintColor: '#FA4A0C',
                tabBarInactiveTintColor: '#202020',
                headerShown: false,
                tabBarStyle: {
                    height: "12%",
                    paddingBottom: 10,
                    position: "absolute",
                    zIndex: 50,
                    backgroundColor: "#fff"
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
                    tabBarIcon: ({ color, size, focused }) => (
                        <View
                            style={[
                                styles.activeTab,
                                {
                                    backgroundColor: focused ? '#E8DEF8' : '#fff',
                                },
                            ]}>
                            <MaterialIcon name="local-dining" size={size} color={color} />
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
                    tabBarIcon: ({ color, size, focused }) => (
                        <View
                            style={[
                                styles.activeTab,
                                {
                                    backgroundColor: focused ? '#E8DEF8' : '#fff',
                                },
                            ]}>
                            <Fontisto
                                name="spinner-rotate-forward"
                                size={size}
                                color={color}
                            />
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