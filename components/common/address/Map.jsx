
import MapView, { Marker } from 'react-native-maps'

const Map = () => {
    return (
        <MapView
            showsUserLocation={true}
            initialRegion={
                {
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }
            }
            style={{
                flex: 1
            }}>
            <Marker coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }} title='Order Will be delivered here' />
        </MapView>
    )
}

export default Map

