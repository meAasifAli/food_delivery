
import { Alert, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import AntDesign from 'react-native-vector-icons/AntDesign'

import RadioButton from 'react-native-radio-button'
import { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import axios from 'axios'
import { BASE_URI } from '../config/uri'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomizations, getSelectedCustomizations } from '../store/customizationSlice'
import { fetchBill, fetchCartItems } from '../store/cartSlice'

const ChooseCustomization = ({ isOpen, setIsOpen, item }) => {
    const dispatch = useDispatch()
    const [selectedItems, setSelectedItems] = useState({});
    const { customizations, selectedCustomizations } = useSelector((state) => state?.customization)
    const { token } = useSelector((state) => state?.auth)
    const [inputCustomizations, setInputCustomizations] = useState([])


    useEffect(() => {
        if (isOpen) {
            dispatch(getCustomizations({ token, itemId: item?.item_id }))
            dispatch(getSelectedCustomizations({ token, cartItemId: item?.cart_item_id }))
        }
    }, [isOpen])


    useEffect(() => {
        if (!selectedCustomizations || Object.keys(selectedCustomizations).length === 0) {
            return;
        }

        const initialSelections = {};
        const initialCustomizations = [];

        Object.entries(selectedCustomizations).forEach(([key, customization]) => {


            const { options, selection_type, title_id } = customization;


            if (selection_type === "one") {
                const defaultOption = options.find((option) => option.option_id);
                if (defaultOption) {
                    initialSelections[key] = defaultOption.option_id;

                    initialCustomizations.push({
                        title_id,
                        option_ids: [defaultOption.option_id],
                    });
                }
            } else {
                const selectedOptions = options?.map((item) => item?.option_id)


                if (selectedOptions.length > 0) {
                    initialSelections[key] = selectedOptions;

                    initialCustomizations.push({
                        title_id,
                        option_ids: selectedOptions,
                    });
                }
            }
        });
        setSelectedItems(initialSelections);
        setInputCustomizations(initialCustomizations);

    }, [selectedCustomizations]);


    const handleSelection = (key, optionId, titleId) => {
        setSelectedItems((prev) => ({
            ...prev,
            [key]: optionId,
        }));

        setInputCustomizations((prev) => {
            const updatedCustomizations = prev.filter((item) => item.title_id !== titleId);

            return [
                ...updatedCustomizations,
                {
                    title_id: titleId,
                    option_ids: [optionId],
                },
            ];
        });
    };


    const toggleSelection = (key, optionId, titleId) => {
        setSelectedItems((prev) => {
            const currentSelections = prev[key] || [];
            const isSelected = currentSelections.includes(optionId);

            return {
                ...prev,
                [key]: isSelected
                    ? currentSelections.filter((id) => id !== optionId)
                    : [...currentSelections, optionId],
            };
        });

        setInputCustomizations((prev) => {
            const updatedCustomizations = prev.filter((item) => item.title_id !== titleId);
            const currentCustomization = prev.find((item) => item.title_id === titleId) || { title_id: titleId, option_ids: [] };

            const updatedOptionIds = currentCustomization.option_ids.includes(optionId)
                ? currentCustomization.option_ids.filter((id) => id !== optionId)
                : [...currentCustomization.option_ids, optionId];

            return [
                ...updatedCustomizations,
                {
                    title_id: titleId,
                    option_ids: updatedOptionIds,
                },
            ];
        });
    };

    const handleUpdateCustomization = async () => {

        try {
            const res = await axios.post(`${BASE_URI}/api/items/customisation/setDifferCustomizations/${item?.item_id}`, {
                quantity: item?.quantity,
                customizations: inputCustomizations
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setInputCustomizations([])
            if (res?.data) {
                ToastAndroid.showWithGravity(`Customization Added successfully`, ToastAndroid.LONG, ToastAndroid.TOP)
                dispatch(fetchCartItems({ token }))
                dispatch(fetchBill({ token, tip: 0, code: "" }))
                setIsOpen(false)
            }
        } catch (error) {
            console.log(error?.response);
            ToastAndroid.showWithGravity(error?.response?.data?.message, ToastAndroid.LONG, ToastAndroid.TOP)
        }
    }

    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={setIsOpen}
            // swipeDirection="down"
            // onSwipeComplete={toggleFirstDrawer}
            style={styles.modal}
            backdropColor='black'
            backdropOpacity={0.80}


        >
            <View style={styles.drawer}>
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>{item?.item_name}</Text>
                        </View>
                        <TouchableOpacity onPress={setIsOpen}>
                            <AntDesign name='closecircle' color={"#fff"} size={20} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Bold", fontSize: 20, lineHeight: 40 }}>Customize as per your Taste</Text>
                    </View>
                    <View style={{ backgroundColor: "#ccc", height: 1, width: "100%", marginTop: 10, marginBottom: 20 }}></View>
                    <View>
                        {
                            customizations && Object.entries(customizations || {})?.map(([key, customization]) => {
                                return (
                                    <View key={key}>
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium", fontSize: 16 }}>{key}</Text>
                                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16, lineHeight: 24 }}>{`Select any ${customization?.selection_type}`}</Text>
                                        </View>
                                        <View style={styles.extraContainer}>
                                            {
                                                customization?.options?.map((data, id) => {



                                                    return (
                                                        <View key={id} style={styles.sizeItem}>
                                                            {
                                                                customization?.selection_type === "one" ? (
                                                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                                                        <View style={styles.sizeItemLeftWrapper}>
                                                                            <Image
                                                                                style={{ resizeMode: "contain", height: 10, width: 10 }}
                                                                                source={require("../assets/images/arrow_up_box.png")}
                                                                            />
                                                                            <Text style={{
                                                                                color: "#fff",
                                                                                fontFamily: "OpenSans-Regular",
                                                                                fontSize: 16,
                                                                                lineHeight: 23,

                                                                            }}>{data?.option_name}</Text>
                                                                        </View>
                                                                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                                                            <Text style={{
                                                                                color: "#fff",
                                                                                fontFamily: "OpenSans-Regular",
                                                                                fontSize: 16,
                                                                                lineHeight: 23,

                                                                            }}>{`RS: ${parseInt(data?.additional_price)}`}</Text>
                                                                            <RadioButton
                                                                                size={10}
                                                                                animation={"bounceIn"}
                                                                                isSelected={selectedItems[key] === data?.option_id} // Check if this option is selected
                                                                                onPress={() => handleSelection(key, data?.option_id, customization?.title_id)} // Update the selection
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
                                                                                    source={require("../assets/images/arrow_up_box.png")}
                                                                                />
                                                                                <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontWeight: 300, lineHeight: 21, fontSize: 16 }}>{data?.option_name}</Text>

                                                                            </View>
                                                                            <View>
                                                                                <CheckBox
                                                                                    value={selectedItems[key]?.includes(data?.option_id)}
                                                                                    onValueChange={() => toggleSelection(key, data?.option_id, customization?.title_id)}
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


                        <TouchableOpacity onPress={() => handleUpdateCustomization()} style={{ marginTop: 20, backgroundColor: "#FA4A0C", height: 50, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Bold", fontSize: 16 }}>update item</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        </Modal>
    )
}

export default ChooseCustomization

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    drawer: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        padding: 20,
        maxHeight: "75%"
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
        borderRadius: 15,
        marginTop: 10,
        padding: 20
    },
    sizeItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        marginBottom: 10

    },
    sizeItemLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    extraContainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginHorizontal: "auto",
        borderColor: "#D6D6D680",
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    actionWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    qtyWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
    }
})



