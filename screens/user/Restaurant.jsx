import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { restaurantMenus, restaurants } from '../../static/data';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Evil from 'react-native-vector-icons/EvilIcons'
import Typography from '../../components/Typography';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SearchMenu from '../../components/SearchMenu';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import RestaurantMenu from '../../components/modals/RestaurantMenu';
import FoodSizeMenu from '../../components/modals/FoodSizeMenu';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant } from '../../store/restaurantSlice';




const Restaurant = ({ route }) => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state?.auth)
    const { restaurant } = useSelector((state) => state?.restaurant)
    const [selectedMenu, setSelectedMenu] = useState("Veg")
    const { restaurantId } = route.params;
    const [openfirstDrawer, setOpenFirstDrawer] = useState(false)
    const [openSecondDrawer, setOpenSecondDrawer] = useState(false)
    const [size, setSize] = useState("small")


    const toggleFirstDrawer = () => {
        setOpenFirstDrawer(!openfirstDrawer)
    }

    const toggleSecondDrawer = () => {
        setOpenFirstDrawer(false)
        setOpenSecondDrawer(!openSecondDrawer)
    }

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const res = await axios.get(`http://192.168.100.26:3000/api/menu/${restaurantId}/34.0837/74.7973`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                dispatch(setRestaurant(res?.data?.data))


            } catch (error) {
                Alert.alert("Error in fetching restaurant");
                console.log(error?.message);

            }
        }
        fetchRestaurant()
    }, [restaurantId])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {/* header */}
            <TopHeading />
            {/* Restaurant Details */}
            <RestaurantDetails item={restaurant} />
            {/* Menu Divider */}
            <MenuDivider />
            {/* search */}
            <View>
                <SearchMenu />
            </View>
            <Menus selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            <Heading />
            <View>
                {
                    restaurant?.menu?.TopSeller?.map((item, id) => (
                        item?.type === selectedMenu.toLowerCase() && (
                            <MenuItem selectedMenu={selectedMenu} key={id} openfirstDrawer={openfirstDrawer} openSecondDrawer={openSecondDrawer} size={size} setSize={setSize} toggleFirstDrawer={toggleFirstDrawer} toggleSecondDrawer={toggleSecondDrawer} isDrawerVisible={openfirstDrawer} isSecondDrawerVisible={openSecondDrawer} item={item} />
                        )
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default Restaurant

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    HeadingWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: wp(3)
    },
    headingRightContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(4)
    },
    restaurantWrapper: {
        padding: wp(2),
        width: "95%",
        marginHorizontal: "auto",
        backgroundColor: "#202020",
        marginTop: hp(3),
        borderRadius: wp(5),
        display: "flex",
        flexDirection: "column",
        gap: wp(2),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: wp(3)
    },
    ratingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
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
    bottomWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    menuWrapper: {
        paddingVertical: 20,
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    menus: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "#D6D6D6",
        marginVertical: 20,
        padding: 10,

    },
    menuItemWrapper: {
        borderColor: "#D6D6D6",
        borderWidth: 1,
        padding: wp(2),
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: wp(1)
    },

    itemHeadingWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "auto"
    },
    menuContainer: {
        // height: height * 0.30,
        width: "90%",
        marginHorizontal: "auto",
        borderBottomColor: "#D6D6D6",
        borderBottomWidth: 1,
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

function TopHeading() {
    const navigation = useNavigation()
    return (
        <View style={styles.HeadingWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' size={20} color={"#202020"} />
            </TouchableOpacity>
            <View style={styles.headingRightContainer}>
                <Entypo name='heart-outlined' size={20} color={"#202020"} />
                <Evil name='share-google' size={20} color={"#202020"} />
            </View>
        </View>
    )
}

function RestaurantDetails({ item }) {
    return (
        <View style={styles.restaurantWrapper}>
            <Typography title={item?.restaurantName} color={"#fff"} size={32} lh={43} ls={0.07} fw={600} ff={"OpenSans-Regular"} />
            <Typography title={item?.categories?.join(", ")} lines={1} color={"#fff"} size={14} lh={18} ls={0.07} fw={300} ff={"OpenSans-Regular"} />
            <View style={{ borderStyle: "dashed", borderColor: "#fff", borderWidth: 0.50, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0, width: wp(100), marginTop: hp(2) }}></View>
            <View style={styles.ratingWrapper}>
                <View style={styles.ratingLeftWrapper}>
                    <Typography title={item?.rating} color={"#fff"} ff={"OpenSans_regular"} size={13} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                    <Entypo name='star-outlined' size={12} color={"#fff"} />
                </View>
                <View>
                    <Typography title={`${item?.ratingCount} ratings`} color={"#fff"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                </View>
            </View>
            <View style={styles.bottomWrapper}>
                <IonIcons name='timer-outline' size={20} color={"#fff"} />
                {/* Todo : Add dynamic delivery time */}
                <Typography title={`30-45 mins - ${item?.street}`} color={"#fff"} size={14} lh={18} ls={0.07} fw={400} ff={"OpenSans-Regular"} />
            </View>
        </View>
    )
}
function Heading() {
    return (
        <View style={styles.itemsContainer}>
            <View style={styles.itemHeadingWrapper}>
                <Typography title={"Top Seller"} color={"#202020"} size={16} lh={21} ls={0.05} fw={600} ff={"OpenSans-Regular"} />
                <SimpleLineIcons name='arrow-up' size={20} color={"#202020"} />
            </View>
        </View>
    )
}

function Menus({ selectedMenu, setSelectedMenu, }) {
    return (
        <View style={styles.menus}>
            {
                restaurantMenus.map((item, id) => (
                    <TouchableOpacity onPress={() => setSelectedMenu(item?.name)} key={id} style={[styles.menuItemWrapper,
                    {
                        backgroundColor: selectedMenu === item?.name ? "#FA4A0C" : "#fff"
                    }
                    ]}>
                        <Typography title={item?.name} color={selectedMenu === item?.name ? "#fff" : "#202020"} size={12} lh={16} ls={0.05} fw={300} ff={"OpenSans-Regular"} />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

function MenuDivider() {
    return (
        <View style={styles.menuWrapper}>
            <Typography title={"----"} color={"#D6D6D6"} size={16} lh={21} ls={0.05} fw={400} ff={"OpenSans-Regular"} />
            <MaterialIcons name='local-dining' size={20} color={"#202020"} />
            <Typography title={"----"} color={"#D6D6D6"} size={16} lh={21} ls={0.05} fw={400} ff={"OpenSans-Regular"} />
            <Typography title={"Menu"} color={"#202020"} size={16} lh={21} ls={0.05} fw={400} ff={"OpenSans-Regular"} />
            <Typography title={"----"} color={"#D6D6D6"} size={16} lh={21} ls={0.05} fw={400} ff={"OpenSans-Regular"} />
            <MaterialIcons name='local-dining' size={20} color={"#202020"} />
            <Typography title={"----"} color={"#D6D6D6"} size={16} lh={21} ls={0.05} fw={400} ff={"OpenSans-Regular"} />
        </View>
    )
}

function MenuItem({ item, size, setSize, toggleFirstDrawer, toggleSecondDrawer, openfirstDrawer, openSecondDrawer }) {
    const navigation = useNavigation()

    return (
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
                        <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={wp(3.5)} lh={hp(3)} ls={wp(0.05)} fw={400} ta={"center"} />
                        <Entypo name='star-outlined' size={12} color={"#fff"} />
                    </View>
                    <View>
                        <Typography title={`(${item?.order_count})`} color={"#20202080"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                    </View>
                </View>
                <View>
                    <Typography title={item?.description} color={"#000"} ff={"OpenSans_regular"} size={12} lh={16} ls={0.07} fw={300} maxW={wp(40)} />
                </View>
            </View>
            {/* right */}
            <View style={styles.rightWrapper}>
                <Image style={{ width: 150, height: 150, resizeMode: "contain" }} source={require("../../assets/images/menuImg.png")} />
                <View style={{ position: "absolute", bottom: 8, right: 15 }}>
                    <TouchableOpacity onPress={toggleFirstDrawer} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: 120, alignItems: "center" }}>
                        <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Add </Text>
                    </TouchableOpacity>
                </View>
                {/* Restaurant Menu  modal */}
                <RestaurantMenu item={item} toggleSecondDrawer={toggleSecondDrawer} isDrawerVisible={openfirstDrawer} toggleFirstDrawer={toggleFirstDrawer} />
                <FoodSizeMenu item={item} navigation={navigation} setSize={setSize} size={size} isSecondDrawerVisible={openSecondDrawer} toggleSecondDrawer={toggleSecondDrawer} />
            </View>
        </View>
    )
}