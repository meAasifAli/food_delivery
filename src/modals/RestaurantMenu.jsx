import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Entypo from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { BASE_URI } from '../config/uri';
import { fetchCartItems } from '../store/cartSlice';


const RestaurantMenu = ({ item, isNonCustomizable, setIsNonCustomizable }) => {
    const { token } = useSelector((state) => state?.auth)
    const navigation = useNavigation()
    const [quantity, setQuanitity] = useState(1)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const handlePress = () => {
        item?.customisation === 0 ? handleAddToCart() : toggleSecondDrawer()
    };

    const handleAddToCart = async () => {
        try {
            setLoading(true)
            const res = await axios.post(`${BASE_URI}/api/cart/addItem/${item?.id}`, {
                quantity: quantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res.data) {
                Alert.alert("Item has been Added to the Cart")
                dispatch(fetchCartItems({ token }))
                navigation.navigate('CartScreen')
                setIsNonCustomizable(prev => !prev)
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
            Alert.alert(error?.response?.data?.message)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }

    const handleIncrease = () => {
        setQuanitity(prev => prev + 1)
    }
    const handleDecrease = () => {
        setQuanitity(prev => prev === 1 ? 1 : prev - 1)
    }

    return (
        <Modal
            isVisible={isNonCustomizable}
            onBackdropPress={() => setIsNonCustomizable(prev => !prev)}
            // swipeDirection="down"
            // onSwipeComplete={toggleFirstDrawer}
            style={styles.modal}
            backdropColor='transparent'
            backdropOpacity={0.50}
            animationIn={"slideInUp"}
            animationInTiming={1000}
            animationOut={"slideOutDown"}
            animationOutTiming={1000}

        >
            <View style={styles.drawer}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <Image style={{
                        width: "100%", borderTopLeftRadius: 20,
                        borderTopRightRadius: 20, height: hp(30), resizeMode: "cover"
                    }} source={{ uri: item?.image }} />
                    <View style={styles.headingModal}>
                        <Text style={{ fontFamily: "OpenSans-Medium", fontSize: 24, color: "#fff", letterSpacing: 0.05, lineHeight: 29, fontWeight: 600, maxWidth: 188 }}>{item?.name}</Text>
                    </View>
                    <View style={styles.ratingModalWrapper}>
                        <View style={styles.ratingModalLeftWrapper}>
                            <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 13, color: "#fff", letterSpacing: 0.05, lineHeight: 27, fontWeight: 400, textAlign: "center" }}>{item?.avg_rating}</Text>
                            <Entypo name='star-outlined' size={12} color={"#fff"} />
                        </View>
                        {
                            item?.customisation === 0 && <View style={styles.qtyWrapper}>
                                <TouchableOpacity onPress={handleIncrease} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(10), alignItems: "center" }}>
                                    <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>+</Text>
                                </TouchableOpacity>
                                <View >
                                    <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "800", fontFamily: "OpenSans-Medium", lineHeight: 60, letterSpacing: 0.05 }}>{quantity}</Text>
                                </View>
                                <TouchableOpacity onPress={handleDecrease} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(10), alignItems: "center" }}>
                                    <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>-</Text>
                                </TouchableOpacity>
                            </View>
                        }

                    </View>
                    <View style={styles.modalBottomWrapper}>
                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 18, letterSpacing: 0.07, lineHeight: 24.32, fontWeight: 300 }}>{item?.description}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end", marginRight: 20, marginVertical: 20 }}>
                        <TouchableOpacity style={styles.btnWrapper} onPress={() => handlePress()}>
                            <Text style={styles.btnText}>{`Add | RS: ${item?.price}`}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default RestaurantMenu

const styles = StyleSheet.create({
    qtyWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: wp(3),

    },
    btnWrapper: { height: hp(6), backgroundColor: "#fff", borderRadius: 10, alignItems: "center", justifyContent: "center" },
    btnText: { fontFamily: "OpenSans-Medium", fontSize: 20, color: "#FA4A0C", letterSpacing: 0.05, lineHeight: 32.68, paddingHorizontal: 10 },
    modal: {
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal
    },
    drawer: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "65%",
        width: "100%"
    },
    headingModal: {
        padding: wp(5)
    },
    ratingModalWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    ratingModalLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: wp(3),
        paddingVertical: hp(0.5),
        borderRadius: 5
    },

    modalBottomWrapper: {
        paddingHorizontal: 20,
        marginTop: 20
    },
})