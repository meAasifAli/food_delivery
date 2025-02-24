
import { useContext, useEffect, useRef } from 'react'
import { Text, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import Evil from 'react-native-vector-icons/EvilIcons'
import { useSelector } from 'react-redux'
import { LocationContext } from '../../../context/LocationContext'

const Map = ({ handlePress }) => {
    const { location } = useContext(LocationContext)
    const { address } = useSelector(state => state.address)
    const mapRef = useRef(null)

    useEffect(() => {
        if (location && mapRef.current) {
            mapRef.current.animateToRegion(
                {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                },
                1000 // Duration of the animation in milliseconds
            );
        }
    }, [location]);





    return (
        <MapView
            ref={mapRef}
            provider={'google'}
            mapType="standard"
            focusable={true}
            cameraZoomRange={[0, 20]}
            showsCompass={true}
            onPress={handlePress}
            showsBuildings={true}
            showsScale={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsPointsOfInterest={true}
            // onMapLoaded={}
            initialRegion={
                {
                    latitude: location?.latitude,
                    longitude: location?.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }
            }
            style={{
                flex: 1
            }}>

            <Marker
                icon={<Evil name="location" size={30} color="red" />}
                coordinate={{
                    longitude: location?.longitude,
                    latitude: location?.latitude,
                }}
                draggable={true}
                children={
                    <Callout tooltip={true}  >
                        <View style={{ padding: 10, backgroundColor: '#fff', borderRadius: 10 }}>
                            <Text style={{ color: '#000', fontFamily: "OpenSans-Regular", fontSize: 12 }}>
                                {address?.address}
                            </Text>
                        </View>
                    </Callout>
                }
            />
        </MapView>
    )
}

export default Map

