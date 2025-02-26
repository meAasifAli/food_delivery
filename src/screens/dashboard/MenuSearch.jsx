import { Image, ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/common/dashboard/MenuSearch/SearchBar';
import usefetchMenuBySearch from '../../hooks/usefetchMenuBySearch';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../../components/Typography';
import Entypo from 'react-native-vector-icons/Entypo'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import RestaurantMenu from '../../modals/RestaurantMenu';
import FoodSizeMenu from '../../modals/FoodSizeMenu';
import Feather from 'react-native-vector-icons/Feather';


const MenuSearch = ({ route }) => {
    const [isCustomizable, setIsCustomizable] = useState(false)
    const [isNonCustomizable, setIsNonCustomizable] = useState(false)




    const { params } = route.params;
    // console.log(params);

    // console.log(params?.restaurantName);
    const [searchQuery, setSearchQuery] = useState("")
    // console.log(searchQuery);

    const { handleFetchSearchItems, searchMenuItems } = usefetchMenuBySearch()




    useEffect(() => {
        if (searchQuery.length > 0) {
            handleFetchSearchItems({ query: searchQuery, restaurantId: params?.restaurantId })
        }
    }, [searchQuery])


    // console.log(searchMenuItems);


    return (
        <View style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} restaurantName={params?.restaurantName} />
            <ScrollView contentContainerStyle={{ marginTop: 40 }} showsVerticalScrollIndicator={false} >
                {
                    searchMenuItems.length > 0 && searchMenuItems?.map((item, id) => {

                        return (
                            <View key={id} style={{
                                borderBottomColor: "#D6D6D6",
                                borderBottomWidth: 0.4,
                                width: "90%",
                                marginHorizontal: "auto",
                            }}>
                                <View style={styles.menuContainer}>
                                    {/* left */}
                                    <View style={styles.leftWrapper}>
                                        <View style={styles.leftHeadingWrapper}>
                                            <View>
                                                <Text style={{ fontFamily: "OpenSans-Bold", color: "black", fontWeight: "600", fontSize: hp(2) }}>{item?.name}</Text>
                                            </View>
                                            <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                                                <AntDesign name='caretup' size={hp(0.8)} color={"#FA4A0C"} />
                                            </View>
                                        </View>

                                        <View style={styles.ratingWrapper}>
                                            <View style={styles.ratingLeftWrapper}>
                                                <Typography title={item?.avg_rating} color={"#fff"} ff={"OpenSans-Regular"} size={wp(3.5)} lh={hp(3)} ls={wp(0.05)} fw={400} ta={"center"} />
                                                <Entypo name='star-outlined' size={12} color={"#fff"} />
                                            </View>
                                            <View>
                                                <Typography title={`(${item?.order_count})`} color={"#20202080"} ff={"OpenSans-Regular"} size={16} lh={21} ls={0.05} fw={300} />
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 5 }}>
                                            <Typography title={item?.description} color={"#000"} ff={"OpenSans-Regular"} size={14} lh={16} ls={0.07} fw={300} maxW={wp(40)} />
                                        </View>

                                    </View>
                                    {/* right */}
                                    <View style={styles.rightWrapper}>

                                        <View style={{ width: 100, height: 100, borderRadius: 10, backgroundColor: "#fff" }}>
                                            <Image style={{ resizeMode: "cover", width: "100%", height: "100%", borderRadius: 10 }} source={{ uri: item?.image }} />
                                        </View>

                                        <View style={{ position: "absolute", bottom: 15, right: 10 }}>
                                            <TouchableOpacity onPress={() => {
                                                item?.customisation === 0 ? setIsNonCustomizable(true) : setIsCustomizable(true)
                                            }} style={{ backgroundColor: "#fff", padding: 5, borderRadius: 8, borderColor: "#c6c6c6", borderWidth: 0.40, width: 80, alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                                                <Text style={{ color: "#FA4A0C", fontSize: 16, fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Add </Text>
                                                {
                                                    item?.customisation === 0 && <Feather name="edit" color={"#FA4A0C"} />
                                                }
                                            </TouchableOpacity>
                                        </View>
                                        {
                                            item?.customisation === 0 && <RestaurantMenu item={item} isNonCustomizable={isNonCustomizable} setIsNonCustomizable={setIsNonCustomizable} />
                                        }
                                        {
                                            item?.customisation === 1 && <FoodSizeMenu item={item} isCustomizable={isCustomizable} setIsCustomizable={setIsCustomizable} />
                                        }
                                    </View>
                                </View>
                                <View style={{}}>

                                </View>
                            </View >
                        )
                    })
                }
                {/* No Items Found */}
                <View style={{ marginTop: 20 }}>
                    {searchQuery.length > 1 && searchMenuItems.length === 0 && (
                        <View>
                            <Text style={{ color: "#ccc", fontSize: 16, fontFamily: "OpenSans-Medium" }}>
                                No Items Found
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default MenuSearch

const styles = StyleSheet.create({
    menuContainer: {
        // height: height * 0.30,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 10
    },
    leftHeadingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,

    },
    ratingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp(0.5),
        gap: 10,
    },
    ratingLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(1),
        paddingHorizontal: 5,
        borderRadius: 5
    },
    rightWrapper: {
        position: "relative",
        backgroundColor: "transparent",
        paddingVertical: hp(4)
    },
})

