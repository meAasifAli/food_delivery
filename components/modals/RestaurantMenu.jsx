import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Typography from '../Typography'
import Button from '../Button'
import Entypo from 'react-native-vector-icons/Entypo'


const { width, height } = Dimensions.get("window")
const RestaurantMenu = ({ isDrawerVisible, toggleFirstDrawer, toggleSecondDrawer, item }) => {
    return (
        <Modal
            isVisible={isDrawerVisible}
            onBackdropPress={toggleFirstDrawer}
            swipeDirection="down"
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
                <Image style={{
                    width: width * 1, borderTopLeftRadius: 20,
                    borderTopRightRadius: 20, height: height * 0.30, resizeMode: "cover"
                }} source={require("../../assets/images/modalImg.png")} />
                <View style={styles.headingModal}>
                    <Typography title={"Chicken Zinger Meal Box"} size={24} color={"#fff"} ls={0.05} lh={29} fw={600} maxW={188} />
                </View>
                <View style={styles.ratingModalWrapper}>
                    <View style={styles.ratingModalLeftWrapper}>
                        <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={13} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                        <Entypo name='star-outlined' size={12} color={"#fff"} />
                    </View>
                    <TouchableOpacity style={styles.btnWrapper} onPress={toggleSecondDrawer}>
                        <Text style={styles.btnText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.modalBottomWrapper}>
                    <Typography title={"1 Zinger Burger + 2 Wings + 1 Fries + 400ml Pepsi"} color={"#fff"} ff={"OpenSans_regular"} size={18} lh={24.32} ls={0.07} fw={300} />
                </View>
            </View>
        </Modal>
    )
}

export default RestaurantMenu

const styles = StyleSheet.create({
    btnWrapper: { height: height * 0.06, backgroundColor: "#fff", width: width * 0.25, borderRadius: 10, alignItems: "center", justifyContent: "center" },
    btnText: { fontFamily: "OpenSans-Medium", fontSize: 24, color: "#FA4A0C", letterSpacing: 0.05, lineHeight: 32.68 },
    modal: {
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal

    },
    drawer: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // height: height * 0.60,
        width: width * 1
    },
    headingModal: {
        padding: 20
    },
    ratingModalWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    ratingModalLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 2,
        borderRadius: 5
    },

    modalBottomWrapper: {
        paddingHorizontal: 20,
        marginTop: 20
    },
})