import { Alert, Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Typography from '../../components/Typography';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SearchMenu from '../../components/SearchMenu';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant } from '../../store/restaurantSlice';
import { BASE_URI } from '../../config/uri';
import Header from '../../components/common/restaurant/Header';
import RestaurantDetails from '../../components/common/restaurant/RestaurantDetails';
import Menus from '../../components/common/restaurant/Menus';
import MenuItem from '../../components/common/restaurant/MenuItem';
import { Keyboard } from 'react-native';




const Restaurant = ({ route, navigation }) => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state?.auth)
    const { restaurant } = useSelector((state) => state?.restaurant)
    const [selectedMenu, setSelectedMenu] = useState("Veg")
    const { restaurantId } = route.params;
    // const [openfirstDrawer, setOpenFirstDrawer] = useState(false)
    // const [openSecondDrawer, setOpenSecondDrawer] = useState(false)
    const [size, setSize] = useState("small")


    // console.log(restaurant);


    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`${BASE_URI}/api/menu/${restaurantId}/34.0837/74.7973`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                dispatch(setRestaurant(res?.data?.data))


            } catch (error) {
                Alert.alert("Error in fetching restaurant");
                console.log(error?.message);
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        }
        fetchRestaurant()
    }, [restaurantId])

    const handleFocusSearch = () => {
        Keyboard.dismiss()
        navigation.navigate("SearchMenu", { params: { restaurantName: restaurant?.restaurantName } })
    }


    return loading ?
        (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image style={{ height: 100, width: 100, resizeMode: "contain" }} source={require("../../assets/images/loader.png")} />
            </View>
        ) : (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                {/* header */}
                <Header />
                {/* Restaurant Details */}
                <RestaurantDetails item={restaurant} />
                {/* Menu Divider */}
                <MenuDivider />
                {/* search */}
                <View>
                    <SearchMenu handleFocus={handleFocusSearch} />
                </View>
                <Menus selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                <Heading />
                <View>
                    {
                        restaurant?.menu?.TopSeller?.map((item, id) => (
                            item?.type === selectedMenu.toLowerCase() && (
                                <MenuItem selectedMenu={selectedMenu} key={id} size={size} setSize={setSize} item={item} />
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
    menuWrapper: {
        paddingVertical: 20,
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    itemHeadingWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "auto"
    },

})


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

