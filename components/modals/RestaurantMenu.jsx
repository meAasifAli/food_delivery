import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Typography from '../Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const RestaurantMenu = ({ isDrawerVisible, toggleFirstDrawer, toggleSecondDrawer, item }) => {
    const navigation = useNavigation()
    // console.log(item);

    const handlePress = () => {
        console.log("Customization value:", item?.customisation);
        item?.customisation === 0 ? navigation.navigate("Cart", { screen: "CartScreen" }) : toggleSecondDrawer()
    };

    return (
        <Modal
            isVisible={isDrawerVisible}
            onBackdropPress={toggleFirstDrawer}
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
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <Image style={{
                        width: "100%", borderTopLeftRadius: 20,
                        borderTopRightRadius: 20, height: hp(30), resizeMode: "cover"
                    }} source={require("../../assets/images/modalImg.png")} />
                    <View style={styles.headingModal}>
                        <Typography title={item?.name} ff={"OpenSans-Medium"} size={24} color={"#fff"} ls={0.05} lh={29} fw={600} maxW={188} />
                    </View>
                    <View style={styles.ratingModalWrapper}>
                        <View style={styles.ratingModalLeftWrapper}>
                            <Typography title={"4.4"} color={"#fff"} ff={"OpenSans-Regular"} size={13} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                            <Entypo name='star-outlined' size={12} color={"#fff"} />
                        </View>
                        <TouchableOpacity style={styles.btnWrapper} onPress={() => handlePress()}>
                            <Text style={styles.btnText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalBottomWrapper}>
                        <Typography title={item?.description} color={"#fff"} ff={"OpenSans-Regular"} size={18} lh={24.32} ls={0.07} fw={300} />
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default RestaurantMenu

const styles = StyleSheet.create({
    btnWrapper: { height: hp(6), backgroundColor: "#fff", width: wp(25), borderRadius: 10, alignItems: "center", justifyContent: "center" },
    btnText: { fontFamily: "OpenSans-Medium", fontSize: 24, color: "#FA4A0C", letterSpacing: 0.05, lineHeight: 32.68 },
    modal: {
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal
    },
    drawer: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "65%",
        width: "100%"
    },
    headingModal: {
        padding: wp(5)
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
        paddingHorizontal: wp(3),
        paddingVertical: hp(0.5),
        borderRadius: 5
    },

    modalBottomWrapper: {
        paddingHorizontal: 20,
        marginTop: 20
    },
})