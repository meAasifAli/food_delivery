import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
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
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';


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
        padding: 10
    },
    headingRightContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    restaurantWrapper: {
        padding: 10,
        width: width * 0.95,
        height: height * 0.25,
        marginHorizontal: "auto",
        backgroundColor: "#202020",
        marginTop: 15,
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
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
        padding: 10,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
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
        height: height * 0.30,
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
            <Typography title={"-------------------------------------"} lines={1} color={"#fff"} size={14} lh={18} ls={0.07} fw={300} ff={"OpenSans-Regular"} />
            <View style={styles.ratingWrapper}>
                <View style={styles.ratingLeftWrapper}>
                    <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={20} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                    <Entypo name='star-outlined' size={16} color={"#fff"} />
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
                    <Typography title={"Chicken Zinger Meal Box"} size={16} color={"#000"} ls={0.05} lh={19} fw={600} maxW={125} />
                    <Image style={{ resizeMode: "contain", height: 10, width: 10, marginLeft: 10 }} source={require("../assets/images/arrowUpBox.png")} />
                </View>
                <View style={styles.ratingWrapper}>
                    <View style={styles.ratingLeftWrapper}>
                        <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={20} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                        <Entypo name='star-outlined' size={16} color={"#fff"} />
                    </View>
                    <View>
                        <Typography title={"(24)"} color={"#20202080"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                    </View>
                </View>
                <View>
                    <Typography title={"1 Zinger Burger + 2 Wings + 1 Fries + 400ml Pepsi"} color={"#000"} ff={"OpenSans_regular"} size={12} lh={16} ls={0.07} fw={300} maxW={172} />
                </View>
            </View>
            {/* right */}
            <View style={styles.rightWrapper}>
                <Image style={{ width: width * 0.40, height: height * 0.30, resizeMode: "contain" }} source={require("../assets/images/menuImg.png")} />
                <View style={{ position: "absolute", bottom: 10, right: "12%" }}>
                    <Button onHandlePress={toggleFirstDrawer} color={"#FA4A0C"} bgColor={"#fff"} size={16} title={"Add"} widthVal={width * 0.30} />
                </View>
                {/* Restaurant Menu  modal */}
                <RestaurantMenu item={item} toggleSecondDrawer={toggleSecondDrawer} isDrawerVisible={openfirstDrawer} toggleFirstDrawer={toggleFirstDrawer} />
                <FoodSizeMenu item={item} navigation={navigation} setSize={setSize} size={size} isSecondDrawerVisible={openSecondDrawer} toggleSecondDrawer={toggleSecondDrawer} />
            </View>
        </View>
    )
}