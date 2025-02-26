import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../../components/Typography';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/profile/Header';
import SecondaryHeader from '../../components/common/profile/SecondaryHeader';
import { useEffect, useState } from 'react';
import SignoutModal from '../../modals/SignoutModal';
import useGetPastOrders from '../../hooks/useGetPastOrders'
import { getUser, } from '../../store/authSlice';
import RateFood from '../../modals/RateFood';
import { List } from 'react-content-loader/native';


const Profile = () => {
    const dispatch = useDispatch()
    const { user, token, loading } = useSelector(state => state?.auth)
    const [isOpen, setIsOpen] = useState(false)
    const navigation = useNavigation()
    const Items = [
        {
            id: 1,
            title: "My Account",
            href: "MyAccount"
        },
        {
            id: 2,
            title: "Addresses",
            href: "Addresses"
        },
        {
            id: 3,
            title: "Payments",
            href: "Payments"
        },
        {
            id: 4,
            title: "Refunds",
            href: "Refunds"
        },
    ]



    useEffect(() => {
        dispatch(getUser({ token }))
    }, [])
    const { handleFetchPastOrders, orders, loading: orderLoader } = useGetPastOrders()

    useEffect(() => {
        handleFetchPastOrders()
    }, [])

    // console.log(orders);


    const lastOrder = orders[0]


    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
            <Header />
            <SecondaryHeader loading={loading} user={user} />
            <View style={{ borderBottomWidth: wp(0.2), marginVertical: hp(1) }}></View>
            <View>
                {
                    Items.map((item, id) => (
                        <TouchableOpacity onPress={() => navigation.navigate(item?.href)} key={id} style={{ borderBottomColor: "#202020B2", borderBottomWidth: wp(0.2), display: "flex", flexDirection: "row", paddingVertical: hp(3), paddingHorizontal: wp(3), alignItems: "center", justifyContent: "space-between" }}>
                            <Typography title={item.title} ff={"OpenSans-Medium"} color={"#202020"} fw={300} size={16} lh={25} />
                            <AntDesign name='right' color={"#202020"} size={wp(4)} />
                        </TouchableOpacity>
                    ))
                }
            </View>
            <TouchableOpacity onPress={() => setIsOpen(true)} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15 }}>
                <Text style={{ fontFamily: "OpenSans-Medium", fontSize: 16, color: "#202020" }}>Signout</Text>
                <AntDesign name='right' color={"#202020"} size={wp(4)} />
            </TouchableOpacity>
            <SignoutModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <OrderHistory loader={orderLoader} order={lastOrder} />
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})





const OrderHistory = ({ order, loader }) => {


    const orderPrice = order?.items?.reduce((acc, item) => acc + parseFloat(item?.item_price), 0)
    const [rateFood, setRateFood] = useState(false)
    return loader ? <List height={300} /> : (
        <View style={{ marginTop: 20, marginHorizontal: 10 }}>
            <View>
                <Typography title={"Recent Orders"} ff={"OpenSans-Medium"} color={"#202020"} fw={400} size={18} lh={hp(3.5)} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ borderStyle: "dashed", borderTopWidth: hp(0.1), marginTop: hp(1) }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: hp(2) }}>
                    <View>
                        <View>
                            <Typography title={order?.restaurant_name} ff={"OpenSans-Medium"} color={"#202020"} fw={400} size={16} lh={hp(2.5)} />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Typography title={order?.restaurant_address} ff={"OpenSans-Regular"} color={"#202020"} fw={400} size={hp(2)} lh={hp(2.5)} />
                            <Typography title={`Rs. ${orderPrice}`} ff={"OpenSans-Regular"} color={"#202020"} fw={400} size={hp(2)} lh={hp(2.5)} />
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <Image style={{ width: wp(4), height: hp(4), objectFit: "contain" }} source={order?.order_status === "pending" ? require("../../assets/images/history.png") : require("../../assets/images/completed.png")} />
                        <Typography title={order?.order_status} ff={"OpenSans-Regular"} color={"#202020"} fw={400} size={hp(2)} lh={hp(2.5)} />
                    </View>
                </View>
                <View style={{ marginTop: hp(3), flexDirection: "row", alignItems: "center" }}>
                    {
                        order?.items?.map((item, id) => {
                            return (<Typography key={id} title={`${item?.item_name}${id !== order?.items?.length - 1 ? ", " : ""}`} ff={"OpenSans-Regular"} color={"#202020"} fw={300} size={hp(2)} lh={hp(2.5)} />)
                        })
                    }
                </View>
                <View style={{ marginTop: hp(3) }}>
                    <Typography title={"May 27, 10:30 PM"} ff={"OpenSans-Regular"} color={"#202020"} fw={300} size={hp(1.8)} lh={hp(2)} />
                </View>
                <View style={{
                    marginTop: hp(3), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }}>
                    <TouchableOpacity style={{ backgroundColor: "#FA4A0C", height: hp(4), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "OpenSans-Regular", color: "#FFFFFF", fontWeight: "400", fontSize: hp(2.2) }}>Reorder</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRateFood(true)} style={{ backgroundColor: "#fff", height: hp(4), borderColor: "#D6D6D6", borderWidth: hp(0.2), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "OpenSans-Regular", color: "#202020", fontWeight: "400", fontSize: hp(2.2) }}>Rate Food</Text>
                    </TouchableOpacity>
                    <RateFood isOpen={rateFood} setIsOpen={setRateFood} id={order?.order_id} />
                </View>
            </ScrollView>
        </View>
    )
}