import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typography from '../../components/Typography'
import { restaurants } from '../../static/data'
import Entypo from 'react-native-vector-icons/Entypo'

const { height, width } = Dimensions.get("window")

const Nearest = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Typography title={"Nearest"} color={"#000000"} ff={"OpenSans_regular"} size={20} lh={27} ls={0.05} fw={600} />
            </View>
            <View style={styles.nearestWrapper}>
                {
                    restaurants.map((item, id) => (
                        <View key={id} style={styles.restaurantsContainer}>
                            <Image source={item?.img} style={styles.restaurantImg} />
                            <View style={styles.restaurantContentWrapper}>
                                <Typography title={item?.name} color={"#000000"} ff={"OpenSans_regular"} size={11} lh={15} ls={0.05} fw={400} ta={"center"} />
                                <View style={styles.divider}></View>
                                <View style={styles.ratingWrapper}>
                                    <View style={styles.ratingLeftWrapper}>
                                        <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={12} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                                        <Entypo name='star-outlined' size={12} color={"#fff"} />
                                    </View>
                                    <View>
                                        <Typography title={item?.deliveryTime} color={"#202020"} ff={"OpenSans_regular"} size={11} lh={12} ls={0.05} fw={300} />
                                    </View>
                                </View>
                                <View style={styles.desWrapper}>
                                    <Typography lines={1} title={item?.des} color={"#202020"} ff={"OpenSans_regular"} size={11} lh={21} ls={0.05} fw={300} ta={"center"} />
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