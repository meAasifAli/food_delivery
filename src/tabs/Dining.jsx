

import { Alert, Dimensions, Image, Keyboard, TouchableOpacity, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
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
import { useSocket } from '../context/SocketContext';
import { fetchRestaurants } from '../store/restaurantSlice';
import SearchInput from '../components/SearchInput';
import Entypo from 'react-native-vector-icons/Entypo'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width } = Dimensions.get('window')


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

    useEffect(() => {
        dispatch(fetchSavedAddresses({ token }))
    }, [dispatch])

    const { user } = useSelector(state => state?.auth)


    useEffect(() => {
        dispatch(getUser({ token }))
    }, [])

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
            setTimeout(() => {
                socket.connect();
            }, 2000);
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

    const handleFocus = () => {
        navigation.navigate("SearchedRestaurants", { query: "" })
        // setIsOpen(prev => !prev)
        Keyboard.dismiss()
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#202020"} barStyle={"light-content"} />
            <View
                style={styles.topBar}
            >
                {/* heading */}
                <View style={styles.topBarHeading}>
                    <View style={styles.topBarHeadingLeft}>
                        {
                            savedUserAddresses?.length > 0 ?
                                <TouchableOpacity style={{ width: "90%" }} onPress={() => navigation.navigate("AddAddress")}>

                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                        <View >
                                            <Image style={{ height: 25, width: 25 }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/11202/11202939.png" }} />
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", color: "#fff" }}>{`${selectedAddress?.type}`}</Text>
                                            <Entypo name='chevron-small-down' size={16} color={"#fff"} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12, fontFamily: "OpenSans-Regular", color: "#fff", marginTop: 5, maxWidth: "100%" }}>{`${selectedAddress?.house_no}, ${selectedAddress?.area}, ${selectedAddress?.city}, ${selectedAddress?.state}`}</Text>
                                    </View>

                                </TouchableOpacity>

                                :

                                <TouchableOpacity onPress={() => navigation.navigate("AddAddress")}>

                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                        <View>
                                            <Image style={{ height: 25, width: 25 }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/11202/11202939.png" }} />
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", color: "#fff" }}>{address?.split(",")[0]}</Text>
                                            <Entypo name='chevron-small-down' size={16} color={"#fff"} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12, fontFamily: "OpenSans-Regular", color: "#fff", marginTop: 5, maxWidth: "100%" }}>{address?.split(",")?.slice(0, 3).join(",")}</Text>
                                    </View>

                                </TouchableOpacity>
                        }
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                        <Image
                            source={{ uri: user?.profile ? user?.profile : "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                            style={styles.profileAvatar} />
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <View style={{ backgroundColor: "#202020", borderBottomStartRadius: 25, borderBottomEndRadius: 25, paddingBottom: 10 }}>
                    <View style={{ maxWidth: width * (278 / width), marginHorizontal: "auto", marginVertical: 15 }}>
                        <Text style={{ fontFamily: "OpenSans-Italic", textAlign: "center", fontSize: 16, lineHeight: 21, letterSpacing: 0.07, fontWeight: "300", color: "#fff" }}>Embark on a culinary adventure
                            Let's find your next Flavor Sensation!</Text>
                    </View>
                    {/* search input */}
                    <View style={{ marginBottom: 10 }}>
                        <SearchInput handleFocus={handleFocus} placeholder={"Search for Biryani"} />
                    </View>
                </View>
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
    topBar: {
        backgroundColor: "#202020",
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
        elevation: 1
    },
    topBarHeading: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
        // paddingRight: 10

    },
    topBarHeadingLeft: {
        display: "flex",
        flexDirection: "row",
    },
    profileAvatar: {
        height: hp(7),
        width: hp(7),
        borderRadius: wp(10),
        borderColor: "#fff",
        borderWidth: 1,
        resizeMode: "cover",

    },
    contentWrapper: {
        marginTop: hp(3),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
})

// : <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <View>
//         <Image style={{ height: 200, width: 300, resizeMode: "contain" }} source={{ uri: "https://images.pond5.com/orange-delivery-truck-side-view-illustration-084843535_iconl.jpeg" }} />
//     </View>
//     <View style={{ paddingHorizontal: 20 }}>
//         <Text style={{ fontSize: 20, fontFamily: "OpenSans-Bold", color: "#202020", textAlign: "center" }}>We&apos;re not there yet</Text>
//         <Text style={{ fontSize: 16, fontFamily: "OpenSans-Regular", color: "#202020", textAlign: "center", marginTop: 10 }}>Sorry, our services are currently unavailabale at this location. we hope to serve you in future.</Text>
//     </View>
// </View>