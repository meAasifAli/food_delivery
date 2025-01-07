import { Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/common/address/searchAddress/Header'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { LocationContext } from '../../context/LocationContext'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setAddress } from '../../store/addressSlice'
import Geolocation from '../../config/locationConfig'


const SearchAddresses = () => {
    const dispatch = useDispatch()
    const { setLocation } = useContext(LocationContext)
    const [searchVal, setSearchVal] = useState("")
    const [searchedAddresses, setSearchedAddresses] = useState([])

    const navigation = useNavigation()


    useEffect(() => {
        const fetchAdressByString = async () => {
            try {
                const res = await axios.get(`https://api.locationiq.com/v1/autocomplete?key=pk.8f2a73d9ff72a2b8a7fc9626d06d6e12&q=${searchVal}`)
                // console.log(res?.data);
                setSearchedAddresses(res.data)

            } catch (error) {
                Alert.alert("Error: ", error?.message)
            }
        }
        if (searchVal !== "") {
            fetchAdressByString()
        }
    }, [searchVal])



    const handleAddressPress = (item) => {
        console.log("item: ", item);

        if (item) {
            setLocation({
                longitude: Number(item?.lon),
                latitude: Number(item?.lat)
            })
            dispatch(setAddress({
                city: item?.address?.name,
                district: item?.address?.state,
                state: item.address?.state,
                postcode: item?.address?.postcode,
                country: item?.address?.country,
                suburb: item?.address?.suburb,
                fullAddress: item?.display_name,
                county: item?.address?.county,
                name: item?.address?.name,
                place: item?.display_place
            }))
        }

        // console.log(item);

        navigation.navigate("AddressScreen")
    }

    const handleCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log('Position fetched:', position); // Debug log
                setLocation({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                });
                navigation.navigate("AddressScreen");
            },
            (error) => {
                console.error('Location error:', error);
                Alert.alert('Error', 'Failed to fetch current location');
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 }
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#202020" }}>
            <Header searchVal={searchVal} setSearchVal={setSearchVal} />
            <TouchableOpacity onPress={handleCurrentLocation} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20, padding: 15, borderBottomColor: "#6D6D6D", borderBottomWidth: 1, borderStyle: "dashed" }}>
                <FontAwesome5Icon name='location-arrow' color={"#FA4A0C"} size={25} />
                <Text style={{ color: "#FA4A0C", fontSize: 20, fontFamily: "OpenSans-Regular" }}>Use  current Location</Text>
            </TouchableOpacity>
            <View style={{ padding: 15 }}>
                <View>
                    <Text style={{ fontFamily: "OpenSans-Regular", color: "#fff", fontSize: 16 }}>Searched Results</Text>
                </View>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 50 }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id || index.toString()}
                    data={searchedAddresses}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleAddressPress(item)} style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <View style={{ height: 10, width: 10, backgroundColor: "#FA4A0C", borderRadius: 15, marginVertical: 30 }} />
                            <View>
                                <Text style={{ color: "#fff", fontSize: 14, fontFamily: "OpenSans-Bold", lineHeight: 24 }}>{item?.display_place}</Text>
                                <Text style={{ color: "#ccc", fontSize: 12, fontFamily: "OpenSans-Regular", lineHeight: 20 }}>{item?.display_address}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default SearchAddresses

const styles = StyleSheet.create({})