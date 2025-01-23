import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import Typography from '../../Typography'
import RestaurantMenu from '../../modals/RestaurantMenu'
import FoodSizeMenu from '../../modals/FoodSizeMenu'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react'

const MenuItem = ({ item, size, setSize, }) => {
    const [isCustomizable, setIsCustomizable] = useState(false)
    const [isNonCustomizable, setIsNonCustomizable] = useState(false)
    const navigation = useNavigation()
    // console.log(item);

    return (
        <View style={{
            orderBottomColor: "#D6D6D6",
            borderBottomWidth: 1,
            width: "90%",
            marginHorizontal: "auto",
        }}>
            <View style={styles.menuContainer}>
                {/* left */}
                <View style={styles.leftWrapper}>
                    <View style={styles.leftHeadingWrapper}>
                        <View>
                            <Text style={{ fontFamily: "OpenSans-Bold", color: "black", fontWeight: "600", fontSize: hp(2) }}>{item?.name}</Text>
                        </View>
                        <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                            <AntDesign name='caretup' size={hp(0.8)} color={"#FA4A0C"} />
                        </View>
                    </View>
                    <View style={styles.ratingWrapper}>
                        <View style={styles.ratingLeftWrapper}>
                            <Typography title={item?.avg_rating} color={"#fff"} ff={"OpenSans_regular"} size={wp(3.5)} lh={hp(3)} ls={wp(0.05)} fw={400} ta={"center"} />
                            <Entypo name='star-outlined' size={12} color={"#fff"} />
                        </View>
                        <View>
                            <Typography title={`(${item?.order_count})`} color={"#20202080"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                        </View>
                    </View>
                    <View>
                        <Typography title={item?.description} color={"#000"} ff={"OpenSans_regular"} size={12} lh={16} ls={0.07} fw={300} maxW={wp(40)} />
                    </View>
                </View>
                {/* right */}
                <View style={styles.rightWrapper}>
                    <Image style={{ width: 150, height: 150, resizeMode: "contain" }} source={require("../../../assets/images/menu_img.png")} />
                    <View style={{ position: "absolute", bottom: 8, right: 15 }}>
                        <TouchableOpacity onPress={() => {
                            item?.customisation === 0 ? setIsNonCustomizable(prev => !prev) : setIsCustomizable(prev => !prev)
                        }} style={{ backgroundColor: "#fff", padding: wp(2), borderRadius: wp(3), width: 120, alignItems: "center" }}>
                            <Text style={{ color: "#FA4A0C", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Add </Text>
                        </TouchableOpacity>
                    </View>
                    {/* Restaurant Menu  modal */}
                    {
                        item?.customisation === 0 && <RestaurantMenu item={item} isNonCustomizable={isNonCustomizable} setIsNonCustomizable={setIsNonCustomizable} />
                    }
                    {
                        item?.customisation === 1 && <FoodSizeMenu item={item} setSize={setSize} size={size} isCustomizable={isCustomizable} setIsCustomizable={setIsCustomizable} />
                    }


                </View>
            </View>
            <View>
                {
                    item.customisation === 1 && <Text style={{ textAlign: "right", fontFamily: "OpenSans-Regular", color: "#000", marginRight: 25, marginBottom: 10 }}>customizable</Text>
                }
            </View>
        </View>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    menuContainer: {
        // height: height * 0.30,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 10
    },
    leftHeadingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        width: wp(30)

    },
    ratingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp(0.5),
        gap: wp(6),
        marginTop: hp(2)
    },
    ratingLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(1),
        padding: wp(1),
        borderRadius: wp(1)
    },
    rightWrapper: {
        position: "relative",
        backgroundColor: "transparent",
        paddingVertical: hp(4)
    },
})