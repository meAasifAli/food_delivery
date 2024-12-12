import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'
import Typography from '../Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import RadioButton from 'react-native-radio-button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../../config/uri'
import CheckBox from '@react-native-community/checkbox'
import { fetchCartItems } from '../../store/cartSlice'




const FoodSizeMenu = ({ item, isCustomizable, setIsCustomizable }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [customizations, setCustomizations] = useState(null)
    const { token } = useSelector(state => state.auth)
    const [selectedItems, setSelectedItems] = useState({});
    const [itemQuantity, setItemQuantity] = useState(1)
    const [inputCustomizations, setInputCustomizations] = useState([
        {
            title_id: null,
            option_ids: []
        }
    ])
    const [loading, setLoading] = useState(false)
    const [additionalPrice, setAdditionalPrice] = useState(0.00);


    // console.log('inputCustomizations: ', inputCustomizations);


    const handleSelection = (key, optionId, titleId, optionAdditionalPrice) => {
        // Parse the additional price to ensure it's a valid number
        const parsedAdditionalPrice = parseFloat(optionAdditionalPrice || 0);

        // Update selected items for the key
        setSelectedItems((prev) => ({
            ...prev,
            [key]: optionId,
        }));

        // Update customizations to reflect the selected option
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
            // Identify the currently selected option's additional price
            const currentOptionId = selectedItems[key];
            const currentAdditionalPrice = currentOptionId
                ? parseFloat(
                    customizations[key]?.options.find(
                        (option) => option.option_id === currentOptionId
                    )?.additional_price || 0
                )
                : 0;

            // Calculate the new total additional price
            const newPrice = prev - currentAdditionalPrice + parsedAdditionalPrice;

            // Return the price rounded to two decimals
            return parseFloat(newPrice.toFixed(2));
        });
    };




    const toggleSelection = (key, titleId, optionId, optionAdditionalPrice) => {
        const parsedAdditionalPrice = parseFloat(optionAdditionalPrice || 0);

        setSelectedItems((prev) => {
            // Toggle the checkbox selection
            const updatedSelections = prev[key] || [];
            const isAlreadySelected = updatedSelections.includes(optionId);


            return {
                ...prev,
                [key]: isAlreadySelected
                    ? updatedSelections.filter((id) => id !== optionId) // Remove the option if already selected
                    : [...updatedSelections, optionId], // Add the option if not selected
            };
        });

        // Update the additional price
        setAdditionalPrice((prev) => {
            const isAlreadySelected = selectedItems[key]?.includes(optionId);

            // Add or subtract the price based on the selection state
            const newPrice = isAlreadySelected
                ? prev - parsedAdditionalPrice // Subtract the price if unselected
                : prev + parsedAdditionalPrice; // Add the price if selected

            // Return the price rounded to two decimals
            return parseFloat(newPrice.toFixed(2));
        });

        // Update customizations (optional, if needed for your use case)
        setInputCustomizations((prev) => {
            // Ensure customization state reflects the toggle action
            const updatedCustomizations = [...prev];
            const existingIndex = updatedCustomizations.findIndex(
                (item) => item.title_id === titleId && item.option_ids.includes(optionId)
            );

            if (existingIndex >= 0) {
                // Remove the customization if the checkbox is being unchecked
                updatedCustomizations.splice(existingIndex, 1);
            } else {
                // Add the customization if the checkbox is being checked
                updatedCustomizations.push({ title_id: titleId, option_ids: [optionId] });
            }

            return updatedCustomizations;
        });
    };




    // console.log(item);

    const handleIncrease = () => {
        setItemQuantity(prev => prev + 1)
    }
    const handleDecrease = () => {
        setItemQuantity(prev => prev === 1 ? 1 : prev - 1)
    }

    useEffect(() => {
        const getCustomization = async () => {
            try {
                const res = await axios.get(`${BASE_URI}/api/items/customisation/getCustomisation/${item?.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setCustomizations(res?.data?.customizations);


            } catch (error) {
                console.log("get customization error: ", error?.response?.data?.message);
                Alert.alert(error?.response?.data?.message)

            }
        }
        if (isCustomizable) {
            getCustomization()
        }
    }, [isCustomizable])




    const handleSetCustomization = async () => {
        setLoading(true)
        try {
            const res = await axios.post(`${BASE_URI}/api/items/customisation/setUserCustomisation/${item?.id}`, {
                quantity: itemQuantity,
                customizations: inputCustomizations.slice(1)
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                // setIsCustomizable(prev => !prev)
                Alert.alert("Customization added successfully")
                navigation.navigate("CartScreen")
                dispatch(fetchCartItems({ token }))
            }
        } catch (error) {
            setLoading(false)
            console.error(error?.response?.data?.message);
            Alert.alert(error?.message)

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
            backdropColor='transparent'
            backdropOpacity={0.50}
            animationIn={"slideInUp"}
            animationInTiming={1000}
            animationOut={"slideOutDown"}
            animationOutTiming={1000}
        >
            <View style={styles.drawer2}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Header item={item} setIsCustomizable={setIsCustomizable} />
                    <View style={{ borderStyle: "dashed", borderColor: "#fff", borderWidth: 0.50, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0, paddingTop: hp(2) }}></View>
                    {
                        Object.entries(customizations || {})?.map(([key, customization]) => {
                            // console.log(key);
                            // console.log(customization);
                            return (
                                <View key={key}>
                                    <View style={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "flex-start", paddingTop: hp(2) }}>
                                        <Typography title={key} color={"#fff"} ff={"OpenSans-Regular"} fw={600} lh={23} ls={0.05} size={16} />
                                        <Typography title={customization?.selection_type === "one" ? "Select any One" : "Select more than one"} color={"#fff"} ff={"OpenSans-Regular"} fw={300} lh={23} ls={0.05} size={16} />
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
                            <TouchableOpacity onPress={handleIncrease} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(10), alignItems: "center" }}>
                                <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>+</Text>
                            </TouchableOpacity>
                            <View >
                                <Typography title={itemQuantity} color={'#FA4A0C'} ff={'OpenSans_regular'} fw={800} lh={60} ls={0.05} size={30} />
                            </View>
                            <TouchableOpacity onPress={handleDecrease} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(10), alignItems: "center" }}>
                                <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>-</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={handleSetCustomization} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), alignItems: "center", }}>
                                {
                                    loading ? <ActivityIndicator size={"small"} color={"#fff"} /> : <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>{`Add | Rs: ${Number(item?.price) + Number(additionalPrice)}`}</Text>
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
        height: hp(72),
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
        borderRadius: wp(5),
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

const Header = ({ setIsCustomizable, item }) => {
    return (
        <View style={styles.modal2HeadingWrapper}>
            <View>
                <Typography title={item?.name} color={"#fff"} ff={"OpenSans-Regular"} fw={300} lh={23} ls={0.05} size={16} />
            </View>
            <TouchableOpacity onPress={() => setIsCustomizable(prev => !prev)}>
                <Entypo name='circle-with-cross' size={20} color={"#fff"} />
            </TouchableOpacity>
        </View>
    )
}



