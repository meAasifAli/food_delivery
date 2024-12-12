

import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/common/dashboard/TopBar';
import Categories from '../components/common/dashboard/Categories';
import Nearest from '../components/common/dashboard/Nearest';
import TopRated from '../components/common/dashboard/TopRated';
import PopularBrands from '../components/common/dashboard/PopularBrands';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCartItems } from '../store/cartSlice';




const Dining = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { token } = useSelector((state) => state?.auth)
    const { cart } = useSelector((state) => state?.cart)

    useEffect(() => {
        dispatch(fetchCartItems({ token }))
    }, [])

    // console.log(cart);
    const itemTotal = cart?.reduce((acc, item) => acc + parseFloat(item?.item_total), 0)
    // console.log(itemTotal);


    return (
        <View showsVerticalScrollIndicator={false} style={styles.container}>
            {/* TopBar */}
            <TopBar />
            <ScrollView contentContainerStyle={{ paddingBottom: 160 }} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {/* category slider */}
                <Categories navigation={navigation} />
                {/* Nearest Restaurants */}
                <Nearest navigation={navigation} />
                {/* Top Rated Restaurants */}
                <TopRated navigation={navigation} />
                {/* Popular Brands */}
                <PopularBrands navigation={navigation} />
            </ScrollView>
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