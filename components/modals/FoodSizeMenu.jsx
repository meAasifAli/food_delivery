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



const FoodSizeMenu = ({ isSecondDrawerVisible, toggleSecondDrawer, size, setSize, item }) => {
    const [options, setOptions] = useState([])

    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        const getCustomization = async () => {
            try {
                const res = await axios.get(`http://192.168.100.26:3000/api/items/customisation/getCustomisation/${item?.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setOptions(res?.data?.customizations?.Size?.options);

            } catch (error) {
                console.log(error);
                Alert.alert("Something went wrong")

            }
        }
        getCustomization()
    }, [])

    return (
        <Modal
            isVisible={isSecondDrawerVisible}
            onBackdropPress={toggleSecondDrawer}
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
                    <Header item={item} toggleSecondDrawer={toggleSecondDrawer} />
                    <View style={{ borderStyle: "dashed", borderColor: "#fff", borderWidth: 0.50, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0, paddingTop: hp(2) }}></View>
                    <View style={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "flex-start", paddingTop: hp(2) }}>
                        <Typography title={"Size"} color={"#fff"} ff={"OpenSans_regular"} fw={600} lh={23} ls={0.05} size={16} />
                        <Typography title={"Select any 1"} color={"#fff"} ff={"OpenSans-Regular"} fw={300} lh={23} ls={0.05} size={16} />
                    </View>

                    <SizeItems options={options} size={size} setSize={setSize} />
                    <ExtraItems />
                    <Actions options={options} size={size} item={item} />
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
        height: hp(10),
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

const Header = ({ toggleSecondDrawer, item }) => {
    return (
        <View style={styles.modal2HeadingWrapper}>
            <View>
                <Typography title={item?.name} color={"#fff"} ff={"OpenSans-Regular"} fw={300} lh={23} ls={0.05} size={16} />
            </View>
            <TouchableOpacity onPress={() => toggleSecondDrawer()}>
                <Entypo name='circle-with-cross' size={20} color={"#fff"} />
            </TouchableOpacity>
        </View>
    )
}


const SizeItems = ({ size, setSize, options }) => {
    return (
        <View style={styles.sizeContainer}>
            {
                options.map((item, id) => (
                    <SizeItem title={item?.name} price={item?.price} key={id} sizeValue={item?.name} selectedSize={size} onPress={() => setSize(item?.name)} />
                ))
            }
        </View>
    )
}
const SizeItem = ({ title, selectedSize, sizeValue, onPress, price }) => {
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
                    ff={'OpenSans-Regular'}
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

const Actions = ({ options, size, item }) => {
    const { token } = useSelector(state => state?.auth)
    const navigation = useNavigation()
    const [quantity, setQuanitity] = useState(1)
    const [loading, setLoading] = useState(false)
    const handleAddToCart = async () => {
        try {
            setLoading(true)
            const res = await axios.post(`${BASE_URI}/api/cart/addItem/${item.id}`, {
                quantity: quantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res.data) {
                Alert.alert("Item has been Added to the Cart")
                navigation.navigate('Cart', { screen: "CartScreen" })
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Error in adding to the cart")
            setLoading(false)

        }
        finally {
            setLoading(false)
        }
    }

    const handleIncrease = () => {
        setQuanitity(prev => prev + 1)
    }
    const handleDecrease = () => {
        setQuanitity(prev => prev === 1 ? 1 : prev - 1)
    }
    return (
        <View style={styles.actionWrapper}>
            <View style={styles.qtyWrapper}>
                <TouchableOpacity onPress={handleIncrease} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(10), alignItems: "center" }}>
                    <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>+</Text>
                </TouchableOpacity>
                <View >
                    <Typography title={quantity} color={'#FA4A0C'} ff={'OpenSans_regular'} fw={800} lh={60} ls={0.05} size={30} />
                </View>
                <TouchableOpacity onPress={handleDecrease} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: wp(10), alignItems: "center" }}>
                    <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>-</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={handleAddToCart} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), alignItems: "center", }}>
                    {
                        loading ? <ActivityIndicator size={"small"} color={"#fff"} /> : <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>{`Add | Rs: ${options.find((item) => item?.name === size)?.price || 0}`}</Text>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}