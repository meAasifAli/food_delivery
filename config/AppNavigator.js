import { NavigationContainer } from "@react-navigation/native"
import LocationContextProvider from "../context/LocationContext"
import AuthenticatedUserStack from "./AuthenticatedUserStack"
import UnAuthenticatedUserStack from "./UnAuthenticatedUserStack"
import { useSelector } from "react-redux"

const AppNavigator = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    return (
        <LocationContextProvider>
            <NavigationContainer>
                {
                    isAuthenticated ? <AuthenticatedUserStack /> : <UnAuthenticatedUserStack />
                }
            </NavigationContainer>
        </LocationContextProvider>
    )
}

export default AppNavigator

