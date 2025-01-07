import { Alert, KeyboardAvoidingView, } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import Header from '../../components/common/address/Header';
import Map from '../../components/common/address/Map';
import Bottom from '../../components/common/address/Bottom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../store/addressSlice';
import { LocationContext } from '../../context/LocationContext';


const Address = () => {



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
                const res = await axios.get(`https://us1.locationiq.com/v1/reverse.php?key=pk.8f2a73d9ff72a2b8a7fc9626d06d6e12&lat=${location?.latitude}&lon=${location?.longitude}&format=json`, {
                })
                dispatch(setAddress({
                    city: res.data.address.city ? res.data.address.city : res.data.address.state_district,
                    district: res.data.address.state_district,
                    state: res.data.address.state,
                    postcode: res.data.address.postcode,
                    country: res.data.address.country,
                    suburb: res.data.address.suburb ? res.data.address.suburb : res.data.address.state,
                    fullAddress: res?.data?.display_name,
                    county: res.data.address.county,
                    place: res?.data?.display_place
                }))

            } catch (error) {
                Alert.alert("Error in fetching the place api: ", error?.message)
            }
        }
        if (location?.latitude !== 0 && location?.longitude !== 0) {
            fetchLocationName()
        }
    }, [location?.longitude, location?.latitude])
    // console.log(address);
    return (
        <KeyboardAvoidingView style={{ flex: 1, position: "relative" }}>
            <Header isHidden={openModal} />
            <Map handlePress={handleMapPress} />
            <Bottom openModal={openModal} setOpenModal={setOpenModal} />
        </KeyboardAvoidingView>
    )
}

export default Address

