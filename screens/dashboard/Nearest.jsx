import { Dimensions, Image, ScrollView, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useSelector } from 'react-redux'
import Typography from '../../components/Typography'

const { height, width } = Dimensions.get("window")

const Nearest = () => {
    const { nearest } = useSelector((state) => state?.restaurant)
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "#000000",
                    fontFamily: "OpenSans-Regular",
                    lineHeight: 27,
                    letterSpacing: 0.05,
                    marginBottom: 20
                }}>Nearest</Text>

            </View>
            <View style={styles.nearestWrapper}>
                {
                    nearest.map((item, id) => (
                        <View key={id} style={styles.restaurantsContainer}>
                            <Image source={require("../../assets/images/menuImg.png")} style={styles.restaurantImg} />
                            <View style={styles.restaurantContentWrapper}>
                                <Typography title={item?.restaurant_name} color={"#000000"} ff={"OpenSans_regular"} size={11} lh={15} ls={0.05} fw={400} ta={"center"} />
                                <View style={styles.divider}></View>
                                <View style={styles.ratingWrapper}>
                                    <View style={styles.ratingLeftWrapper}>
                                        <Typography title={item?.avg_rating} color={"#fff"} ff={"OpenSans_regular"} size={12} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                                        <Entypo name='star-outlined' size={12} color={"#fff"} />
                                    </View>
                                    <View>
                                        <Typography title={item?.delivery_time} color={"#202020"} ff={"OpenSans_regular"} size={11} lh={12} ls={0.05} fw={300} />
                                    </View>
                                </View>
                                <View style={styles.desWrapper}>
                                    <Typography lines={1} title={item?.categories?.join(", ")} color={"#202020"} ff={"OpenSans_regular"} size={11} lh={21} ls={0.05} fw={300} ta={"center"} />
                                </View>
                            </View>
                        </View>
                    ))
                }

            </View>
        </ScrollView>
    )
}

export default Nearest

const styles = StyleSheet.create({
    nearestWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",


        // flexWrap: "wrap"
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingTop: 10
    },
    restaurantsContainer: {
        height: height * 0.24,
        width: width * 0.44,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        marginBottom: 10,
        marginTop: 40,
    },
    restaurantImg: {
        height: height * 0.15,
        width: width * 0.25,
        position: "absolute",
        top: -40,
        left: "22%",
        borderRadius: 10,
        resizeMode: "contain"
    },
    restaurantContentWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "flex-end",
        flex: 1
    },
    divider: { borderBottomColor: "#D6D6D6", borderBottomWidth: 1 },
    ratingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        // paddingVertical: 10,
        gap: 30
    },
    ratingLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 1,
        borderRadius: 5
    },
    desWrapper: {
        paddingHorizontal: 10,
        marginBottom: 5
    }
})