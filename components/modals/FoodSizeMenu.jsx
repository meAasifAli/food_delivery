import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Modal from 'react-native-modal'
import Typography from '../Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import RadioButton from 'react-native-radio-button'
import Button from '../Button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'

const { width, height } = Dimensions.get("window")

const FoodSizeMenu = ({ isSecondDrawerVisible, toggleSecondDrawer, size, setSize, item }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(addToCart({ id: 1, name: "Zinger Burger", price: 200, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }))
        toggleSecondDrawer()
        navigation.navigate("Cart")
    }


    return (
        <Modal
            isVisible={isSecondDrawerVisible}
            onBackdropPress={toggleSecondDrawer}
            swipeDirection="down"
            onSwipeComplete={toggleSecondDrawer}
            style={styles.modal2}
            backdropColor='transparent'
            backdropOpacity={0.50}
        >
            <View style={styles.drawer2}>
                <View style={styles.modal2HeadingWrapper}>
                    <Typography title={"Chicken Zinger"} color={"#fff"} ff={"OpenSans_regular"} fw={300} lh={23} ls={0.05} size={16} />
                    <Entypo name='circle-with-cross' size={20} color={"#fff"} />
                </View>
                <View style={{
                    paddingVertical: 20
                }}>
                    <Typography title={"-------------------------------------------------------------------------------"} color={"#fff"} ff={"OpenSans_regular"} fw={300} lh={23} ls={0.05} size={16} />
                </View>
                <View style={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "flex-start" }}>
                    <Typography title={"Size"} color={"#fff"} ff={"OpenSans_regular"} fw={600} lh={23} ls={0.05} size={16} />
                    <Typography title={"Select any 1"} color={"#fff"} ff={"OpenSans_regular"} fw={300} lh={23} ls={0.05} size={16} />
                </View>

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
                <View style={styles.actionWrapper}>
                    <View style={styles.qtyWrapper}>
                        <Button size={20} title={"+"} color={"#FA4A0C"} bgColor={"#fff"} widthVal={width * 0.10} heightVal={height * 0.06} />
                        <View style={{ marginTop: 10 }}>
                            <Typography title={"1"} color={'#FA4A0C'} ff={'OpenSans_regular'} fw={800} lh={60} ls={0.05} size={30} />
                        </View>
                        <Button size={20} title={"-"} color={"#FA4A0C"} bgColor={"#fff"} widthVal={width * 0.10} heightVal={height * 0.06} />
                    </View>
                    <View>
                        <Button onHandlePress={handleAdd} size={20} title={"Add | Rs. 250"} color={"#FA4A0C"} bgColor={"#fff"} widthVal={width * 0.40} heightVal={height * 0.06} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default FoodSizeMenu

const styles = StyleSheet.create({
    modal2: {
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal
    }
    ,
    drawer2: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * 0.80,
        width: width * 1,
        padding: 20
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
        height: height * 0.25,
        width: width * 0.9,
        borderColor: "#D6D6D680",
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 20
    },
    sizeItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: 20
    },
    sizeItemLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    extraContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: height * 0.15,
        width: width * 0.9,
        borderColor: "#D6D6D680",
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 20
    },
    actionWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopColor: "#D6D6D6",
        borderTopWidth: 1,
        marginTop: 30
    },
    qtyWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,

    }
})

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