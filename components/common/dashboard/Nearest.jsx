import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'

import React from 'react'
import Typography from '../../../components/Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import { restaurants } from '../../../static/data'

const { height, width } = Dimensions.get("window")
const Nearest = ({ navigation }) => {
    return (
        <>
            <View style={styles.headingContainer}>
                {/* right */}
                <View>
                    <Typography title={"Nearest"} color={"#000000"} ff={"OpenSans_regular"} size={20} lh={27} ls={0.05} fw={600} />
                </View>
                {/* left */}
                <TouchableOpacity onPress={() => navigation.navigate("Nearest")} style={styles.headingLeftWrapper}>
                    <Typography title={"View All"} color={"#000000"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                    <Entypo name='chevron-small-down' size={16} color={"#000"} />
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Restaurant", { restaurantId: item?.id })} style={styles.restaurantsContainer}>
                        <Image source={item?.img} style={styles.restaurantImg} />
                        <View style={styles.restaurantContentWrapper}>
                            <Typography title={item?.name} color={"#000000"} ff={"OpenSans_regular"} size={20} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                            <View style={styles.divider}></View>
                            <View style={styles.ratingWrapper}>
                                <View style={styles.ratingLeftWrapper}>
                                    <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={20} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                                    <Entypo name='star-outlined' size={16} color={"#fff"} />
                                </View>
                                <View>
                                    <Typography title={item?.deliveryTime} color={"#202020"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                                </View>
                            </View>
                            <View style={styles.desWrapper}>
                                <Typography lines={1} title={item?.des} color={"#202020"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} ta={"center"} />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}

            />
        </>
    )
}

export default Nearest

const styles = StyleSheet.create({
    headingContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 20

    },
    headingLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    restaurantsContainer: {
        height: height * 0.27,
        width: width * 0.65,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 40,

    },
    restaurantImg: {
        height: height * 0.15,
        width: width * 0.50,
        position: "absolute",
        top: -40,
        left: "12%",
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
        paddingVertical: 10,
        gap: 30
    },
    ratingLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 2,
        borderRadius: 5
    },
    desWrapper: {
        paddingHorizontal: 10,
        marginBottom: 5
    }
})