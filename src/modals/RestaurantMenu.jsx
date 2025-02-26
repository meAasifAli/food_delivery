import { Dimensions, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Entypo from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useState } from 'react';
import { BASE_URI } from '../config/uri';
import { fetchBill, fetchCartItems } from '../store/cartSlice';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { LocationContext } from '../context/LocationContext';


const { height } = Dimensions.get("window")


const RestaurantMenu = ({ item, isNonCustomizable, setIsNonCustomizable }) => {

    // console.log(item);
    const { tipAmt, offerCode } = useContext(LocationContext)
    const { token } = useSelector((state) => state?.auth)
    const navigation = useNavigation()
    const [quantity, setQuantity] = useState(1)
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
                dispatch(fetchCartItems({ token }))
                dispatch(fetchBill({ token, tip: tipAmt, code: offerCode }))
                navigation.navigate('Cart', { screen: 'CartScreen' })
                setIsNonCustomizable(prev => !prev)
                setQuantity(1)
            }
        } catch (error) {
            // console.log(error?.response?.data?.message);
            ToastAndroid.showWithGravity(error?.response?.data?.message, ToastAndroid.LONG, ToastAndroid.TOP)
            setLoading(false)
            setIsNonCustomizable(prev => !prev)
        }
        finally {
            setLoading(false)
        }
    }

    const handleIncrease = () => {
        setQuantity(prev => prev + 1)
    }
    const handleDecrease = () => {
        setQuantity(prev => prev === 1 ? 1 : prev - 1)
    }

    return (
        <Modal
            isVisible={isNonCustomizable}
            onBackdropPress={() => setIsNonCustomizable(false)}
            style={styles.modal}
            backdropColor="#000"
            backdropOpacity={0.80}
        // animationIn="slideInUp"
        // animationInTiming={1000}
        // animationOut="slideOutDown"
        // animationOutTiming={1000}
        >

            <View style={styles.drawer}>
                <Image
                    style={{
                        width: "100%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: hp(30),
                        resizeMode: "cover",
                    }}
                    source={{ uri: item?.image }}
                />
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

                    <View style={styles.headingModal}>
                        <Text
                            style={{
                                fontFamily: "OpenSans-Medium",
                                fontSize: 24,
                                color: "#fff",
                                letterSpacing: 0.05,
                                lineHeight: 29,
                                fontWeight: "600",
                            }}
                        >
                            {item?.name}
                        </Text>
                    </View>

                    <View style={styles.ratingModalWrapper}>
                        <View style={styles.ratingModalLeftWrapper}>
                            <Text
                                style={{
                                    fontFamily: "OpenSans-Regular",
                                    fontSize: 14,
                                    color: "#fff",
                                    letterSpacing: 0.05,
                                    fontWeight: "400",
                                    textAlign: "center",
                                }}
                            >
                                {item?.avg_rating}
                            </Text>
                            <Entypo name="star-outlined" size={14} color={"#fff"} />
                        </View>

                        {item?.customisation === 0 && (
                            <View style={styles.qtyWrapper}>
                                <TouchableOpacity
                                    onPress={handleIncrease}
                                >
                                    <AntDesign name='plus' size={14} color={"#FA4A0C"} />

                                </TouchableOpacity>
                                <View>
                                    <Text
                                        style={{
                                            color: "#FA4A0C",
                                            fontSize: 14,
                                            fontWeight: "800",
                                            fontFamily: "OpenSans-Bold",

                                        }}
                                    >
                                        {quantity}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={handleDecrease}

                                >
                                    <AntDesign name="minus" size={14} color={"#FA4A0C"} />

                                </TouchableOpacity>
                            </View>
                        )}
                    </View>

                    <View style={styles.modalBottomWrapper}>
                        <Text
                            style={{
                                color: "#fff",
                                fontFamily: "OpenSans-Regular",
                                fontSize: 14,
                                letterSpacing: 0.07,
                                lineHeight: 24.32,
                                fontWeight: "300",
                            }}
                        >
                            {`${item?.description?.slice(0, 120)}...`}
                        </Text>
                    </View>

                    <View style={{ alignItems: "flex-end", marginRight: 20, marginVertical: 20 }}>
                        <TouchableOpacity style={styles.btnWrapper} onPress={() => handlePress()}>
                            {
                                loading ? <Text style={styles.btnText}>Adding....</Text> : <Text style={styles.btnText}>{`Add | RS: ${parseFloat(item?.price) * quantity}`}</Text>
                            }
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
        gap: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    btnWrapper: { backgroundColor: "#fff", borderRadius: 8, alignItems: "center", justifyContent: "center" },
    btnText: { fontFamily: "OpenSans-Medium", fontSize: 16, color: "#FA4A0C", letterSpacing: 0.05, lineHeight: 32.68, paddingHorizontal: 10 },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        flex: 1
    },
    drawer: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * (470 / height),
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
        paddingVertical: hp(0.7),
        borderRadius: 5
    },

    modalBottomWrapper: {
        paddingHorizontal: 20,
        marginTop: 20
    },
})