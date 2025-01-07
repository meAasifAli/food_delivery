import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, } from '../../../store/cartSlice'
import axios from 'axios';
import { BASE_URI } from '../../../config/uri';
import Entypo from 'react-native-vector-icons/Entypo'
import ItemCustomizationModal from '../../modals/ItemCustomizationModal';
import SetUserCustomization from '../../modals/SetUserCustomization';



const CartItems = () => {
    const [isOpenCustomization, setIsOpenCustomization] = useState(false)
    const [isOpen, setIsOpen] = useState(null)
    const dispatch = useDispatch()
    const { cart, loading } = useSelector((state) => state?.cart)
    const { token } = useSelector((state) => state?.auth)
    const [incrementLoader, setIncrementLoader] = useState(false)
    const [decrementLoader, setDecrementLoader] = useState({});


    // console.log(cart);



    const toggleModal = (id) => {
        setIsOpen((prev) => prev === id ? null : id)
    }

    const toggleCustomizationModal = (id) => {
        setIsOpenCustomization((prev) => prev === id ? null : id)
    }


    useEffect(() => {
        dispatch(fetchCartItems({ token }))
    }, [])





    const handleIncrement = async (cartItemId, qty, customizations) => {
        if (Object.keys(customizations)?.length > 0) {
            toggleCustomizationModal(cartItemId)
        }
        else {
            const newQty = qty + 1;
            setIncrementLoader((prev) => ({ ...prev, [cartItemId]: true }));
            try {
                await axios.patch(`${BASE_URI}/api/cart/itemQuantity/${cartItemId}`, {
                    quantity: newQty
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch(fetchCartItems({ token }))
            } catch (error) {
                setIncrementLoader((prev) => ({ ...prev, [cartItemId]: false }));
                Alert.alert("error", error)
                console.log(error?.response);
            }
            finally {
                setIncrementLoader((prev) => ({ ...prev, [cartItemId]: false }));
            }
        }
    }





    const handleDecrement = async (cartItemId, qty) => {
        const newQty = qty - 1;
        setDecrementLoader((prev) => ({ ...prev, [cartItemId]: true }));
        try {
            await axios.patch(`${BASE_URI}/api/cart/itemQuantity/${cartItemId}`, {
                quantity: newQty
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(fetchCartItems({ token }))
        } catch (error) {
            setDecrementLoader((prev) => ({ ...prev, [cartItemId]: false }));
            console.log(error?.response);
        }
        finally {
            setDecrementLoader((prev) => ({ ...prev, [cartItemId]: false }));
            setDecrementLoader(false)
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
                                <Typography title={item?.item_name} ff={"OpenSans-Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                                {
                                    Object.keys(item?.customizations)?.length > 0 && <TouchableOpacity onPress={() => toggleModal(item?.cart_item_id)} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <Text style={{ fontSize: 13, fontFamily: "OpenSans-Regular", color: "#ccc" }}>customize</Text>
                                        <Entypo name='chevron-down' size={16} color={"#ccc"} />
                                    </TouchableOpacity>
                                }
                                <ItemCustomizationModal isOpen={isOpen === item?.cart_item_id} setIsOpen={() => toggleModal(item?.item_id)} item={item} />
                            </View>
                        </View>
                        <View style={styles.ItemRightWrapper}>
                            <View style={styles.ItemRightLeftWrapper}>
                                <TouchableOpacity onPress={() => handleIncrement(item?.cart_item_id, item?.quantity, item?.customizations)}>
                                    <Text style={styles.actionTextPlus}>{
                                        incrementLoader[item?.cart_item_id] ? <ActivityIndicator size={15} color={"#FA4A0C"} /> : '+'
                                    }</Text>
                                </TouchableOpacity>
                                <SetUserCustomization setIsCustomization={() => toggleModal(item?.cart_item_id)} cartItemId={item?.cart_item_id} quantity={item?.quantity} title={item?.item_name} price={item?.item_price} isOpen={isOpenCustomization === item?.cart_item_id} setIsOpen={setIsOpenCustomization} />
                                <View>
                                    <Typography title={item?.quantity} ff={"OpenSans-Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                                </View>
                                <TouchableOpacity onPress={() => handleDecrement(item?.cart_item_id, item?.quantity)}>

                                    <Text style={styles.actionTextMinus}>{
                                        decrementLoader[item?.cart_item_id] ? <ActivityIndicator size={15} color={"#FA4A0C"} /> : '-'
                                    }</Text>

                                </TouchableOpacity>
                            </View>
                            <View>
                                <Typography title={`Rs: ${item?.item_total}`} ff={"OpenSans-Regular"} size={12} lh={16} fw={400} color={"#202020"} />
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