import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CartItems = () => {
    return (
        <View style={styles.ItemContainer}>
            {/* item1  */}
            <View style={styles.ItemWrapper}>
                <View style={styles.ItemLeftWrapper}>
                    <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                        <AntDesign name='caretup' size={hp(1)} color={"#FA4A0C"} />
                    </View>
                    <Typography title={"Popcorn Chicken Pizza"} ff={"OpenSans_Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                </View>
                <View style={styles.ItemRightWrapper}>
                    <View style={styles.ItemRightLeftWrapper}>
                        <Pressable>
                            <Text style={styles.actionTextPlus}>+</Text>
                        </Pressable>
                        <View>
                            <Typography title={"1"} ff={"OpenSans_Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                        </View>
                        <Pressable>
                            <Text style={styles.actionTextMinus}>-</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Typography title={"Rs 299"} ff={"OpenSans_Regular"} size={12} lh={16} fw={400} color={"#202020"} />
                    </View>
                </View>
            </View>
            {/* item 2 */}
            <View style={styles.ItemWrapper}>
                <View style={styles.ItemLeftWrapper}>
                    <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                        <AntDesign name='caretup' size={hp(1)} color={"#FA4A0C"} />
                    </View>
                    <Typography title={"Popcorn Chicken Pizza"} ff={"OpenSans_Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                </View>
                <View style={styles.ItemRightWrapper}>
                    <View style={styles.ItemRightLeftWrapper}>
                        <Pressable>
                            <Text style={styles.actionTextPlus}>+</Text>
                        </Pressable>
                        <View>
                            <Typography title={"1"} ff={"OpenSans_Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                        </View>
                        <Pressable>
                            <Text style={styles.actionTextMinus}>-</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Typography title={"Rs 299"} ff={"OpenSans_Regular"} size={12} lh={16} fw={400} color={"#202020"} />
                    </View>
                </View>
            </View>
            {/* item 3  */}
            <View style={styles.ItemWrapper}>
                <View style={styles.ItemLeftWrapper}>
                    <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                        <AntDesign name='caretup' size={hp(1)} color={"#FA4A0C"} />
                    </View>
                    <Typography title={"Popcorn Chicken Pizza"} ff={"OpenSans_Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                </View>
                <View style={styles.ItemRightWrapper}>
                    <View style={styles.ItemRightLeftWrapper}>
                        <Pressable>
                            <Text style={styles.actionTextPlus}>+</Text>
                        </Pressable>
                        <View>
                            <Typography title={"1"} ff={"OpenSans_Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                        </View>
                        <Pressable>
                            <Text style={styles.actionTextMinus}>-</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Typography title={"Rs 299"} ff={"OpenSans_Regular"} size={12} lh={16} fw={400} color={"#202020"} />
                    </View>
                </View>

            </View>
            {/* item4 */}
            <View style={styles.ItemWrapper}>
                <View style={styles.ItemLeftWrapper}>
                    <View style={{ padding: wp(0.5), borderColor: "#FA4A0C", borderWidth: wp(0.35) }}>
                        <AntDesign name='caretup' size={hp(1)} color={"#FA4A0C"} />
                    </View>
                    <Typography title={"Popcorn Chicken Pizza"} ff={"OpenSans_Regular"} size={12} lh={16} fw={300} color={"#000000"} />
                </View>
                <View style={styles.ItemRightWrapper}>
                    <View style={styles.ItemRightLeftWrapper}>
                        <Pressable>
                            <Text style={styles.actionTextPlus}>+</Text>
                        </Pressable>
                        <View>
                            <Typography title={"1"} ff={"OpenSans_Regular"} size={15} lh={16} fw={400} color={"#FA4A0C"} />
                        </View>
                        <Pressable>
                            <Text style={styles.actionTextMinus}>-</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Typography title={"Rs 299"} ff={"OpenSans_Regular"} size={12} lh={16} fw={400} color={"#202020"} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItems

const styles = StyleSheet.create({
    ItemContainer: {
        flex: 1,
        height: hp(30),
        width: "95%",
        marginHorizontal: "auto",
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: wp(2),
        marginTop: hp(2),
        display: "flex",
        flexDirection: "column",
        gap: hp(1),

    },
    ItemWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: wp(2)
    },
    ItemLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: wp(3)
    },
    ItemRightWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(3)
    },
    ItemRightLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: wp(1),
        borderColor: "#D6D6D6",
        borderWidth: 1,
        height: hp(4),
        width: wp(20),
        borderRadius: wp(1),
    },
    actionTextPlus: { fontSize: wp(3), lineHeight: hp(2), fontWeight: "400", color: "#FA4A0C", marginLeft: wp(3) },
    actionTextMinus: { fontSize: wp(3), lineHeight: hp(2), fontWeight: "400", color: "#FA4A0C", marginRight: wp(3) },
})