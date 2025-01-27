import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { Marker } from 'react-native-maps';
import Typography from '../../Typography';
import { useContext, useEffect, useRef } from 'react';
import { LocationContext } from '../../../context/LocationContext';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from '../../../config/uri';
import { initialiseSocket } from '../../../config/socket';

const Map = () => {
    const mapRef = useRef(null);
    const { location } = useContext(LocationContext)
    const { orderStatus, setDeliveryBoyLocation, deliveryBoyLocation } = useContext(LocationContext);

    console.log("user location: ", location);

    console.log("deliveryBoyLocation", deliveryBoyLocation);

    useEffect(() => {
        const socket = initialiseSocket();

        socket.on("connect", () => {
            console.log("User Connected to Socket");
            socket.emit("userConnect");

            // Listen for delivery boy location updates
            socket.on("deliveryBoyLocationUpdate", (data) => {
                console.log("Updated Delivery Boy Location: ", data);
                const location = data?.location
                if (location) {
                    setDeliveryBoyLocation(location);
                    if (mapRef.current) {
                        mapRef.current.animateCamera({
                            center: {
                                latitude: location.lat,
                                longitude: location.lng,
                            },
                            zoom: 15,
                        }, { duration: 1000 });
                    }
                }
            });
        });

        socket.on("connect_error", (error) => {
            console.error("Socket connection error:", error);
        });

        return () => {
            socket.off('connect');
            socket.off('deliveryBoyLocationUpdate');
            socket.disconnect();
        };
    }, []);

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
                {
                    deliveryBoyLocation && <Marker
                        coordinate={{
                            latitude: deliveryBoyLocation?.lat || 34.074744,
                            longitude: deliveryBoyLocation?.lng || 74.820444,
                        }}
                        title="Delivery Boy Location"
                    />
                }

                <Marker
                    coordinate={{
                        latitude: location?.latitude,
                        longitude: location?.longitude,
                        // latitude: location?.latitude || 34.0694,
                        // longitude: location?.longitude || 74.8250,
                    }}
                    title="User Location"
                />

                {
                    deliveryBoyLocation && (
                        <MapViewDirections
                            strokeWidth={10}
                            strokeColor="blue"
                            origin={{
                                latitude: deliveryBoyLocation.lat,
                                longitude: deliveryBoyLocation.lng,
                            }}
                            destination={{
                                latitude: location?.latitude,
                                longitude: location?.longitude,
                            }}
                            apikey={API_KEY}
                            onReady={(result) => {
                                if (mapRef.current) {
                                    mapRef.current.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            top: 50,
                                            right: 50,
                                            bottom: 50,
                                            left: 50,
                                        },
                                        animated: true,
                                    });
                                }
                            }}
                        />
                    )
                }

            </MapView>

            <View style={{
                position: "absolute", bottom: hp(0), backgroundColor: "#000", padding: wp(2),
                height: hp(6), width: wp(100), display: "flex", flexDirection: "row", alignItems: "center",
                justifyContent: "space-between", paddingHorizontal: wp(2)
            }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === "confirmed" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }} />
                    <Typography title={"Confirmed"} ff={"OpenSans-Regular"} size={12} lh={21} color={orderStatus === "Confirmed" ? "#FA4A0C" : "#fff"} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === "accepted" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }} />
                    <Typography title={"Accepted"} ff={"OpenSans-Regular"} fw={400} size={12} lh={21} color={orderStatus === "accepted" ? "#FA4A0C" : "#fff"} />
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
}

export default Map;



const styles = StyleSheet.create({})






//latitude: 34.12000000,
//longitude: 74.82000000,