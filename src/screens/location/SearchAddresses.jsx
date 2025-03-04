import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useContext } from 'react'
import { LocationContext } from '../../context/LocationContext'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setAddress } from '../../store/addressSlice'
import GetLocation from 'react-native-get-location'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { API_KEY } from '../../config/uri'

import AntDesign from 'react-native-vector-icons/AntDesign';


const SearchAddresses = () => {
    const { setIsMyLocation } = useContext(LocationContext)
    const dispatch = useDispatch()
    const { setLocation, } = useContext(LocationContext)

    const navigation = useNavigation()



    const handleCurrentLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
            .then(location => {
                setLocation({
                    longitude: location?.longitude,
                    latitude: location?.latitude,
                })
                setIsMyLocation(true)
                navigation.navigate("AddressScreen");
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })

    };

    return (
        <View style={{ flex: 1, backgroundColor: "#202020" }}>
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("AddAddress")}>
                    <AntDesign size={25} name='arrowleft' color={"#fff"} />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontFamily: "OpenSans-Medium", }}>Search for a location</Text>
                </View>
            </View>
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
                    });
                    dispatch(setAddress(details?.formatted_address));
                    setIsMyLocation(false);
                    navigation.navigate("AddressScreen");
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
                        color: '#000',
                    },
                }}
            />


        </View>
    )
}

export default SearchAddresses

const styles = StyleSheet.create({})