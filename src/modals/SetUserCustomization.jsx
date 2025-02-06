import axios from 'axios'
import { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { BASE_URI } from '../config/uri'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems } from '../store/cartSlice'

const SetUserCustomization = ({ isOpen, setIsOpen, title, price, cartItemId, quantity, setIsCustomization }) => {


    const dispatch = useDispatch()

    const { token } = useSelector((state) => state.auth)
    const [customizations, setCustomizations] = useState([{
        title_id: null,
        option_ids: []
    }])

    useEffect(() => {
        const fetchSelectedCustomizations = async () => {
            try {
                const response = await axios.get(`${BASE_URI}/api/items/customisation/getSelectedCustomisation/${cartItemId}}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (response?.data) {
                    const newCustomizations = Object.entries(response?.data?.data).map(([key, customization]) => ({
                        title_id: customization?.title_id,
                        option_ids: customization?.options?.map(option => option?.option_id),
                    }));

                    setCustomizations(prev => {
                        const allCustomizations = [...prev, ...newCustomizations];
                        const filteredCustomizations = allCustomizations.filter((custom, index, self) =>
                            index === self.findIndex(
                                c => c.title_id === custom.title_id && JSON.stringify(c.option_ids) === JSON.stringify(custom.option_ids)
                            )
                        );

                        return filteredCustomizations;
                    });
                }

            } catch (error) {
                console.error(error?.response?.data?.message)
            }

        }

        if (isOpen) {
            fetchSelectedCustomizations()
        }

    }, [isOpen])





    const handleRepeatlast = async (cartItemId) => {
        try {
            const res = await axios.patch(`${BASE_URI}/api/items/customisation/updateSelectedCustomisation/${cartItemId}`, {
                quantity: quantity + 1,
                customizations: customizations.slice(1),
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res?.data) {
                Alert.alert("Success", "Customization updated successfully");
                setIsOpen(prev => !prev);
                dispatch(fetchCartItems({ token }));
            }
        } catch (error) {
            console.error(error?.message);
        }
    };

    const handleSetIsCustomization = () => {
        setIsCustomization()
        setIsOpen(prev => !prev)
        dispatch(fetchCartItems({ token }))
    }

    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(prev => !prev)}
            style={styles.modal2}
            backdropColor='transparent'
            backdropOpacity={0.50}
            animationIn={"slideInUp"}
            animationInTiming={1000}
            animationOut={"slideOutDown"}
            animationOutTiming={1000}
        >
            <View style={styles.drawer2}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: "OpenSans-Bold" }}>{title}</Text>
                        <Text style={{ color: '#fff', fontSize: 12, fontFamily: "OpenSans-Regular" }}>{price}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setIsOpen(prev => !prev)}>
                        <AntDesign name='closecircle' size={20} color={"#fff"} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "100%", backgroundColor: "#ccc", height: 0.5, marginTop: 10, marginBottom: 20 }} />

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                    <TouchableOpacity onPress={handleSetIsCustomization} style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, flex: 1 }}>
                        <Text style={{ color: "#000", fontSize: 14, fontFamily: "OpenSans-Regular", textAlign: "center" }}>i&apos;ll choose</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRepeatlast(cartItemId)} style={{ backgroundColor: "#FA4A0C", padding: 10, borderRadius: 10, flex: 1 }}>
                        <Text style={{ color: "#fff", fontSize: 14, fontFamily: "OpenSans-Regular", textAlign: "center" }}>Repeat last</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default SetUserCustomization

const styles = StyleSheet.create({
    modal2: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 0,
    }
    ,
    drawer2: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        padding: 20
    },
})