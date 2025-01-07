import { Pressable, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { Marker, Polyline } from 'react-native-maps'
import Typography from '../../Typography'
import { useContext, useEffect, useRef } from 'react';
import { LocationContext } from '../../../context/LocationContext';


const Map = ({ routeCoordinates }) => {
    const mapRef = useRef(null)
    const { orderStatus } = useContext(LocationContext)
    console.log("Map OrderStatus: ", orderStatus);

    useEffect(() => {
        if (mapRef.current) {

            const targetRegion = {
                latitude: 34.074744,
                longitude: 74.820444,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            };

            // Animate the map to the region
            mapRef.current.animateToRegion(targetRegion, 1000);
        }
    }, [])

    return (
        <View>
            <MapView
                ref={mapRef}
                provider={'google'}
                initialRegion={{
                    latitude: 34.074744,
                    longitude: 74.820444,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                style={{ height: hp(50), position: "relative" }}
            >


                <Marker
                    coordinate={{
                        latitude: 34.074744,
                        longitude: 74.820444,
                    }}
                    title="Delivery Boy Start Location"
                />




                <Marker
                    coordinate={{
                        latitude: 34.0694,
                        longitude: 74.8250,
                    }}

                    title="User Last Location"
                />


                {/* Draw the Polyline */}
                {routeCoordinates.length > 0 && (
                    <Polyline
                        coordinates={routeCoordinates}
                        strokeColor="#0000FF" // Blue
                        strokeWidth={5}
                        style={{ flex: 1, zIndex: 100 }}
                    />
                )}
            </MapView>

            <View style={{ position: "absolute", bottom: hp(-2), backgroundColor: "#000", padding: wp(2), height: hp(6), width: wp(100), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: wp(2) }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === "confirmed" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"Confirmed"} ff={"OpenSans-Regular"} size={12} lh={21} color={orderStatus === "Confirmed" ? "#FA4A0C" : "#fff"} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === "accepted" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"Accepted"} ff={"OpenSans-Regular"} fw={400} size={12} lh={21} color={orderStatus === "accepted" ? "#FA4A0C" : "#fff"} />
                </View>

                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === 'On the way' ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"On the Way"} ff={"OpenSans-Regular"} fw={400} size={12} lh={21} color={orderStatus === "On the way" ? "#FA4A0C" : "#fff"} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(1) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: orderStatus === "arrived" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"Arrived"} ff={"OpenSans-Regular"} fw={400} size={12} lh={21} color={orderStatus === "arrived" ? "#FA4A0C" : "#fff"} />
                </View>
            </View>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({})