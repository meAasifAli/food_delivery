import axios from 'axios'
import { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { BASE_URI } from '../../config/uri'
import { useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ItemCustomizationModal = ({ isOpen, setIsOpen, item }) => {

    // console.log("item: ", item);
    // const { cart } = useSelector((state) => state?.cart)
    const { token } = useSelector((state) => state?.auth)
    const [customizedItem, setCustomizedItem] = useState(null)


    console.log("item", item);


    useEffect(() => {
        const fetchCustomizedItem = async () => {
            try {
                const res = await axios.get(`${BASE_URI}/api/items/customisation/getSelectedCustomisation/${item.item_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (res?.data) {
                    setCustomizedItem(res?.data?.data)
                }

            } catch (error) {
                Alert.alert(error?.response?.data?.message)
                console.log(error?.response?.data?.message);
            }
        }

        if (isOpen && item?.item_id) {
            fetchCustomizedItem()
        }

    }, [isOpen, item])

    console.log("customizedItem: ", customizedItem);



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
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>{item?.name}</Text>
                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>&middot;</Text>
                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>{item?.price}</Text>
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
                    <Text style={{ color: "#fff", fontFamily: "OpenSans-Bold", fontSize: 16 }}>Size</Text>
                    <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16, lineHeight: 25 }}>Select Anyone</Text>
                </View>
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
        height: "75%",
        width: "100%",
        padding: 20
    },
})