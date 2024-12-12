import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categories, } from '../../static/data';
import Typography from '../../components/Typography';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../../components/common/category/Header';
import Filters from '../../components/common/category/Filters';
import axios from 'axios';
import { BASE_URI } from '../../config/uri';
import { useSelector } from 'react-redux';


const Category = ({ route, navigation }) => {
    const [category, setCategory] = useState({})
    const { categoryId } = route?.params;
    const [restaurants, setRestaurants] = useState([])
    const { token } = useSelector((state) => state?.auth)



    useEffect(() => {
        const fetchCategory = () => {
            const item = categories?.find((item) => item?.id.toString() === categoryId.toString())
            setCategory(item)
        }
        fetchCategory()
    }, [])

    useEffect(() => {
        const searchCategory = async () => {
            try {
                const res = await axios.get(`${BASE_URI}/api/restaurant/category/34.1200/74.8200/pizza`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                console.log(res.data);


            } catch (error) {
                Alert.alert("Error in fetching categories: ", error?.response?.data?.message)
                console.error(error?.response?.data?.message)
            }
        }
        searchCategory()
    }, [])

    // console.log(category);

    return (
        <View
            style={styles.container}>
            <Header category={category} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* filters */}
                <Filters />
                {/* heading */}
                <View style={{ padding: wp(5) }}>
                    <Typography title={`Restaurants for ${category?.title}`} color={"#202020"} ff={"OpenSans-Regular"} fw={400} size={20} lh={27} ls={0.05} />
                </View>
                {/* restaurants */}
                {/* <View style={styles.categoryWrapper}>
                    {
                        restaurants.map((item, id) => (
                            <View key={id} style={styles.restaurantsContainer}>
                                <Image source={item?.img} style={styles.restaurantImg} />
                                <View style={styles.restaurantContentWrapper}>
                                    <Typography title={item?.name} color={"#000000"} ff={"OpenSans_regular"} size={13} lh={15} ls={0.05} fw={400} ta={"center"} />
                                    <View style={styles.divider}></View>
                                    <View style={styles.ratingWrapper}>
                                        <View style={styles.ratingLeftWrapper}>
                                            <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={hp(2)} lh={hp(3.5)} ls={0.05} fw={400} ta={"center"} />
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
                </View> */}
            </ScrollView>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 0
    },
    categoryWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginHorizontal: wp(2)
    },

    restaurantsContainer: {
        elevation: 3,
        backgroundColor: "#fff",
        height: hp(25),
        width: wp(45),
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: wp(2),
        marginHorizontal: 5,
        marginBottom: wp(2),
        marginTop: hp(5),
    },
    restaurantImg: {
        height: hp(15),
        width: wp(25),
        position: "absolute",
        top: wp(-12),
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
        gap: wp(5)
    },
    ratingLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: wp(1),
        borderRadius: 5
    },
    desWrapper: {
        paddingHorizontal: 10,
        marginBottom: 5
    }
})