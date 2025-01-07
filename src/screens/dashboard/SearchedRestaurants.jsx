import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons';
import usefetchRestaurantBySearch from '../../hooks/useFetchRestaurantBySearch';

const SearchedRestaurants = ({ route }) => {
    const navigation = useNavigation()
    const { query } = route.params;
    const [searchVal, setSearchVal] = useState(query)
    const { loading, handleFetchSearchRestaurants, searchRestaurants } = usefetchRestaurantBySearch()
    // console.log(query);
    useEffect(() => {
        setSearchVal(query)
    }, [])
    useEffect(() => {
        handleFetchSearchRestaurants({ query: searchVal })
    }, [])
    // console.log(searchVal);



    // console.log(searchRestaurants);


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
                    searchRestaurants.length === 0 && <Text style={{ color: "#000", fontFamily: "OpenSans-Regular", marginLeft: 10, textAlign: "center" }}>No item found</Text>
                }
                {
                    searchVal.trim() !== "" && (
                        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                            {searchRestaurants.map((item, id) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Restaurant", {
                                            restaurantId: item?.restaurant_id,
                                        })
                                    }
                                    key={id}
                                    style={styles.restaurantCard}>
                                    <Image
                                        source={require("../../assets/images/burger.png")}
                                        style={styles.restaurantImage}
                                    />
                                    <View>
                                        <Text style={styles.restaurantName}>
                                            {item?.restaurant_name}
                                        </Text>
                                        <View style={styles.restaurantDetails}>
                                            <View style={styles.ratingContainer}>
                                                <Image
                                                    source={require('../../assets/images/star.png')}
                                                    style={styles.ratingImage}
                                                />
                                                <Text style={styles.ratingText}>
                                                    {item.avg_rating}
                                                </Text>
                                            </View>
                                            {/* {`(${item.orders}+)`} */}
                                            <Text>(10)</Text>
                                            <Text>&middot;</Text>
                                            <Text style={styles.addressText}>
                                                Rajbagh
                                            </Text>
                                            <Text>&middot;</Text>
                                            <Text style={styles.deliveryTimeText}>
                                                {item.delivery_time}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}

                        </ScrollView>
                    )
                }
            </ScrollView>
        </View >
    )
}

export default SearchedRestaurants

const styles = StyleSheet.create({
    restaurantCard: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    restaurantImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    restaurantName: {
        fontSize: 14,
        fontFamily: 'OpenSans-Medium',
        color: '#000',
    },
    restaurantDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    ratingImage: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
    },
    ratingText: {
        fontSize: 12,
        fontFamily: 'OpenSans-Regular',
        color: '#000',
    },
    addressText: {
        fontSize: 12,
        fontFamily: 'OpenSans-Regular',
        color: '#000',
    },
    deliveryTimeText: {
        fontSize: 12,
        fontFamily: 'OpenSans-Regular',
        color: '#000',
    },
})