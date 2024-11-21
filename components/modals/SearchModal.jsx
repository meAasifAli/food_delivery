import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
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

const SearchModal = ({ isOpen, setIsOpen }) => {
    const navigation = useNavigation()
    const [searchVal, setSearchVal] = useState('');

    const AllRestaurnts = useRef([
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
            address: 'Rajbagh',
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
            menu: ['Burger', 'Pizza', 'Rolls'],
            src: require('../../assets/images/burger.png'),
            deliveryTime: '30-40 min',
        },
    ])

    const [restaurants, setRestaurants] = useState(AllRestaurnts.current);


    useEffect(() => {
        const filterRestaurants = () => {
            if (searchVal.trim() === '') {
                // Reset to all restaurants when search is cleared
                setRestaurants(AllRestaurnts.current);
            } else {
                const filteredRestaurants = AllRestaurnts.current.filter(restaurant =>
                    restaurant.name.toLowerCase().includes(searchVal.trim().toLowerCase())
                );
                setRestaurants(filteredRestaurants);
            }
        };
        filterRestaurants();
    }, [searchVal]);
    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(false)}
            style={{
                margin: 0,
                justifyContent: 'flex-start',
                flex: 1,
                backgroundColor: '#fff',
                borderBottomStartRadius: 25,
                borderBottomEndRadius: 25,
                width: '100%',
                marginHorizontal: 'auto',
                position: 'absolute',
                top: 0,
            }}
            animationIn={'slideInDown'}
            animationInTiming={300}
            animationOut={'slideOutUp'}
            animationOutTiming={300}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ padding: 10 }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity onPress={() => setIsOpen(false)}>
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
                        {
                            searchVal.trim() !== "" && <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                                {restaurants.map((item, id) => (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("SearchedRestaurants", { query: item?.name })}
                                        key={id}
                                        style={{
                                            padding: 10,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: 10,
                                        }}>
                                        <View>
                                            <Image
                                                source={item.src}
                                                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                                            />
                                        </View>
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 14,
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
                                                            fontFamily: 'OpenSans-Regular',
                                                            color: '#000',
                                                        }}>
                                                        {item.rating}
                                                    </Text>
                                                </View>
                                                <Text>{`(${item.orders}+)`}</Text>
                                                <Text>&middot;</Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        fontFamily: 'OpenSans-Regular',
                                                        color: '#000',
                                                    }}>
                                                    {item.address}
                                                </Text>
                                                <Text>&middot;</Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        fontFamily: 'OpenSans-Regular',
                                                        color: '#000',
                                                    }}>
                                                    {item.deliveryTime}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        }
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default SearchModal;

const styles = StyleSheet.create({});
