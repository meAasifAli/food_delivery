import { StyleSheet, Text, View, Image, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import Typography from '../Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import RadioButton from 'react-native-radio-button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const FoodSizeMenu = ({ isSecondDrawerVisible, toggleSecondDrawer, size, setSize, item }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(addToCart({ id: 1, name: "Zinger Burger", price: 200, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }))
        toggleSecondDrawer()
        navigation.navigate("Cart", { screen: "CartScreen" })
    }


    return (
        <Modal
            isVisible={isSecondDrawerVisible}
            onBackdropPress={toggleSecondDrawer}
            swipeDirection="down"
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
                <Header />
                <View style={{ borderStyle: "dashed", borderColor: "#fff", borderWidth: 0.50, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0, paddingTop: hp(2) }}></View>
                <View style={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "flex-start", paddingTop: hp(2) }}>
                    <Typography title={"Size"} color={"#fff"} ff={"OpenSans_regular"} fw={600} lh={23} ls={0.05} size={16} />
                    <Typography title={"Select any 1"} color={"#fff"} ff={"OpenSans-Regular"} fw={300} lh={23} ls={0.05} size={16} />
                </View>

                <SizeItems size={size} setSize={setSize} />
                <ExtraItems />
                <Actions />
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
        width: wp(100),
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
        width: wp(90),
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
        height: hp(10),
        width: wp(90),
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

const Header = () => {
    return (
        <View style={styles.modal2HeadingWrapper}>
            <Typography title={"Chicken Zinger"} color={"#fff"} ff={"OpenSans-Regular"} fw={300} lh={23} ls={0.05} size={16} />
            <Entypo name='circle-with-cross' size={20} color={"#fff"} />
        </View>
    )
}


const SizeItems = ({ size, setSize }) => {
    return (
        <View style={styles.sizeContainer}>
            <SizeItem
                title="Small"
                selectedSize={size}
                sizeValue="small"
                onPress={() => setSize('small')}
            />
            <SizeItem
                title="Medium"
                selectedSize={size}
                sizeValue="medium"
                onPress={() => setSize('medium')}
            />
            <SizeItem
                title="Large"
                selectedSize={size}
                sizeValue="large"
                onPress={() => setSize('large')}
            />
        </View>
    )
}
const SizeItem = ({ title, selectedSize, sizeValue, onPress }) => {
    return (
        <View style={styles.sizeItem}>
            <View style={styles.sizeItemLeftWrapper}>
                <Image
                    style={{ resizeMode: 'contain', height: 10, width: 10 }}
                    source={require('../../assets/images/arrowUpBox.png')}
                />
                <Typography
                    title={title}
                    color={'#fff'}
                    ff={'OpenSans_regular'}
                    fw={300}
                    lh={23}
                    ls={0.05}
                    size={16}
                />
            </View>
            <View>
                <RadioButton
                    size={10}
                    animation={'bounceIn'}
                    isSelected={selectedSize === sizeValue}
                    onPress={onPress}
                    innerColor={selectedSize === sizeValue ? '#FA4A0C' : '#000'}
                    outerColor={selectedSize === sizeValue ? '#FA4A0C' : '#fff'}
                />
            </View>
        </View>
    );
};

const ExtraItems = () => {
    return (
        <View style={styles.extraContainer}>
            <View style={styles.sizeItem}>
                <View style={styles.sizeItemLeftWrapper}>
                    <Image
                        style={{ resizeMode: 'contain', height: 10, width: 10 }}
                        source={require('../../assets/images/arrowUpBox.png')}
                    />
                    <Typography
                        title={"Extra Cheese"}
                        color={'#fff'}
                        ff={'OpenSans_regular'}
                        fw={300}
                        lh={23}
                        ls={0.05}
                        size={16}
                    />
                </View>
                <View>
                    <RadioButton
                        size={10}
                        animation={'bounceIn'}
                        isSelected={true}
                        onPress={() => { }}
                        innerColor={'#FA4A0C'}
                        outerColor={'#FA4A0C'}
                    />
                </View>
            </View>
        </View>
    )
}

const Actions = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.actionWrapper}>
            <View style={styles.qtyWrapper}>
                <TouchableOpacity style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(10), alignItems: "center" }}>
                    <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>+</Text>
                </TouchableOpacity>
                <View >
                    <Typography title={"1"} color={'#FA4A0C'} ff={'OpenSans_regular'} fw={800} lh={60} ls={0.05} size={30} />
                </View>
                <TouchableOpacity style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(10), alignItems: "center" }}>
                    <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>-</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Cart", { screen: "CartScreen" })} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(20), alignItems: "center", }}>
                    <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}