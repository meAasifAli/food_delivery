import { Pressable, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { Marker } from 'react-native-maps'
import Typography from '../../Typography'

const Map = ({ status, setStatus }) => {
    return (
        <View>
            <MapView
                showsMyLocationButton={true}
                showsUserLocation={true}
                provider={'google'}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{ height: hp(50), position: "relative" }}
            >


                <Marker coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }} title="You are here" />

            </MapView>

            <View style={{ position: "absolute", bottom: hp(-2), backgroundColor: "#000", padding: wp(2), height: hp(6), width: wp(100), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: wp(2) }}>
                <Pressable onPress={() => setStatus("Confirmed")} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: status === "Confirmed" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"Confirmed"} ff={"OpenSans-Regular"} fw={400} size={16} lh={21} color={status === "Confirmed" ? "#FA4A0C" : "#fff"} />
                </Pressable>
                <Pressable onPress={() => setStatus("OntheWay")} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: status === "OntheWay" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"On the Way"} ff={"OpenSans-Regular"} fw={400} size={16} lh={21} color={status === "OntheWay" ? "#FA4A0C" : "#fff"} />
                </Pressable>
                <Pressable onPress={() => setStatus("Arrived")} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: status === "Arrived" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"Arrived"} ff={"OpenSans-Regular"} fw={400} size={16} lh={21} color={status === "Arrived" ? "#FA4A0C" : "#fff"} />
                </Pressable>
            </View>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({})