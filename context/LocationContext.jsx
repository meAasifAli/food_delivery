import { createContext, useEffect, useState } from "react";
import { request, PERMISSIONS, RESULTS, } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { Alert } from "react-native";

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState(null)

    useEffect(() => {
        requestLocationPermission();
    }, []);

    const requestLocationPermission = async () => {
        try {
            const result = await request(
                Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            );

            if (result === RESULTS.GRANTED) {
                // Permission granted, you can now access location
                Geolocation.getCurrentPosition(
                    (position) => {
                        setLocation({
                            longitude: position?.coords?.longitude,
                            latitude: position?.coords?.latitude
                        })
                    },
                    (error) => {
                        console.log(error);

                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            } else {
                // Permission denied or unavailable
                Alert.alert(
                    'Location Permission Required',
                    'We need access to your location to provide the best experience. Please enable location services in your settings.',
                    [{ text: 'OK' }]
                );
            }
        } catch (err) {
            console.warn(err);
        }
    };
    return (
        <LocationContext.Provider value={{ location }}>{children}</LocationContext.Provider>
    )
}


export default LocationContextProvider;