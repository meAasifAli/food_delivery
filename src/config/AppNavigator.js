import { NavigationContainer } from "@react-navigation/native"
import LocationContextProvider from "../context/LocationContext"
import AuthenticatedUserStack from "./AuthenticatedUserStack"
import UnAuthenticatedUserStack from "./UnAuthenticatedUserStack"
import { useSelector } from "react-redux"
import { StatusBar } from "react-native"


const AppNavigator = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    return (
        <LocationContextProvider>
            <NavigationContainer>
                {
                    isAuthenticated ? <>
                        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
                        <AuthenticatedUserStack />
                    </> : <UnAuthenticatedUserStack />
                }
            </NavigationContainer>
        </LocationContextProvider>
    )
}

export default AppNavigator

