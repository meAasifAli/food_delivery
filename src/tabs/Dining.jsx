

import { Alert, Image, Pressable, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/common/dashboard/TopBar';
import Categories from '../components/common/dashboard/Categories';
import Nearest from '../components/common/dashboard/Nearest';
import TopRated from '../components/common/dashboard/TopRated';
import PopularBrands from '../components/common/dashboard/PopularBrands';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import { fetchCartItems } from '../store/cartSlice';
import { LocationContext } from '../context/LocationContext';
import { getUser } from '../store/authSlice';
import { fetchSavedAddresses, setAddress } from '../store/addressSlice';
import { API_KEY, BASE_URI } from '../config/uri';
import axios from 'axios';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useSocket } from '../context/SocketContext';
import { fetchRestaurants } from '../store/restaurantSlice';





const Dining = () => {
    const socket = useSocket()
    const { location } = useContext(LocationContext)
    const { setOrderStatus, setDeliveryBoyLocation, setRestaurantLocation } = useContext(LocationContext)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { token } = useSelector((state) => state?.auth)
    const { address } = useSelector((state) => state?.address)
    const [refreshing, setRefreshing] = useState(false);
    const [categories, setcategories] = useState([])
    const [categoryLoading, setCategoryLoading] = useState(false)
    const { savedUserAddresses } = useSelector(state => state?.address)

    const selectedAddress = savedUserAddresses?.find((address) => address?.selected === 1)



    const onRefresh = async () => {
        setRefreshing(true);
        try {
            await Promise.all([
                dispatch(fetchRestaurants({ type: "topRated", latitude: selectedAddress ? parseFloat(selectedAddress?.lat) : location?.latitude, longitude: selectedAddress ? parseFloat(selectedAddress?.lon) : location?.longitude })).unwrap(),
                dispatch(fetchRestaurants({ type: "popular", latitude: selectedAddress ? parseFloat(selectedAddress?.lat) : location?.latitude, longitude: selectedAddress ? parseFloat(selectedAddress?.lon) : location?.longitude })).unwrap(),
                dispatch(fetchRestaurants({ type: "nearest", latitude: selectedAddress ? parseFloat(selectedAddress?.lat) : location?.latitude, longitude: selectedAddress ? parseFloat(selectedAddress?.lon) : location?.longitude })).unwrap(),
            ]);

            const res = await axios.get(`${BASE_URI}/api/category/getMainCategories`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res?.data) {
                setcategories(res?.data?.data);
            }
        } catch (error) {
            console.error("Refresh Error:", error);
        } finally {
            setRefreshing(false);
        }
    };


    useEffect(() => {
        if (token) {
            dispatch(getUser({ token }))
            dispatch(fetchCartItems({ token }))
        }
    }, [token])

    useEffect(() => {
        const fetchLocationName = async () => {
            try {
                const res = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location?.latitude},${location?.longitude}&key=${API_KEY}`
                );

                if (res?.data?.results?.length > 0) {
                    const fetchedAddress = res.data.results[0].formatted_address;
                    if (!address) {
                        dispatch(setAddress(fetchedAddress));
                    }

                } else {
                    Alert.alert('No address found for the given coordinates.');
                }
            } catch (error) {
                console.log("Error: ", error?.response?.data?.message);
            }
        };

        if (location?.latitude && location?.longitude) {
            fetchLocationName();
        }
    }, [location?.latitude, location?.longitude, address, dispatch]);





    useEffect(() => {
        if (!socket) return;

        const handleConnect = () => {
            console.log("✅ User Connected");
            socket.emit("userConnect");
        };

        const handleOrderStatus = (orderStatus) => {
            setOrderStatus(orderStatus?.status);
            if (orderStatus?.status === "accepted") {
                navigation.navigate("Tracking");
            }
        };

        const handleDeliveryBoyLocationUpdate = (data) => {
            console.log("📍 Delivery Boy Location Update:", data);
            setDeliveryBoyLocation(data?.location);
            setRestaurantLocation({
                latitude: parseFloat(data?.restaurantLat),
                longitude: parseFloat(data?.restaurantLon)
            })
        };

        const handleDisconnect = (reason) => {
            console.log("⚠️ User disconnected:", reason);
        };


        socket.on("connect", handleConnect);
        socket.on("orderStatus", handleOrderStatus);
        socket.on("deliveryBoyLocationUpdate", handleDeliveryBoyLocationUpdate);
        socket.on("disconnect", handleDisconnect);

        return () => {
            socket.off("connect", handleConnect);
            socket.off("orderStatus", handleOrderStatus);
            socket.off("deliveryBoyLocationUpdate", handleDeliveryBoyLocationUpdate);
            socket.off("disconnect", handleDisconnect);
        };
    }, [socket]);





    useEffect(() => {

        const fetchMainCategories = async () => {

            try {
                setCategoryLoading(true)
                const res = await axios.get(`${BASE_URI}/api/category/getMainCategories`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (res?.data) {
                    setcategories(res?.data?.data)
                }
            } catch (error) {
                setCategoryLoading(false)
                // Alert.alert("Error in Getting the categories: ", error?.response?.data?.message)
            }
            finally {
                setCategoryLoading(false)
            }
        }
        fetchMainCategories()
    }, [])

    useEffect(() => {
        dispatch(fetchSavedAddresses({ token }))
    }, [token])


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#202020"} barStyle={"light-content"} />
            {/* TopBar */}
            <TopBar />
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {/* category slider */}
                <Categories loading={categoryLoading} categories={categories} navigation={navigation} />
                <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                    {/* Nearest Restaurants */}
                    <Nearest navigation={navigation} />
                    {/* Top Rated Restaurants */}
                    <TopRated navigation={navigation} />
                    {/* Popular Brands */}
                    <PopularBrands navigation={navigation} />
                </View>
            </ScrollView>

        </View >

    )
}

export default Dining

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative"
    },
})

