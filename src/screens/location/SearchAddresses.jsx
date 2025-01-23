import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useContext } from 'react'
import { LocationContext } from '../../context/LocationContext'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '../../store/addressSlice'
import Geolocation from '../../config/locationConfig'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { API_KEY } from '../../config/uri'


const SearchAddresses = () => {
    const { setIsMyLocation } = useContext(LocationContext)
    const dispatch = useDispatch()
    const { setLocation, } = useContext(LocationContext)
    // const { address } = useSelector((state) => state?.address)

    // console.log("got an address : ", address?.address);



    const navigation = useNavigation()



    const handleCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                })
                setIsMyLocation(true)
                navigation.navigate("AddressScreen");

            },
            (error) => {
                console.error('Location error:', error);
                Alert.alert('Error', 'Failed to fetch current location');
            },
            { enableHighAccuracy: false, timeout: 20000 }
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#202020" }}>
            <TouchableOpacity onPress={handleCurrentLocation} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20, padding: 15, borderBottomColor: "#6D6D6D", borderBottomWidth: 1, borderStyle: "dashed" }}>
                <FontAwesome5Icon name='location-arrow' color={"#FA4A0C"} size={25} />
                <Text style={{ color: "#FA4A0C", fontSize: 20, fontFamily: "OpenSans-Regular" }}>Use  current Location</Text>
            </TouchableOpacity>
            <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    setLocation({
                        longitude: details?.geometry.location.lng,
                        latitude: details?.geometry.location.lat,
                    })
                    dispatch(setAddress(details?.formatted_address))
                    setIsMyLocation(false)
                    navigation.navigate("AddressScreen")
                }}
                query={{
                    key: API_KEY,
                    language: 'en',
                }}
                styles={{
                    container: {
                        paddingHorizontal: 10,
                        marginTop: 10,
                        flex: 1,
                        backgroundColor: 'transparent',
                    },
                    textInput: {
                        backgroundColor: '#fff',
                        color: '#000',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        fontSize: 16,
                        fontFamily: 'OpenSans-Regular',
                        borderColor: '#6D6D6D',
                        borderWidth: 1,
                        borderStyle: 'dashed',
                    },
                    listView: {
                        backgroundColor: 'transparent',
                    },
                    row: {
                        backgroundColor: 'transparent',
                        padding: 10,
                        borderBottomColor: '#6D6D6D',
                        borderBottomWidth: 0.5,
                    },
                    description: {
                        color: '#fff',
                        fontFamily: 'OpenSans-Regular',
                    },
                    predefinedPlacesDescription: {
                        color: '#fff',
                    },
                }}
            />

        </View>
    )
}

export default SearchAddresses

const styles = StyleSheet.create({})