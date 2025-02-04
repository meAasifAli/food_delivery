import { Alert, KeyboardAvoidingView, } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import Header from '../../components/common/address/Header';
import Map from '../../components/common/address/Map';
import Bottom from '../../components/common/address/Bottom';
import axios from 'axios';
import { useDispatch, } from 'react-redux';
import { setAddress } from '../../store/addressSlice';
import { LocationContext } from '../../context/LocationContext';
import { API_KEY } from '../../config/uri';


const Address = () => {
    const { isMyLocation } = useContext(LocationContext)
    const { setLocation, location } = useContext(LocationContext)
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)

    const handleMapPress = (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setLocation({
            latitude, longitude
        })
    }
    useEffect(() => {
        const fetchLocationName = async () => {
            try {
                const res = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location?.latitude},${location?.longitude}&key=${API_KEY}`
                );

                if (res?.data?.results?.length > 0) {
                    const fetchedAddress = res.data.results[0].formatted_address;

                    // Only update Redux state if address is not already set

                    if (isMyLocation && location) {
                        dispatch(setAddress(fetchedAddress));
                    }
                } else {
                    Alert.alert('No address found for the given coordinates.');
                }
            } catch (error) {
                Alert.alert('Error fetching the place API:', error?.message);
            }
        };

        if (location?.latitude !== 0 && location?.longitude !== 0) {
            fetchLocationName();
        }
    }, [location?.latitude, location?.longitude, isMyLocation]);



    return (
        <KeyboardAvoidingView style={{ flex: 1, position: "relative" }}>
            <Header isHidden={openModal} />
            <Map handlePress={handleMapPress} />
            <Bottom openModal={openModal} setOpenModal={setOpenModal} />
        </KeyboardAvoidingView>
    )
}

export default Address

