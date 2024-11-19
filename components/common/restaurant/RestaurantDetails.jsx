import { StyleSheet, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RestaurantDetails = ({ item }) => {
    return (
        <View style={styles.restaurantWrapper}>
            <Typography title={item?.restaurantName} color={"#fff"} size={32} lh={43} ls={0.07} fw={600} ff={"OpenSans-Regular"} />
            <Typography title={item?.categories?.join(", ")} lines={1} color={"#fff"} size={14} lh={18} ls={0.07} fw={300} ff={"OpenSans-Regular"} />
            <View style={{ borderStyle: "dashed", borderColor: "#fff", borderWidth: 0.50, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0, width: wp(100), marginTop: hp(2) }}></View>
            <View style={styles.ratingWrapper}>
                <View style={styles.ratingLeftWrapper}>
                    <Typography title={item?.rating} color={"#fff"} ff={"OpenSans_regular"} size={13} lh={27.02} ls={0.05} fw={400} ta={"center"} />
                    <Entypo name='star-outlined' size={12} color={"#fff"} />
                </View>
                <View>
                    <Typography title={`${item?.ratingCount} ratings`} color={"#fff"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                </View>
            </View>
            <View style={styles.bottomWrapper}>
                <IonIcons name='timer-outline' size={20} color={"#fff"} />
                {/* Todo : Add dynamic delivery time */}
                <Typography title={`${item?.deliveryTime} - ${item?.street}`} color={"#fff"} size={14} lh={18} ls={0.07} fw={400} ff={"OpenSans-Regular"} />
            </View>
        </View>
    )
}

export default RestaurantDetails

const styles = StyleSheet.create({
    restaurantWrapper: {
        padding: wp(2),
        width: "95%",
        marginHorizontal: "auto",
        backgroundColor: "#202020",
        marginTop: hp(3),
        borderRadius: wp(5),
        display: "flex",
        flexDirection: "column",
        gap: wp(2),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: wp(3)
    },
    ratingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        gap: 30
    },
    ratingLeftWrapper: {
        backgroundColor: "#60B246",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 2,
        borderRadius: 5
    },
    bottomWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
})