import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categories, restaurants } from '../static/data';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Typography from '../components/Typography';
const { width, height } = Dimensions.get("window")
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'

const Category = ({ route, navigation }) => {
    const [category, setCategory] = useState({})
    const { categoryId } = route?.params;

    // console.log(categoryId);

    useEffect(() => {
        const fetchCategory = () => {
            const item = categories?.find((item) => item?.id.toString() === categoryId.toString())
            setCategory(item)
        }
        fetchCategory()
    }, [])


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <View style={styles.headingContainer}>
                <View style={styles.headingTopWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IonIcons name='arrow-back' size={20} color={"#fff"} />
                    </TouchableOpacity>
                    <Typography title={category?.title} color={"#fff"} ff={"OpenSans-Regular"} fw={400} size={24} lh={34} ls={0.07} />
                    {
                        category?.img && <Image source={category?.img} style={styles.headerImg} />
                    }
                </View>
                <View style={styles.headerTextWrapper}>
                    <Typography title={category?.des} color={"#fff"} ff={"OpenSans-Italic"} fw={300} size={12} lh={16} ls={0.07} ta={"center"} />
                </View>
            </View>
            {/* filters */}
            <View style={styles.filterWrapper}>
                <TouchableOpacity style={styles.filterBtn}>
                    <Typography
                        title={"filter"}
                        color={"#202020"}
                    />
                    <IonIcons name='filter' color={"#202020"} ff={'OpenSans-Regular'} size={12} lh={16} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.filterBtn}
                >
                    <Typography title={"sort"} color={"#202020"} ff={'OpenSans-Regular'} size={12} lh={16} />
                    <FA5 name='sort' color={"#202020"} />
                </TouchableOpacity>
            </View>
            {/* heading */}
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                <Typography title={`Restaurants for ${category?.title}`} color={"#202020"} ff={"OpenSans-Regular"} fw={400} size={20} lh={27} ls={0.05} />
            </View>
            {/* restaurants */}
            <View style={styles.categoryWrapper}>
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

export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 0
    },
    headingContainer: {
        backgroundColor: "#202020",
        // height: height * 0.25,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    headingTopWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: "cover"
    },
    headerTextWrapper: {
        marginTop: 10,
        maxWidth: 225,
        margin: "auto"
    },
    filterWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: "#D6D6D6",
        borderBottomWidth: 1
    },
    filterBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 5,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: 15

    },
    categoryWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginHorizontal: 10
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