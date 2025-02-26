import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typography from '../Typography'
import Entypo from 'react-native-vector-icons/Entypo'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const { height, width } = Dimensions.get("window")

const RestaurantCard = ({ navigation, item, isPopular }) => {




    return (
        <TouchableOpacity onPress={() => navigation.navigate("Restaurant", { restaurantId: item?.restaurant_id })} style={[styles.restaurantsContainer, {
            elevation: 1,
            backgroundColor: isPopular ? "#000" : "#fff",
        }]}>
            <Image source={{ uri: item?.profile }} style={styles.restaurantImg} />
            <View style={styles.restaurantContentWrapper}>
                <Typography title={item?.restaurant_name} color={isPopular ? "#fff" : "#000000"} ff={"OpenSans-Medium"} size={16} ls={wp(0.05)} fw={400} ta={"center"} />
                <View style={styles.divider}></View>
                <View style={styles.ratingWrapper}>
                    <View style={styles.ratingLeftWrapper}>
                        <Typography title={item?.avg_rating} color={"#fff"} ff={"OpenSans-Regular"} size={hp(1.7)} lh={hp(2.2)} ls={0.05} fw={400} ta={"center"} />
                        <Entypo name='star-outlined' size={12} color={"#fff"} />
                    </View>
                    <View>
                        <Typography title={`${item?.delivery_time} ${item?.delivery_time >= 60 ? "hours" : "minutes"}`} color={isPopular ? "#fff" : "#202020"} ff={"OpenSans-Medium"} size={14} lh={21} ls={0.05} fw={300} />
                    </View>
                </View>
                <View style={styles.desWrapper}>
                    <Typography lines={1} title={item?.categories?.join(", ")} color={isPopular ? "#fff" : "#202020"} ff={"OpenSans-Regular"} size={12} lh={21} ls={0.05} fw={300} ta={"center"} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard

const styles = StyleSheet.create({
    restaurantsContainer: {
        height: height * (215 / height),
        width: width * (200 / width),
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 40,
    },
    restaurantImg: {
        height: 100,
        width: width * (150 / width),
        position: "absolute",
        top: -35,
        left: "13%",
        borderRadius: 8,
        resizeMode: "cover"
    },
    restaurantContentWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "flex-end",
        flex: 1,

    },
    divider: { borderBottomColor: "#D6D6D6", borderBottomWidth: 1 },
    ratingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 30,

    },
    ratingLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 2,
        borderRadius: 5,
        paddingHorizontal: 5
    },
    desWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 5
    }
})