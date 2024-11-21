import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons';

const SearchedRestaurants = ({ route }) => {
    const navigation = useNavigation()
    const { query } = route.params;
    const [searchVal, setSearchVal] = useState(query)
    // console.log(query);
    const AllRestaurants = useRef([
        {
            id: 1,
            name: 'Burger King',
            address: 'Near Bus Stand, New Delhi',
            rating: 4.5,
            orders: '1.7k',
            menu: ['Burger', 'Pizza', 'Rolls'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '30-40 min',
        },
        {
            id: 2,
            name: 'Pizza Hut',
            address: 'Nowgam, Srinagar',
            rating: 4.5,
            orders: '1.7k',
            menu: ['Burger', 'Pizza', 'Rolls'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '30-40 min',
        },
        {
            id: 3,
            name: 'Cafe Ertugrul',
            address: 'Rajbagh, Srinagar',
            rating: 4.5,
            orders: '1.7k',
            menu: ['Burger', 'Pizza', 'Rolls'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '30-40 min',
        },
        {
            id: 4,
            name: 'Al Baik',
            address: 'Sanat Nagar, Srinagar',
            rating: 4.5,
            orders: '1.7k',
            menu: ['Shawarma', 'Chicken', 'Fries'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '30-40 min',
        },
        {
            id: 5,
            name: 'Kashmir Sweets',
            address: 'Lal Chowk, Srinagar',
            rating: 4.0,
            orders: '2.3k',
            menu: ['Sweets', 'Snacks', 'Drinks'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '25-35 min',
        },
        {
            id: 6,
            name: 'Dominos Pizza',
            address: 'Dalgate, Srinagar',
            rating: 4.3,
            orders: '1.2k',
            menu: ['Pizza', 'Pasta', 'Garlic Bread'],
            src: require('../../assets/images/pizza.png'),
            deliveryTime: '20-30 min',
        },
        {
            id: 7,
            name: 'Grill and Chill',
            address: 'Bemina, Srinagar',
            rating: 4.7,
            orders: '1.9k',
            menu: ['Grills', 'Steaks', 'Drinks'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '30-40 min',
        },
        {
            id: 8,
            name: 'Subway',
            address: 'Rajbagh, Srinagar',
            rating: 4.2,
            orders: '900',
            menu: ['Sandwiches', 'Salads', 'Cookies'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '15-20 min',
        },
        {
            id: 9,
            name: 'Chinese Wok',
            address: 'Nowgam, Srinagar',
            rating: 4.6,
            orders: '1.1k',
            menu: ['Noodles', 'Manchurian', 'Soups'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '25-30 min',
        },
        {
            id: 10,
            name: 'Paradise Bakery',
            address: 'Lal Chowk, Srinagar',
            rating: 4.8,
            orders: '3.2k',
            menu: ['Cakes', 'Pastries', 'Breads'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '20-30 min',
        },
    ]);


    const [restaurants, setRestaurants] = useState(AllRestaurants.current);


    useEffect(() => {
        const filterRestaurants = () => {
            if (searchVal.trim() === '') {
                // Reset to all restaurants when search is cleared
                setRestaurants(AllRestaurants.current);
            } else {
                const filteredRestaurants = AllRestaurants.current.filter(restaurant =>
                    restaurant.name.toLowerCase().includes(searchVal.trim().toLowerCase())
                );
                setRestaurants(filteredRestaurants);
            }
        };
        filterRestaurants();
    }, [searchVal]);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff", padding: 5 }}>
            <View style={{ padding: 10 }}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IonIcons name="arrow-back" size={20} color={'#000'} />
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: 'OpenSans-Regular',
                                color: '#000',
                            }}>
                            Search for Dishes and Restaurants
                        </Text>
                    </View>
                </View>
                <TextInput
                    value={searchVal}
                    onChangeText={val => setSearchVal(val)}
                    style={{
                        paddingLeft: 10,
                        marginTop: 10,
                        height: 50,
                        width: '100%',
                        borderColor: '#ccc',
                        borderWidth: 1,
                        borderRadius: 10,
                        fontFamily: 'OpenSans-Regular',
                        color: '#000',
                        fontSize: 16,
                    }}
                    placeholder={'Try Cake'}
                />

            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingBottom: 40
            }}>
                {
                    restaurants.map((item, index) => (
                        <TouchableOpacity key={index} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 50, elevation: 5, backgroundColor: "#fff", marginHorizontal: 10, borderRadius: 15, marginTop: 20, borderLeftWidth: 1, borderLeftColor: "#FA4A0C" }}>
                            <View style={{ position: "relative", marginLeft: 20 }}>

                                <Image source={item?.src} style={{ height: 100, width: 100, resizeMode: "contain", }} />
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'OpenSans-Medium',
                                        color: '#000',
                                    }}>
                                    {item.name}
                                </Text>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 5,
                                    }}>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: 5,
                                        }}>
                                        <Image
                                            source={require('../../assets/images/star.png')}
                                            style={{ width: 10, height: 10, resizeMode: 'contain' }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontFamily: 'OpenSans-Bold',
                                                color: '#6B6262',
                                            }}>
                                            {item.rating}
                                        </Text>
                                    </View>
                                    <Text style={{
                                        fontSize: 12,
                                        fontFamily: 'OpenSans-Bold',
                                        color: '#6B6262',
                                    }}>{`(${item.orders}+)`}</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontFamily: 'OpenSans-Regular',
                                            color: '#6B6262',
                                        }}>
                                        {item.address}
                                    </Text>
                                    <Text style={{ fontFamily: "OpenSans-Bold" }}>&middot;</Text>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontFamily: 'OpenSans-Regular',
                                            color: '#6B6262',
                                        }}>
                                        {item.deliveryTime}
                                    </Text>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontFamily: 'OpenSans-Regular',
                                        color: '#6B6262',
                                    }}>
                                    {item.menu.join(", ")}
                                </Text>

                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View >
    )
}

export default SearchedRestaurants

const styles = StyleSheet.create({})