import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { BASE_URI } from '../config/uri'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBill, fetchCartItems } from '../store/cartSlice'
import ChooseCustomization from './ChooseCustomization'
import { LocationContext } from '../context/LocationContext'

const SetUserCustomization = ({ isOpen, setIsOpen, title, price, cartItemId, quantity, item }) => {

    const { tipAmt, offerCode } = useContext(LocationContext)


    const dispatch = useDispatch()
    const [isChooseOpen, setIsChooseOpen] = useState(false)
    const { token } = useSelector((state) => state.auth)
    const [customizations, setCustomizations] = useState([])

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
                customizations: customizations,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res?.data) {
                ToastAndroid.showWithGravity("Customization updated successfully", ToastAndroid.LONG, ToastAndroid.CENTER);
                await dispatch(fetchCartItems({ token }));
                await dispatch(fetchBill({ token, tip: tipAmt, code: offerCode }))
                setIsOpen(prev => !prev);
            }
        } catch (error) {
            console.error(error?.message);
        }
    };

    const handleChoose = () => {
        setIsChooseOpen(true)
    }

    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(false)}
            style={styles.modal2}
            backdropColor='black'
            backdropOpacity={0.80}
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
                    <TouchableOpacity onPress={handleChoose} style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, flex: 1 }}>
                        <Text style={{ color: "#000", fontSize: 14, fontFamily: "OpenSans-Regular", textAlign: "center" }}>i&apos;ll choose</Text>
                    </TouchableOpacity>
                    <ChooseCustomization item={item} isOpen={isChooseOpen} setIsOpen={() => setIsChooseOpen(false)} />
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