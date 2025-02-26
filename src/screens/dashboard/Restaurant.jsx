import { Alert, RefreshControl, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
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
import { Text } from 'react-native';
import { LocationContext } from '../../context/LocationContext';
import { List } from 'react-content-loader/native';





const Restaurant = ({ route, navigation }) => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state?.auth)
    const { restaurant } = useSelector((state) => state?.restaurant)
    const [selectedMenu, setSelectedMenu] = useState("veg")
    const { restaurantId } = route.params;
    const [size, setSize] = useState("small")
    const [filter, setFilter] = useState("")
    const [expandedCategories, setExpandedCategories] = useState([]);
    const [refreshing, setRefreshing] = useState(false)
    const { location } = useContext(LocationContext)

    const { savedUserAddresses } = useSelector(state => state?.address)
    const selectedAddress = savedUserAddresses?.find((address) => address?.selected === 1)




    useEffect(() => {
        if (restaurant?.menu) {
            const firstCategory = Object.keys(restaurant.menu)[0];
            setExpandedCategories([firstCategory]);
        }
    }, [restaurant?.menu]);

    const toggleCategory = (category) => {
        setExpandedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat !== category)
                : [...prev, category]
        );
    };





    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`${BASE_URI}/api/menu/${restaurantId}/${selectedAddress ? selectedAddress?.lat : location?.latitude}/${selectedAddress ? selectedAddress?.lon : location?.longitude}?type=${selectedMenu}&filter=${filter}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })

                if (res?.data) {
                    dispatch(setRestaurant(res?.data?.data))
                }
            } catch (error) {
                console.log(error);

                // Alert.alert("Error in fetching restaurant", error?.response?.data?.message);
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        }
        fetchRestaurant()
    }, [restaurantId, selectedMenu, filter])




    const handleFocusSearch = () => {
        Keyboard.dismiss()
        navigation.navigate("SearchMenu", { params: { restaurantName: restaurant?.restaurantName, restaurantId: restaurantId } })
    }


    const handleRefresh = async () => {
        try {
            setRefreshing(true)
            const res = await axios.get(`${BASE_URI}/api/menu/${restaurantId}/${selectedAddress ? selectedAddress?.lat : location?.latitude}/${selectedAddress ? selectedAddress?.lon : location?.longitude}?type=${selectedMenu}&filter=${filter}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            if (res?.data) {
                dispatch(setRestaurant(res?.data?.data))
            }
        } catch (error) {
            console.log("Error in fetching restaurant: ", error);

            // Alert.alert("Error in fetching restaurant", error?.message);
            setRefreshing(false)
        }
        finally {
            setRefreshing(false)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <Header item={restaurant} />
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />} showsVerticalScrollIndicator={false} style={styles.container}>

                {/* Restaurant Details */}
                <RestaurantDetails item={restaurant} />
                {/* Menu Divider */}
                <MenuDivider />
                {/* search */}
                <View>
                    <SearchMenu handleFocus={handleFocusSearch} />
                </View>
                <Menus filter={filter} setFilter={setFilter} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                <View>
                    {restaurant?.menu &&
                        Object.entries(restaurant.menu).map(([category, items], categoryIndex) => (
                            <View key={categoryIndex} style={{ marginBottom: 30 }}>
                                {/* Display category name */}
                                <TouchableOpacity
                                    onPress={() => toggleCategory(category)}
                                    style={styles.itemsContainer}
                                >
                                    <View style={styles.itemHeadingWrapper}>
                                        <Typography
                                            title={category}
                                            color={"#202020"}
                                            size={16}
                                            lh={21}
                                            ls={0.05}
                                            fw={600}
                                            ff={"OpenSans-Bold"}
                                        />
                                        <SimpleLineIcons
                                            name={expandedCategories.includes(category) ? 'arrow-down' : 'arrow-up'}
                                            size={20}
                                            color={"#c6c6c6"}
                                        />
                                    </View>
                                </TouchableOpacity>

                                {expandedCategories.includes(category) && (
                                    <>
                                        {
                                            refreshing && loading && <List />
                                        }
                                        {Array.isArray(items) && items.length > 0 ? (
                                            items.map((item, itemIndex) => (
                                                <MenuItem
                                                    selectedMenu={selectedMenu}
                                                    key={itemIndex}
                                                    size={size}
                                                    setSize={setSize}
                                                    item={item}
                                                />
                                            ))
                                        ) : (
                                            <Text
                                                style={{
                                                    color: 'gray',
                                                    fontFamily: "OpenSans-Regular",
                                                    textAlign: "center",
                                                    paddingVertical: 10
                                                }}
                                            >
                                                No items found
                                            </Text>
                                        )}
                                    </>
                                )}
                            </View>
                        ))}
                </View>


            </ScrollView>
        </View>

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

