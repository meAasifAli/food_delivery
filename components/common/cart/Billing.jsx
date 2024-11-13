import { StyleSheet, Text, View } from 'react-native'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Billing = () => {
    return (
        <View style={{ marginTop: hp(3), marginBottom: hp(4) }}>
            <View style={{ marginLeft: "2%" }}>
                <Typography title={"Billing Details"} ff={"OpenSans-Regular"} lh={32} size={24} fw={400} color={"#000"} />
            </View>
            <View style={styles.billingWraper}>
                <View style={styles.billItem}>
                    <Typography title={"Item Total"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={"RS 499.59"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"Delivery Fee"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={"RS 49.00"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"Delivery Tip"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={"Add Tip"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#FA4A0C"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"GST & Restaurant Charges"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={"RS 24.99"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={{ borderStyle: "dashed", borderColor: "#000", borderWidth: 0.50, flex: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0 }}></View>
                <View style={[styles.billItem, { marginTop: hp(2) }]}>
                    <Typography title={"To Pay"} ff={"OpenSans-Bold"} lh={21} size={16} fw={600} color={"#000"} />
                    <Typography title={"RS 572.99"} ff={"OpenSans-Bold"} lh={21} size={16} fw={600} color={"#000"} />
                </View>
            </View>
        </View>
    )
}

export default Billing

const styles = StyleSheet.create({
    billingWraper: { width: "95%", height: hp(33), marginHorizontal: "auto", borderColor: "#D6D6D6", marginTop: hp(4), borderWidth: 1, padding: wp(6), borderRadius: wp(2), paddingHorizontal: wp(2), paddingVertical: hp(4) },
    billItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: hp(2) }
})

