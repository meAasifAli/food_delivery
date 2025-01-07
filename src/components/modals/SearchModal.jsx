import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Modal from 'react-native-modal';
import IonIcons from 'react-native-vector-icons/Ionicons';
import usefetchRestaurantBySearch from '../../hooks/useFetchRestaurantBySearch';

const SearchModal = ({ isOpen, setIsOpen }) => {
    const navigation = useNavigation();
    const [searchVal, setSearchVal] = useState('');

    const { loading, handleFetchSearchRestaurants, searchRestaurants } = usefetchRestaurantBySearch()




    useEffect(() => {
        if (searchVal.trim() !== '') {
            handleFetchSearchRestaurants({ query: searchVal })
        }
    }, [searchVal])




    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(false)}
            style={styles.modal}
            animationIn={"slideInDown"}
            animationInTiming={1000}
            animationOut={'slideOutDown'}
            animationOutTiming={1000}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        {/* Header */}
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => setIsOpen(false)}>
                                <IonIcons name="arrow-back" size={24} color={'#000'} />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>
                                Search for Dishes and Restaurants
                            </Text>
                        </View>

                        {/* Search Input */}
                        <TextInput
                            value={searchVal}
                            onChangeText={val => setSearchVal(val)}
                            style={styles.searchInput}
                            placeholder={'Try Cake'}
                            placeholderTextColor="#aaa"
                        />
                        {
                            searchVal.trim() !== "" && (
                                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                                    {searchRestaurants.map((item, id) => (
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate("SearchedRestaurants", {
                                                    query: item?.restaurant_name,
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

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default SearchModal;

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'flex-start',
    },
    container: {
        backgroundColor: '#fff',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: '#000',
        flex: 1,
        textAlign: 'center',
    },
    searchInput: {
        paddingLeft: 10,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: 'OpenSans-Regular',
        color: '#000',
        fontSize: 16,
        marginBottom: 10,
    },
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
});


// {/* Search Results */}
