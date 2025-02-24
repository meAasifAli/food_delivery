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
            <ScrollView showsVerticalScrollIndicator={false} >
                {
                    searchMenuItems.length > 0 && searchMenuItems?.map((item, id) => {
                        // console.log(item);

                        return (
                            <View key={id} style={{
                                orderBottomColor: "#D6D6D6",
                                borderBottomWidth: 1,
                                width: "90%",
                                marginHorizontal: "auto",
                                marginVertical: 10
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
                                        <View>
                                            <Typography title={item?.description?.slice(0, 130)} color={"#000"} ff={"OpenSans-Regular"} size={12} lh={16} ls={0.07} fw={300} maxW={wp(40)} />
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

                                    </View>
                                    {/* right */}
                                    <View style={styles.rightWrapper}>
                                        <Image style={{ width: 150, height: 150, resizeMode: "cover", borderRadius: 15 }} source={item?.image ? { uri: item?.image } : require("../../assets/images/menu_img.png")} />
                                        <View style={{ position: "absolute", bottom: 8, right: 15 }}>
                                            <TouchableOpacity onPress={() => {
                                                item?.customisation === 0 ? setIsNonCustomizable(prev => !prev) : setIsCustomizable(prev => !prev)
                                            }} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: 120, alignItems: "center" }}>
                                                <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Add </Text>
                                            </TouchableOpacity>
                                        </View>
                                        {/* Restaurant Menu  modal */}
                                        {
                                            item?.customisation === 0 && <RestaurantMenu item={item} isNonCustomizable={isNonCustomizable} setIsNonCustomizable={setIsNonCustomizable} />
                                        }
                                        {
                                            item?.customisation === 1 && <FoodSizeMenu item={item} isCustomizable={isCustomizable} setIsCustomizable={setIsCustomizable} />
                                        }


                                    </View>
                                </View>
                                <View>
                                    {
                                        item.customisation === 1 && <Text style={{ textAlign: "right", fontFamily: "OpenSans-Regular", color: "#000", marginRight: 25, marginBottom: 10 }}>customizable</Text>
                                    }
                                </View>
                            </View>
                        )
                    })
                }
                <View style={{ marginTop: 20 }}>
                    {
                        searchQuery.length > 1 && searchMenuItems?.length === 0 && <View >
                            <Text style={{ color: "#ccc", fontSize: 16, fontFamily: "OpenSans-Medium" }}>No Items Found</Text>
                        </View>
                    }
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
        width: wp(30)

    },
    ratingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp(0.5),
        gap: wp(6),
        marginTop: hp(2)
    },
    ratingLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(1),
        padding: wp(1),
        borderRadius: wp(1)
    },
    rightWrapper: {
        position: "relative",
        backgroundColor: "transparent",
        paddingVertical: hp(4)
    },
})

