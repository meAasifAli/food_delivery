import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Typography from '../../Typography';
import { useContext, useEffect, useRef, useState, useCallback } from 'react';
import { LocationContext } from '../../../context/LocationContext';
import { API_KEY } from '../../../config/uri';
import polyline from '@mapbox/polyline';
import { useSocket } from '../../../context/SocketContext';

const Map = () => {
    const mapRef = useRef(null);
    const { location, orderStatus, deliveryBoyLocation, restaurantLocation } = useContext(LocationContext);
    const [routeCoordinates, setRouteCoordinates] = useState([]);
    const [routeCalculated, setRouteCalculated] = useState(false);

    const decodePolyline = (encoded) => {
        if (!encoded) return [];

        const decodedPoints = polyline.decode(encoded);
        return decodedPoints.map(([latitude, longitude]) => ({ latitude, longitude }));
    };

    // Memoized Function to Fetch Route
    const fetchRoute = useCallback(async () => {
        if (!restaurantLocation || !location || routeCalculated) return;
        const origin = `${restaurantLocation?.latitude},${restaurantLocation?.longitude}`;
        const destination = `${location.latitude},${location.longitude}`;
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${API_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.routes.length) {
                const points = data.routes[0].overview_polyline.points;
                const decodedCoordinates = decodePolyline(points); // Add decode function
                setRouteCoordinates(decodedCoordinates);
                setRouteCalculated(true);

                if (mapRef.current) {
                    mapRef.current.fitToCoordinates(decodedCoordinates, {
                        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
                        animated: true,
                    });
                }
            }
        } catch (error) {
            console.error("Error fetching route:", error);
        }
    }, [deliveryBoyLocation, location, routeCalculated]);

    useEffect(() => {
        fetchRoute();
    }, [fetchRoute]);




    return (
        <View>
            <MapView
                ref={mapRef}
                provider={'google'}
                initialRegion={{
                    latitude: deliveryBoyLocation?.lat || 34.074744,
                    longitude: deliveryBoyLocation?.lng || 74.820444,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                style={{ height: hp(50), position: "relative" }}
            >
                {deliveryBoyLocation && (
                    <Marker title="Delivery Boy Location" coordinate={{ latitude: deliveryBoyLocation.lat, longitude: deliveryBoyLocation.lng }} />
                )}

                {
                    restaurantLocation && (
                        <Marker coordinate={{ latitude: restaurantLocation?.latitude, longitude: restaurantLocation?.longitude }} title="Restaurant Location" />
                    )
                }

                <Marker coordinate={{ latitude: location?.latitude, longitude: location?.longitude }} title="User Location" />

                {/* Use Polyline to Draw Route */}
                {routeCoordinates.length > 0 && (
                    <Polyline coordinates={routeCoordinates} strokeWidth={10} strokeColor="black" />
                )}
            </MapView>

            <View style={{
                position: "absolute", bottom: hp(0), backgroundColor: "#000", padding: wp(2),
                height: hp(6), width: wp(100), display: "flex", flexDirection: "row", alignItems: "center",
                justifyContent: "space-between", paddingHorizontal: wp(2)
            }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === "accepted" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }} />
                    <Typography title={"Accepted"} ff={"OpenSans-Regular"} fw={400} size={12} lh={21} color={orderStatus === "accepted" ? "#FA4A0C" : "#fff"} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === "confirmed" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }} />
                    <Typography title={"Confirmed"} ff={"OpenSans-Regular"} size={12} lh={21} color={orderStatus === "Confirmed" ? "#FA4A0C" : "#fff"} />
                </View>

                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === 'On the way' ? "#FA4A0C" : "#fff", borderRadius: wp(5) }} />
                    <Typography title={"On the Way"} ff={"OpenSans-Regular"} fw={400} size={12} lh={21} color={orderStatus === "On the way" ? "#FA4A0C" : "#fff"} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === "arrived" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }} />
                    <Typography title={"Arrived"} ff={"OpenSans-Regular"} fw={400} size={12} lh={21} color={orderStatus === "arrived" ? "#FA4A0C" : "#fff"} />
                </View>
            </View>
        </View>
    );
};

export default Map;
