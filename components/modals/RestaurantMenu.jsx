import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
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
            onSwipeComplete={toggleFirstDrawer}
            style={styles.modal}
            backdropColor='transparent'
            backdropOpacity={0.50}

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
                        <Typography title={"4.4"} color={"#fff"} ff={"OpenSans_regular"} size={20} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                        <Entypo name='star-outlined' size={16} color={"#fff"} />
                    </View>
                    <View>
                        <Button onHandlePress={toggleSecondDrawer} title={"Add"} bgColor={"#fff"} color={"#FA4A0C"} widthVal={width * 0.30} heightVal={height * 0.06} size={24} />
                    </View>
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
    modal: {
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal

    },
    drawer: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * 0.60,
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