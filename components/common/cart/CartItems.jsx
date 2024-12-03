import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, fetchCartItems, incrementQuantity } from '../../../store/cartSlice'
import axios from 'axios';
import { BASE_URI } from '../../../config/uri';
import Entypo from 'react-native-vector-icons/Entypo'
import ItemCustomizationModal from '../../modals/ItemCustomizationModal';

const CartItems = () => {

    const [isOpen, setIsOpen] = useState(null)
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state?.cart)
    const { token } = useSelector((state) => state?.auth)


    const toggleModal = (id) => {
        setIsOpen((prev) => prev === id ? null : id)
    }

    useEffect(() => {
        dispatch(fetchCartItems({ token }))
    }, [dispatch, token])


    const handleIncrement = async (id, itemId, qty) => {
        const newQty = qty + 1;
        dispatch(incrementQuantity(id))
        try {
            await axios.patch(`${BASE_URI}/api/cart/itemQuantity/${itemId}`, {
                quantity: newQty
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            Alert.alert("error", error)
            console.log(error?.response);
        }
    }



    const handleDecrement = async (id, itemId, qty) => {

        const newQty = qty - 1;
        dispatch(decrementQuantity(id))
        try {
            await axios.patch(`${BASE_URI}/api/cart/itemQuantity/${itemId}`, {
                quantity: newQty
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error?.response);
        }

    }




    return (
        <View style={styles.ItemContainer}>
            {
                cart && cart?.map((item, id) => (
                    <View key={id} style={styles.ItemWrapper}>
                        <View style={styles.ItemLeftWrapper}>
                            <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                                <AntDesign name='caretup' size={hp(1)} color={"#FA4A0C"} />
                            </View>
                            <View>
                                <Typography title={item?.name} ff={"OpenSans-Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                                <TouchableOpacity onPress={() => toggleModal(item?.item_id)} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, fontFamily: "OpenSans-Regular", color: "#ccc" }}>customize</Text>
                                    <Entypo name='chevron-down' size={16} color={"#ccc"} />
                                </TouchableOpacity>
                                <ItemCustomizationModal isOpen={isOpen === item?.item_id} setIsOpen={() => toggleModal(item?.item_id)} item={item} />
                            </View>
                        </View>
                        <View style={styles.ItemRightWrapper}>
                            <View style={styles.ItemRightLeftWrapper}>
                                <TouchableOpacity onPress={() => handleIncrement(item?.id, item?.item_id, item?.quantity)}>
                                    <Text style={styles.actionTextPlus}>+</Text>
                                </TouchableOpacity>
                                <View>
                                    <Typography title={item?.quantity} ff={"OpenSans-Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                                </View>
                                <TouchableOpacity onPress={() => handleDecrement(item?.id, item?.item_id, item?.quantity)}>
                                    <Text style={styles.actionTextMinus}>-</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Typography title={`Rs: ${item?.price}`} ff={"OpenSans-Regular"} size={12} lh={16} fw={400} color={"#202020"} />
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default CartItems

const styles = StyleSheet.create({
    ItemContainer: {
        flex: 1,
        width: "95%",
        paddingHorizontal: 10,
        marginHorizontal: "auto",
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: wp(2),
        marginTop: hp(2),
        display: "flex",
        flexDirection: "column",
        gap: hp(1),

    },
    ItemWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: wp(2)
    },
    ItemLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: wp(3)
    },
    ItemRightWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(3)
    },
    ItemRightLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: wp(1),
        borderColor: "#D6D6D6",
        borderWidth: 1,
        height: hp(4),
        width: wp(20),
        borderRadius: wp(1),
    },
    actionTextPlus: { fontSize: 15, lineHeight: hp(2), fontWeight: "400", color: "#FA4A0C", marginLeft: wp(3) },
    actionTextMinus: { fontSize: 15, lineHeight: hp(2), fontWeight: "400", color: "#FA4A0C", marginRight: wp(3) },
})