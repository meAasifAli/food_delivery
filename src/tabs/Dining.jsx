

import { Alert, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/common/dashboard/TopBar';
import Categories from '../components/common/dashboard/Categories';
import Nearest from '../components/common/dashboard/Nearest';
import TopRated from '../components/common/dashboard/TopRated';
import PopularBrands from '../components/common/dashboard/PopularBrands';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { fetchCartItems } from '../store/cartSlice';
import { initialiseSocket } from '../config/socket';
import { LocationContext } from '../context/LocationContext';
import { getUser } from '../store/authSlice';
import { setAddress } from '../store/addressSlice';
import { API_KEY } from '../config/uri';
import axios from 'axios';





const Dining = () => {
    const { location } = useContext(LocationContext)
    const { setOrderStatus, setDeliveryBoyLocation, deliveryBoyLocation } = useContext(LocationContext)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { token } = useSelector((state) => state?.auth)
    const { cart } = useSelector((state) => state?.cart)
    const { address } = useSelector((state) => state?.address)

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

                // Alert.alert('Error fetching the place API:', error?.message);
            }
        };

        if (location?.latitude && location?.longitude) {
            fetchLocationName();
        }
    }, [location?.latitude, location?.longitude, address, dispatch]);

    // console.log(cart);
    const itemTotal = cart?.reduce((acc, item) => acc + parseFloat(item?.item_total), 0)
    // console.log(itemTotal);

    useEffect(() => {
        const socket = initialiseSocket(token)
        socket.on("connect", () => {
            console.log("user Connected");
            socket.emit("userConnect")
            socket.on("orderStatus", (orderStatus) => {
                setOrderStatus(orderStatus?.status)
                if (orderStatus?.status === 'accepted') {
                    navigation.navigate("Tracking")
                }
            })
            socket.on("deliveryBoyLocationUpdate", (data) => {
                // console.log("Received location: ", data);

                setDeliveryBoyLocation(data?.location)
                // dispatch(setDeliveryBoy(data))
            })
        })
        socket.on("disconnect", (reason) => {
            console.log("User disconnected", reason);
        })


        return () => {
            socket.off('connect');
            socket.off('disconnect');
        }
    }, [token])


    // console.log("delivery Location: ", deliveryBoyLocation);


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#202020"} barStyle={"light-content"} />
            {/* TopBar */}
            <TopBar />
            <ScrollView contentContainerStyle={{ paddingBottom: cart?.length > 0 ? 160 : 90 }}
                showsVerticalScrollIndicator={false}>
                {/* category slider */}
                <Categories navigation={navigation} />
                {/* Nearest Restaurants */}
                <Nearest navigation={navigation} />
                {/* Top Rated Restaurants */}
                <TopRated navigation={navigation} />
                {/* Popular Brands */}
                <PopularBrands navigation={navigation} />
            </ScrollView>
            <View>
                {
                    cart?.length > 0 &&
                    <View style={{ position: "absolute", bottom: 60, padding: 10, height: 100, width: "100%", backgroundColor: "#fff", zIndex: 10, elevation: 5 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                            <Image source={require("../assets/images/karims.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <View>
                                <Text style={{ color: "#000", fontFamily: "OpenSans-Bold", fontSize: 16 }}>Dominos</Text>
                                <Text style={{ color: "#000", fontFamily: "OpenSans-Medium", fontSize: 12, textAlign: "center", textDecorationLine: "underline" }}>View Full Menu</Text>
                            </View>
                            <Pressable onPress={() => navigation.navigate("CartScreen")} style={{ backgroundColor: "#FA4A0C", height: 50, alignItems: "center", justifyContent: "center", padding: 10, borderRadius: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                    <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium" }}>{`${cart?.length} items`}</Text>
                                    <Text style={{ color: "#fff", fontFamily: "OpenSans-Bold" }}>|</Text>
                                    <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium" }}>{`₹${itemTotal}`}</Text>
                                </View>
                                <Text style={{ color: "#fff", fontFamily: "OpenSans-Bold", fontSize: 16 }}>Checkout</Text>
                            </Pressable>
                        </View>
                    </View>
                }
            </View>
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

