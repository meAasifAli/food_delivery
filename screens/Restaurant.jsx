import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { restaurantMenus, restaurants } from '../static/data';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Evil from 'react-native-vector-icons/EvilIcons'
import Typography from '../components/Typography';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SearchMenu from '../components/SearchMenu';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import RestaurantMenu from '../components/modals/RestaurantMenu';
import FoodSizeMenu from '../components/modals/FoodSizeMenu';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const { width, height } = Dimensions.get("window")

const Restaurant = ({ route }) => {
    const [selectedMenu, setSelectedMenu] = useState("Veg")
    const [item, setItem] = useState(null)
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
        const fetchRestaurant = () => {
            const item = restaurants.find((item) => item?.id.toString() === restaurantId.toString())
            setItem(item)
        }
        fetchRestaurant()
    }, [restaurantId])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {/* header */}
            <TopHeading />
            {/* Restaurant Details */}
            <RestaurantDetails item={item} />
            {/* Menu Divider */}
            <MenuDivider />
            {/* search */}
            <View>
                <SearchMenu />
            </View>
            <Menus selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} item={item} />
            <Heading />
            <View>
                <MenuItem openfirstDrawer={openfirstDrawer} openSecondDrawer={openSecondDrawer} size={size} setSize={setSize} toggleFirstDrawer={toggleFirstDrawer} toggleSecondDrawer={toggleSecondDrawer} isDrawerVisible={openfirstDrawer} isSecondDrawerVisible={openSecondDrawer} item={item} />
                <MenuItem openfirstDrawer={openfirstDrawer} openSecondDrawer={openSecondDrawer} size={size} setSize={setSize} toggleFirstDrawer={toggleFirstDrawer} toggleSecondDrawer={toggleSecondDrawer} isDrawerVisible={openfirstDrawer} isSecondDrawerVisible={openSecondDrawer} item={item} />
                <MenuItem openfirstDrawer={openfirstDrawer} openSecondDrawer={openSecondDrawer} size={size} setSize={setSize} toggleFirstDrawer={toggleFirstDrawer} toggleSecondDrawer={toggleSecondDrawer} isDrawerVisible={openfirstDrawer} isSecondDrawerVisible={openSecondDrawer} item={item} />
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
        width: wp(95),
        height: hp(30),
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
    itemsContainer: {
        padding: 10,
    },
    itemHeadingWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    menuContainer: {
        // height: height * 0.30,
        width: width * 0.9,
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
        backgroundColor: "transparent"
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
            <Typography title={item?.name} color={"#fff"} size={32} lh={43} ls={0.07} fw={600} ff={"OpenSans-Regular"} />
            <Typography title={item?.des} lines={1} color={"#fff"} size={14} lh={18} ls={0.07} fw={300} ff={"OpenSans-Regular"} />
            <View style={{ borderStyle: "dashed", borderColor: "#fff", borderWidth: 0.50, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0, width: wp(100), marginTop: hp(2) }}></View>
            <View style={styles.ratingWrapper}>
                <View style={styles.ratingLeftWrapper}>
                    <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={13} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                    <Entypo name='star-outlined' size={12} color={"#fff"} />
                </View>
                <View>
                    <Typography title={"1k+ ratings"} color={"#fff"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                </View>
            </View>
            <View style={styles.bottomWrapper}>
                <IonIcons name='timer-outline' size={20} color={"#fff"} />
                <Typography title={`${item?.deliveryTime} - ${item?.address}`} color={"#fff"} size={14} lh={18} ls={0.07} fw={400} ff={"OpenSans-Regular"} />
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

function Menus({ selectedMenu, setSelectedMenu, item }) {
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
                    <Typography title={"Chicken Zinger Meal Box"} size={wp(3.5)} color={"#000"} ls={0.05} lh={19} fw={600} maxW={wp(25)} />
                    <Image resizeMode='contain' width={20} height={20} source={require("../assets/images/arrowUpBox.png")} />
                </View>
                <View style={styles.ratingWrapper}>
                    <View style={styles.ratingLeftWrapper}>
                        <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={wp(3.5)} lh={hp(3)} ls={wp(0.05)} fw={400} ta={"center"} />
                        <Entypo name='star-outlined' size={12} color={"#fff"} />
                    </View>
                    <View>
                        <Typography title={"(24)"} color={"#20202080"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                    </View>
                </View>
                <View>
                    <Typography title={"1 Zinger Burger + 2 Wings + 1 Fries + 400ml Pepsi"} color={"#000"} ff={"OpenSans_regular"} size={12} lh={16} ls={0.07} fw={300} maxW={wp(40)} />
                </View>
            </View>
            {/* right */}
            <View style={styles.rightWrapper}>
                <Image style={{ width: wp(40), height: hp(35), resizeMode: "contain" }} source={require("../assets/images/menuImg.png")} />
                <View style={{ position: "absolute", bottom: hp(4), right: wp(4.5) }}>
                    <TouchableOpacity onPress={toggleFirstDrawer} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(30), alignItems: "center" }}>
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