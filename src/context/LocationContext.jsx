import { createContext, useEffect, useRef, useState } from "react";
import { Alert, PermissionsAndroid } from "react-native";
import GetLocation from 'react-native-get-location'

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
    const mapRef = useRef(null)
    const [location, setLocation] = useState({
        longitude: 0,
        latitude: 0
    })

    useEffect(() => {
        requestLocationPermission();
        getLocation()
    }, []);



    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message: "This app needs access to your location",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert("Permission Denied", "Location permission is required for this feature.");
                return false;
            }
        }
        return true;
    };

    const getLocation = async () => {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) return;

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
            .then(location => {
                setLocation({
                    longitude: location?.longitude,
                    latitude: location?.latitude
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    };

    const [orderStatus, setOrderStatus] = useState("confirmed")
    const [deliveryBoyLocation, setDeliveryBoyLocation] = useState(null)
    const [restaurantLocation, setRestaurantLocation] = useState({
        latitude: 0,
        longitude: 0
    })
    const [isMyLocation, setIsMyLocation] = useState(false)




    return (
        <LocationContext.Provider value={{ isMyLocation, setIsMyLocation, location, setLocation, mapRef, orderStatus, setOrderStatus, deliveryBoyLocation, setDeliveryBoyLocation, restaurantLocation, setRestaurantLocation }}>{children}</LocationContext.Provider>
    )
}


export default LocationContextProvider;