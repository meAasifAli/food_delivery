import { createContext, useEffect, useRef, useState } from "react";
import { Alert, PermissionsAndroid } from "react-native";
import Geolocation from "../config/locationConfig";

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
    const mapRef = useRef(null)
    const [location, setLocation] = useState({
        longitude: null,
        latitude: null
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

        Geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            },
            (error) => {
                console.error("Error getting location:", error);
            },
            {
                enableHighAccuracy: true,
            }
        );
    };

    const [orderStatus, setOrderStatus] = useState("confirmed")
    const [deliveryBoyLocation, setDeliveryBoyLocation] = useState(null)
    const [isMyLocation, setIsMyLocation] = useState(false)

    return (
        <LocationContext.Provider value={{ isMyLocation, setIsMyLocation, location, setLocation, mapRef, orderStatus, setOrderStatus, deliveryBoyLocation, setDeliveryBoyLocation, }}>{children}</LocationContext.Provider>
    )
}


export default LocationContextProvider;