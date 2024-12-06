import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SetUserCustomization = ({ isOpen, setIsOpen, title, price, setIscustomization }) => {
    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(prev => !prev)}
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
                    <TouchableOpacity onPress={setIscustomization} style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, flex: 1 }}>
                        <Text style={{ color: "#000", fontSize: 14, fontFamily: "OpenSans-Regular", textAlign: "center" }}>i&apos;ll choose</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#FA4A0C", padding: 10, borderRadius: 10, flex: 1 }}>
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
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal
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