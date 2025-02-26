import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, ToastAndroid } from 'react-native'
import Modal from 'react-native-modal'
import Entypo from 'react-native-vector-icons/Entypo'
import RadioButton from 'react-native-radio-button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import CheckBox from '@react-native-community/checkbox'
import { fetchCartItems } from '../store/cartSlice'
import AntDesign from 'react-native-vector-icons/AntDesign'




const FoodSizeMenu = ({ item, isCustomizable, setIsCustomizable }) => {

    // console.log(item);



    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [customizations, setCustomizations] = useState(null)
    const { token } = useSelector(state => state.auth)
    const [selectedItems, setSelectedItems] = useState({});
    const [itemQuantity, setItemQuantity] = useState(1)
    const [inputCustomizations, setInputCustomizations] = useState([])
    const [loading, setLoading] = useState(false)
    const [additionalPrice, setAdditionalPrice] = useState(0.00);


    const handleSelection = (key, optionId, titleId, optionAdditionalPrice) => {
        const parsedAdditionalPrice = parseFloat(optionAdditionalPrice || 0);

        setSelectedItems((prev) => ({
            ...prev,
            [key]: optionId,
        }));


        setInputCustomizations((prev) => {
            // Remove existing customization for this titleId
            const updatedCustomizations = prev.filter((item) => item.title_id !== titleId);

            // Add the new customization
            return [
                ...updatedCustomizations,
                {
                    title_id: titleId,
                    option_ids: [optionId],
                },
            ];
        });

        // Update the additional price
        setAdditionalPrice((prev) => {
            const currentOptionId = selectedItems[key];
            const currentAdditionalPrice = currentOptionId
                ? parseFloat(
                    customizations[key]?.options.find(
                        (option) => option.option_id === currentOptionId
                    )?.additional_price || 0
                )
                : 0;
            const newPrice = prev - currentAdditionalPrice + parsedAdditionalPrice;

            return parseFloat(newPrice.toFixed(2));
        });
    };





    const toggleSelection = (key, titleId, optionId, optionAdditionalPrice) => {
        const parsedAdditionalPrice = parseFloat(optionAdditionalPrice || 0);

        setSelectedItems((prev) => {
            const updatedSelections = prev[key] || [];
            const isAlreadySelected = updatedSelections.includes(optionId);


            return {
                ...prev,
                [key]: isAlreadySelected
                    ? updatedSelections.filter((id) => id !== optionId)
                    : [...updatedSelections, optionId],
            };
        });
        setAdditionalPrice((prev) => {
            const isAlreadySelected = selectedItems[key]?.includes(optionId);
            const newPrice = isAlreadySelected
                ? prev - parsedAdditionalPrice
                : prev + parsedAdditionalPrice;

            return parseFloat(newPrice.toFixed(2));
        });
        setInputCustomizations((prev) => {
            const updatedCustomizations = [...prev];
            const existingIndex = updatedCustomizations.findIndex(
                (item) => item.title_id === titleId && item.option_ids.includes(optionId)
            );

            if (existingIndex >= 0) {
                updatedCustomizations.splice(existingIndex, 1);
            } else {
                updatedCustomizations.push({ title_id: titleId, option_ids: [optionId] });
            }

            return updatedCustomizations;
        });
    };

    const handleIncrease = () => {
        setItemQuantity(prev => prev + 1)
    }
    const handleDecrease = () => {
        setItemQuantity(prev => prev === 1 ? 1 : prev - 1)
    }

    useEffect(() => {
        const getCustomization = async () => {
            try {
                const res = await axios.get(`${BASE_URI}/api/items/customisation/getCustomisation/${item?.id === undefined ? item?.item_id : item?.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (res.data) {
                    setCustomizations(res?.data?.customizations);
                }
            } catch (error) {
                console.log("get customization error: ", error?.response?.data?.message);
                ToastAndroid.showWithGravity(error?.response?.data?.message, ToastAndroid.SHORT, ToastAndroid.TOP)
                setIsCustomizable(false)

            }
        }
        if (isCustomizable) {
            getCustomization()
        }
    }, [isCustomizable])

    // console.log(item);



    useEffect(() => {
        if (Object.entries(customizations || {})?.length > 0) {
            Object.entries(customizations)?.map(([key, item]) => {

                setSelectedItems((prev) => ({
                    ...prev,
                    [key]: item?.options[0]?.option_id,
                }));
                setInputCustomizations((prev) => {

                    const updatedCustomizations = prev.filter((item) => item.title_id !== item?.title_id);

                    // Add the new customization
                    return [
                        ...updatedCustomizations,
                        {
                            title_id: item?.title_id,
                            option_ids: [item?.options[0]?.option_id],
                        },
                    ];
                });

                // console.log(item);

                const currentAdditionalPrice = parseFloat(item?.options[0]?.additional_price);
                setAdditionalPrice(currentAdditionalPrice);
            })
        }
    }, [customizations])





    const handleSetCustomization = async () => {
        setLoading(true)
        console.log(inputCustomizations);

        try {
            const res = await axios.post(`${BASE_URI}/api/items/customisation/setUserCustomisation/${item?.id}`, {
                quantity: itemQuantity,
                customizations: inputCustomizations
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                navigation.navigate("Cart", { screen: "CartScreen" })
                dispatch(fetchCartItems({ token }))
                setItemQuantity(1)
            }
        } catch (error) {
            setLoading(false)
            setIsCustomizable(false)
            console.error(error?.response?.data?.message);
            ToastAndroid.showWithGravity(error?.response?.data?.message, ToastAndroid.LONG, ToastAndroid.TOP)
            // Alert.alert(error?.message)
        }
        finally {
            setLoading(false)
        }
    }






    return (
        <Modal
            isVisible={isCustomizable}
            onBackdropPress={() => setIsCustomizable(prev => !prev)}
            // swipeDirection="down"
            // onSwipeComplete={toggleSecondDrawer}
            style={styles.modal2}
            backdropColor='#000'
            backdropOpacity={0.80}
        // animationIn={"slideInUp"}
        // animationOut={"slideOutDown"}
        >
            <View style={styles.drawer2}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Header item={item} setIsCustomizable={setIsCustomizable} />
                    <View style={{ borderStyle: "dashed", borderColor: "#fff", borderWidth: 0.50, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0, paddingTop: hp(2) }}></View>
                    {
                        Object.entries(customizations || {})?.map(([key, customization]) => {
                            return (
                                <View key={key}>
                                    <View style={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "flex-start", paddingTop: hp(2) }}>
                                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16, fontWeight: "600", lineHeight: 23, letterSpacing: 0.05 }}>{key}</Text>
                                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16, fontWeight: "300", lineHeight: 23, letterSpacing: 0.05 }}>{customization?.selection_type === "one" ? "Select any One" : "Select more than one"}</Text>
                                    </View>
                                    <View style={styles.extraContainer}>
                                        {
                                            customization?.options?.map((data, id) => {
                                                // console.log("data: ", data);
                                                return (
                                                    <View key={id} style={styles.sizeItem}>
                                                        {
                                                            customization?.selection_type === "one" ? (
                                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                                                    <View style={styles.sizeItemLeftWrapper}>
                                                                        <Image
                                                                            style={{ resizeMode: "cover", height: 13, width: 13 }}
                                                                            source={require("../assets/images/arrow_up.png")}
                                                                        />
                                                                        <Text style={{
                                                                            color: "#fff",
                                                                            fontFamily: "OpenSans-Regular",
                                                                            fontSize: 16,
                                                                            lineHeight: 23,

                                                                        }}>{data?.option_name}</Text>
                                                                    </View>
                                                                    <View>
                                                                        <RadioButton
                                                                            size={10}
                                                                            animation={"bounceIn"}
                                                                            isSelected={selectedItems[key] === data?.option_id} // Check if this option is selected
                                                                            onPress={() => handleSelection(key, data?.option_id, customization?.title_id, data?.additional_price)} // Update the selection
                                                                            innerColor={selectedItems[key] === data?.option_id ? "#FA4A0C" : "#000"}
                                                                            outerColor={selectedItems[key] === data?.option_id ? "#FA4A0C" : "#fff"}
                                                                        />

                                                                    </View>
                                                                </View>

                                                            ) :
                                                                (

                                                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                                                        <View style={styles.sizeItemLeftWrapper}>
                                                                            <Image
                                                                                style={{ resizeMode: "contain", height: 10, width: 10 }}
                                                                                source={require("../assets/images/arrow_up.png")}
                                                                            />
                                                                            <Text style={{
                                                                                color: "#fff",
                                                                                fontFamily: "OpenSans-Regular",
                                                                                fontSize: 16,
                                                                                lineHeight: 23,

                                                                            }}>{data?.option_name}</Text>
                                                                        </View>
                                                                        <View>
                                                                            <CheckBox
                                                                                value={selectedItems[key]?.includes(data?.option_id)}
                                                                                onValueChange={() => toggleSelection(key, customization?.title_id, data?.option_id, data?.additional_price)}
                                                                                tintColors={{ true: "#FA4A0C", false: "#fff" }}
                                                                            />
                                                                        </View>
                                                                    </View>

                                                                )
                                                        }
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                </View>
                            )
                        })
                    }

                    <View style={styles.actionWrapper}>
                        <View style={styles.qtyWrapper}>
                            <TouchableOpacity onPress={handleIncrease} style={{ borderRadius: wp(3), alignItems: "center" }}>
                                <AntDesign name='plus' color={"#FA4A0C"} size={14} />
                            </TouchableOpacity>
                            <View >
                                <Text style={{ color: "#FA4A0C", fontSize: 14, fontWeight: "500", fontFamily: "OpenSans-Bold", letterSpacing: 0.05, }}>{itemQuantity}</Text>
                            </View>
                            <TouchableOpacity onPress={handleDecrease} style={{ borderRadius: wp(3), alignItems: "center" }}>
                                <AntDesign name='minus' color={"#FA4A0C"} size={14} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={handleSetCustomization} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: 8, alignItems: "center", }}>
                                {
                                    loading ? <Text style={{ color: "#FA4A0C", fontSize: 14, fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Adding...</Text> : <Text style={{ color: "#FA4A0C", fontSize: 14, fontWeight: "500", fontFamily: "OpenSans-Medium" }}>{`Add | Rs: ${(Number(additionalPrice)) * itemQuantity} `}</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default FoodSizeMenu

const styles = StyleSheet.create({
    modal2: {
        flex: 1,
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal
    }
    ,
    drawer2: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        padding: wp(4)
    },
    modal2HeadingWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    sizeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // height: height * 0.25,
        width: "100%",
        marginHorizontal: "auto",
        borderColor: "#D6D6D680",
        borderWidth: 1,
        borderRadius: wp(5),
        marginTop: hp(4),
        padding: wp(4)
    },
    sizeItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: wp(4),
        marginBottom: hp(2)

    },
    sizeItemLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(2)
    },
    extraContainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginHorizontal: "auto",
        borderColor: "#D6D6D680",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: hp(4),
        paddingHorizontal: wp(5),
        paddingTop: hp(2)
    },
    actionWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderTopColor: "#D6D6D6",
        // borderTopWidth: 1,
        marginTop: 20
    },
    qtyWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        gap: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8
    }
})

const Header = ({ setIsCustomizable, item }) => {


    return (
        <View style={styles.modal2HeadingWrapper}>
            <View>
                <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontWeight: "300", lineHeight: 23, letterSpacing: 0.05, fontSize: 16 }}>{item?.name}</Text>
            </View>
            <TouchableOpacity onPress={() => setIsCustomizable(prev => !prev)}>
                <Entypo name='circle-with-cross' size={20} color={"#fff"} />
            </TouchableOpacity>
        </View>
    )
}



