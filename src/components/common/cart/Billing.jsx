import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useContext, useEffect, useState } from 'react';
import AddTip from '../../../modals/AddTip';
import { List } from 'react-content-loader/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBill } from '../../../store/cartSlice';
import { LocationContext } from '../../../context/LocationContext';


const Billing = () => {
    const dispatch = useDispatch()
    const { tipAmt, setTipAmt, offerCode } = useContext(LocationContext)
    const [isTipOpen, setIsTipOpen] = useState(false)
    const { token } = useSelector((state) => state?.auth)
    const { billData, billLoading, billError } = useSelector((state) => state?.cart)


    useEffect(() => {
        dispatch(fetchBill({ token, tip: tipAmt, code: offerCode }))
    }, [dispatch, tipAmt, offerCode])


    return billLoading ? <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
        <List height={300} color='#f3f3f3' />
    </View> : (
        <View style={{ marginVertical: 15 }}>
            <View style={{ marginLeft: "2%" }}>
                <Typography title={"Billing Details"} ff={"OpenSans-Medium"} lh={32} size={18} fw={400} color={"#000"} />
            </View>
            <View style={styles.billingWraper}>
                <View style={styles.billItem}>
                    <Typography title={"Item Total"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={`RS: ${parseFloat(billData?.item_total).toFixed(2)}`} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"Delivery Fee"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={`RS: ${parseFloat(billData?.delivery_fee).toFixed(2)}`} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"Delivery Tip"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    {
                        billData?.delivery_tip === 0 && <TouchableOpacity onPress={() => setIsTipOpen(pre => !pre)}>
                            <Typography title={"Add Tip"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#FA4A0C"} />
                        </TouchableOpacity>
                    }
                    {
                        billData?.delivery_tip > 0 && <Typography title={`RS: ${parseFloat(billData?.delivery_tip).toFixed(2)}`} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    }
                    <AddTip tipAmt={tipAmt} setTipAmt={setTipAmt} isOpen={isTipOpen} setIsOpen={setIsTipOpen} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"GST & Restaurant Charges"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={`RS: ${parseFloat(billData?.gst_and_restaurant_charges).toFixed(2)}`} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"Platform Fee"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={`RS: ${parseFloat(billData?.platform_fee).toFixed(2)}`} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={styles.billItem}>
                    <Typography title={"Discount"} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                    <Typography title={`RS: ${parseFloat(billData?.item_discount).toFixed(2)}`} ff={"OpenSans-Regular"} lh={21} size={16} fw={400} color={"#000"} />
                </View>
                <View style={{ borderStyle: "dashed", borderColor: "#000", borderWidth: 0.50, flex: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, height: 0 }}></View>
                <View style={[styles.billItem, { marginTop: hp(1) }]}>
                    <Typography title={"To Pay"} ff={"OpenSans-Bold"} lh={21} size={16} fw={600} color={"#000"} />
                    <Typography title={`RS: ${billData?.total_bill?.toFixed(2)}`} ff={"OpenSans-Bold"} lh={21} size={16} fw={600} color={"#000"} />
                </View>
            </View>
        </View>
    )
}

export default Billing

const styles = StyleSheet.create({
    billingWraper: { width: "95%", marginHorizontal: "auto", borderColor: "#D6D6D6", marginTop: hp(2), borderWidth: 1, borderRadius: wp(2), paddingHorizontal: wp(4), paddingVertical: wp(2) },
    billItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: hp(1) }
})

