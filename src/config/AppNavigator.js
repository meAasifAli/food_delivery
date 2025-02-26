import { NavigationContainer } from "@react-navigation/native"
import LocationContextProvider from "../context/LocationContext"
import AuthenticatedUserStack from "./AuthenticatedUserStack"
import UnAuthenticatedUserStack from "./UnAuthenticatedUserStack"
import { useSelector } from "react-redux"
import { StatusBar } from "react-native"
import SocketProvider from '../context/SocketContext'



const AppNavigator = () => {
    const { isAuthenticated, token } = useSelector(state => state.auth);



    return (
        <SocketProvider token={token}>
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
        </SocketProvider>
    )
}

export default AppNavigator

