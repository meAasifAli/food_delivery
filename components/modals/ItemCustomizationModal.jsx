
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Typography from '../Typography'
import RadioButton from 'react-native-radio-button'
import { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import axios from 'axios'
import { BASE_URI } from '../../config/uri'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomizations } from '../../store/customizationSlice'

const ItemCustomizationModal = ({ isOpen, setIsOpen, item }) => {
    const dispatch = useDispatch()
    // const [size, setSize] = useState("small")
    const [selectedItems, setSelectedItems] = useState({});
    const { customizations } = useSelector((state) => state?.customization)
    const { token } = useSelector((state) => state?.auth)
    const [inputCustomizations, setInputCustomizations] = useState([
        {
            title_id: null,
            option_ids: []
        }
    ])


    useEffect(() => {
        if (isOpen) {
            dispatch(getCustomizations({ token, itemId: item?.item_id }))
            dispatch(getCustomizations({ token, cartItemId: item?.cart_item_id }))
        }
    }, [isOpen])

    // console.log(customizations);

    // console.log("Selected Customizations: ", item?.customizations);


    useEffect(() => {
        if (!customizations || Object.keys(customizations).length === 0) {
            return;
        }

        const initialSelections = {};
        const initialCustomizations = [];

        Object.entries(customizations).forEach(([key, customization]) => {
            const { options, selection_type, title_id } = customization;

            // console.log("options: ", options);


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

        console.log("initialSelections: ", initialSelections);

        setSelectedItems(initialSelections);
        setInputCustomizations(initialCustomizations);
    }, []);






    const handleSelection = (key, optionId, titleId) => {
        setSelectedItems((prev) => ({
            ...prev,
            [key]: optionId, // Update the selected option for the given customization key
        }));

        setInputCustomizations((prev) => {
            const updatedCustomizations = prev.filter((item) => item.title_id !== titleId);

            return [
                ...updatedCustomizations,
                {
                    title_id: titleId,
                    option_ids: [optionId], // RadioButton only allows one selection
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
                    ? currentSelections.filter((id) => id !== optionId) // Remove if already selected
                    : [...currentSelections, optionId], // Add if not selected
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





    const handleUpdateCustomization = async (cartItemId, quantity) => {
        const customizations = inputCustomizations.slice(1)
        // console.log(customizations);

        try {
            const res = await axios.patch(`${BASE_URI}/api/items/customisation/updateSelectedCustomisation/${cartItemId}`, {
                quantity: quantity,
                customizations: customizations
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setInputCustomizations([{
                title_id: null,
                option_ids: []
            }])
            if (res?.data) {
                Alert.alert("Success", "Customization updated successfully")
                setIsOpen(false)
            }
        } catch (error) {
            console.log(error?.response);
            Alert.alert("Error in updating customization: ", error?.response?.data?.message)
        }
    }



    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={setIsOpen}
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
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>{item?.item_name}</Text>
                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>&middot;</Text>
                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>{item?.item_price}</Text>
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
                                // console.log("customization : ", customization.title_id);

                                return (
                                    <View key={key}>
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium", fontSize: 16 }}>{key}</Text>
                                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16, lineHeight: 24 }}>{`Select any ${customization?.selection_type}`}</Text>
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
                                                                                style={{ resizeMode: "contain", height: 10, width: 10 }}
                                                                                source={require("../../assets/images/arrowUpBox.png")}
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
                                                                                    source={require("../../assets/images/arrowUpBox.png")}
                                                                                />
                                                                                <Typography
                                                                                    title={data?.option_name}
                                                                                    color={"#fff"}
                                                                                    ff={"OpenSans-Regular"}
                                                                                    fw={300}
                                                                                    lh={23}
                                                                                    ls={0.05}
                                                                                    size={16}
                                                                                />
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


                        <TouchableOpacity onPress={() => handleUpdateCustomization(item?.cart_item_id, item?.quantity)} style={{ marginTop: 20, backgroundColor: "#FA4A0C", height: 50, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Bold", fontSize: 16 }}>update item</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        </Modal>
    )
}

export default ItemCustomizationModal

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal
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
        borderRadius: wp(3),
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
        marginTop: hp(5)
    },
    qtyWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: wp(3),
    }
})



