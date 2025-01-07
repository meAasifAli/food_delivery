import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SimilarItems = () => {
    return (
        <View horizontal={true} showsHorizontalScrollIndicator={false} style={styles.similarItemsContainer}>
            <View>
                <Typography title={"You may also like!"} ff={"OpenSans_Regular"} lh={21} size={16} color={"#000"} />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.similarItemsWrapper}>
                    <View style={styles.similarItemsLeftWrapper}>
                        <View style={{ paddingHorizontal: hp(0.35), borderColor: "#60B246", borderWidth: wp(0.35) }}>
                            <Octicons name='dot-fill' size={hp(1.5)} color={"#60B246"} />
                        </View>
                        <View>
                            <Typography title={"Mango"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                            <Typography title={"Rs 299"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: 80, width: 90, resizeMode: "contain", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require("../../../assets/images/shake.png")} />
                    </View>
                </View>
                <View style={styles.similarItemsWrapper}>
                    <View style={styles.similarItemsLeftWrapper}>
                        <View style={{ paddingHorizontal: hp(0.35), borderColor: "#60B246", borderWidth: wp(0.35) }}>
                            <Octicons name='dot-fill' size={hp(1.5)} color={"#60B246"} />
                        </View>
                        <View>
                            <Typography title={"Mango"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                            <Typography title={"Rs 299"} ff={"OpenSans_Regular"} lh={16} size={12} color={"#000"} fw={300} />
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: 80, width: 90, resizeMode: "contain", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require("../../../assets/images/shake.png")} />
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

export default SimilarItems

const styles = StyleSheet.create({
    similarItemsContainer: { width: "95%", marginHorizontal: "auto", marginTop: 30, borderColor: "#D6D6D6", borderWidth: 1, borderRadius: 10, padding: wp(2) },
    similarItemsWrapper: { width: wp(60), borderColor: "#D6D6D680", borderWidth: 1, borderRadius: 10, marginTop: 15, marginRight: "1%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" },
    similarItemsLeftWrapper: { display: "flex", flexDirection: "row", gap: wp(3), alignItems: "center", marginLeft: wp(5) },
})
