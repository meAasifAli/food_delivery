import { createContext, useEffect, useRef, useState } from "react";
import { request, PERMISSIONS, RESULTS, } from 'react-native-permissions';
import { Alert } from "react-native";
import Geolocation from "../config/locationConfig";

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
    const mapRef = useRef(null)
    const [location, setLocation] = useState({
        longitude: 0,
        latitude: 0
    })

    useEffect(() => {
        requestLocationPermission();
    }, []);

    const requestLocationPermission = async () => {
        try {
            // const fallbackLocation = { latitude: 37.7749, longitude: -122.4194 };
            const result = await request(
                Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            );

            if (result === RESULTS.GRANTED) {
                // console.log('Location permission granted');
                Geolocation.getCurrentPosition(
                    (position) => {
                        // console.log('Position:', position);
                        setLocation({
                            longitude: position?.coords?.longitude,
                            latitude: position?.coords?.latitude,
                        });

                        if (mapRef.current) {
                            mapRef.current.animatecamera({
                                center: { latitude, longitude },
                                zoom: 20,
                            }, { duration: 1500 })
                        }
                    },
                    (error) => {
                        console.error('Location error:', error);
                        // setLocation(fallbackLocation)
                        Alert.alert(
                            'Location Error',
                            `Code: ${error.code}, Message: ${error.message}`,
                            [{ text: 'OK' }]
                        );
                    },
                    {
                        enableHighAccuracy: false,
                        timeout: 30000,             // Maximum time to wait (15 seconds)
                        maximumAge: 0,          // Cache location results up to 10 seconds
                    }
                );
            } else {
                console.log('Location permission not granted');
                Alert.alert(
                    'Location Permission Required',
                    'We need access to your location to provide the best experience. Please enable location services in your settings.',
                    [{ text: 'OK' }]
                );
            }
        } catch (err) {
            console.warn('Permission error:', err);
        }
    };

    return (
        <LocationContext.Provider value={{ location, setLocation, mapRef }}>{children}</LocationContext.Provider>
    )
}


export default LocationContextProvider;