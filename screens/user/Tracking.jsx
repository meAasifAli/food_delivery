import { useNavigation } from '@react-navigation/native';
import { Image, PermissionsAndroid, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Typography from '../../components/Typography';
import IonIcons from 'react-native-vector-icons/Ionicons'
import MapView, { Marker } from 'react-native-maps';
import { useContext, useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Geolocation from '@react-native-community/geolocation';
import { LocationContext } from '../../context/LocationContext';



const Tracking = () => {
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    useEffect(() => {
        const getCoordinates = () => {
            Geolocation.getCurrentPosition(info => {
                setLongitude(info.coords.longitude);
                setLatitude(info.coords.latitude);
            });
        }
        getCoordinates()
    }, [])
    const [status, setStatus] = useState("Confirmed")
    const orderCompleted = false;
    return (
        <View style={styles.container}>
            <Header />
            {
                orderCompleted ? <Completed /> : <>
                    <Map status={status} setStatus={setStatus} longitude={longitude} latitude={latitude} />
                    <OrderContent status={status} />
                </>
            }
        </View>
    )
}

export default Tracking

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

const Completed = () => {
    return (
        <ScrollView style={{ display: "flex", flexDirection: "column", marginBottom: hp(2) }}>
            <View style={{ height: hp(40), backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center", gap: hp(2) }}>
                <Typography maxW={wp(80)} ta={"center"} title={"YOUR ORDER HAS BEEN DELIVERED!"} ff={"OpenSans-Medium"} fw={400} size={hp(5)} lh={wp(hp(1.5))} color={"#fff"} />
                <Image style={{ height: 50, width: 50, objectFit: "contain" }} source={require("../../assets/images/completed.png")} />
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: hp(2) }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                    <View>
                        <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/arrived.png")} />
                    </View>
                    <View>
                        <Typography size={hp(3)} title={'Order Delivered Successfully'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3.5)} />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                    <View>
                        <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/shopping-bag.png")} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                        <Typography size={hp(2)} title={'4 Items'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3.5)} />
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                            <Typography size={hp(2)} title={'Details'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(2)} />
                            <Entypo name='chevron-down' color={"#202020"} size={hp(2.5)} />
                        </View>
                    </View>
                </View>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1), }}>
                    <View>
                        <Typography size={hp(2)} title={'Tip delivery Rider?'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3.5)} />
                    </View>
                    <View >

                        <Text style={{ color: "#FA4A0C", }}>ADD TIP</Text>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: wp(4), padding: wp(2), borderWidth: wp(0.1), width: wp(90), marginHorizontal: "auto", borderRadius: wp(2) }}>
                    <View>
                        <Typography size={hp(2)} title={'Rate Food'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3.5)} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: wp(4), padding: wp(2), borderWidth: wp(0.1), width: wp(90), marginHorizontal: "auto", borderRadius: wp(2) }}>
                    <View>
                        <Typography size={hp(2)} title={'Rate Us'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3.5)} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                        <AntDesign name='staro' color={"#202020"} size={wp(4)} />
                    </View>
                </View>
            </View >
        </ScrollView>
    )
}

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: wp(3) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' color={"#000"} size={20} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Typography ta={"center"} title={"Order"} ff={"Open-Sans"} fw={400} size={16} lh={21} color={"#000"} />
            </View>
        </View>
    )
}

const Map = ({ status, setStatus, }) => {
    // const { location } = useContext(LocationContext)



    return (
        <View>
            <MapView
                showsMyLocationButton={true}
                showsUserLocation={true}
                provider={'google'}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{ height: hp(50), position: "relative" }}
            >


                <Marker coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }} title="You are here" />

            </MapView>

            <View style={{ position: "absolute", bottom: hp(-2), backgroundColor: "#000", padding: wp(2), height: hp(6), width: wp(100), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: wp(2) }}>
                <Pressable onPress={() => setStatus("Confirmed")} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: status === "Confirmed" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"Confirmed"} ff={"OpenSans-Regular"} fw={400} size={16} lh={21} color={status === "Confirmed" ? "#FA4A0C" : "#fff"} />
                </Pressable>
                <Pressable onPress={() => setStatus("OntheWay")} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: status === "OntheWay" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"On the Way"} ff={"OpenSans-Regular"} fw={400} size={16} lh={21} color={status === "OntheWay" ? "#FA4A0C" : "#fff"} />
                </Pressable>
                <Pressable onPress={() => setStatus("Arrived")} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                    <View style={{ width: wp(2), height: hp(1), backgroundColor: status === "Arrived" ? "#FA4A0C" : "#fff", borderRadius: wp(5) }}></View>
                    <Typography title={"Arrived"} ff={"OpenSans-Regular"} fw={400} size={16} lh={21} color={status === "Arrived" ? "#FA4A0C" : "#fff"} />
                </Pressable>
            </View>
        </View>
    )
}

const OrderContent = ({ status }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ display: "flex", flexDirection: "column", marginTop: hp(4), gap: hp(2) }}>
            {
                status === "Confirmed" && <Confirmed />
            }
            {
                status === "OntheWay" && <OntheWay />
            }
            {
                status === "Arrived" && <Arrived />
            }
        </ScrollView>
    )
}

const Confirmed = () => {
    return (
        <View style={{ display: "flex", flexDirection: "column", gap: hp(2) }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/order.png")} />
                </View>
                <View>
                    <Typography size={hp(3)} title={'Your Order is getting Ready'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} />
                    <Typography maxW={wp(60)} size={hp(1.5)} title={'Delivery partner will be assigned once the order is ready and packed!'} ff={"OpenSans-Regular"} color={"#000"} lh={hp(2)} />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/shopping-bag.png")} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                    <Typography size={hp(2)} title={'4 Items'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3)} />
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <Typography size={hp(2)} title={'Details'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3)} />
                        <Entypo name='chevron-down' color={"#202020"} size={hp(2.5)} />
                    </View>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/building.png")} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Typography size={hp(2)} title={'Delivering to: '} ff={"OpenSans-Regular"} color={"#000"} lh={hp(3)} fw={300} />
                    <Typography size={hp(2)} title={'Raybit Technologies'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} fw={600} />
                </View>
            </View>
        </View >
    )
}

const OntheWay = () => {
    return (
        <View style={{ display: "flex", flexDirection: "column", gap: hp(2) }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/order.png")} />
                </View>
                <View>
                    <Typography size={hp(3)} title={'Your Order is on the way'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} />
                    <Typography maxW={wp(60)} size={hp(1.5)} title={'Delivery partner has picked up the order and is on the way to deliver it to You!'} ff={"OpenSans-Regular"} color={"#000"} lh={hp(2)} />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/shopping-bag.png")} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                    <Typography size={hp(2)} title={'4 Items'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3)} />
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <Typography size={hp(2)} title={'Details'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3)} />
                        <Entypo name='chevron-down' color={"#202020"} size={hp(2.5)} />
                    </View>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/building.png")} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Typography size={hp(2)} title={'Delivering to: '} ff={"OpenSans-Regular"} color={"#000"} lh={hp(3)} fw={300} />
                    <Typography size={hp(2)} title={'Raybit Technologies'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} fw={600} />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/motorcycle.png")} />
                </View>
                <View>
                    <Typography size={hp(3)} title={'Hi i am Aslam'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} />
                    <Typography maxW={wp(60)} size={hp(1.5)} title={'Your Delivery Partner'} ff={"OpenSans-Regular"} color={"#000"} lh={hp(2)} />
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Feather name='phone-call' size={wp(4)} color={"#000"} />
                </View>
            </View>
        </View >
    )
}

const Arrived = () => {
    return (
        <View style={{ display: "flex", flexDirection: "column", gap: hp(2) }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/arrived.png")} />
                </View>
                <View>
                    <Typography size={hp(3)} title={'Your Order has Arrived'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/shopping-bag.png")} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                    <Typography size={hp(2)} title={'4 Items'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3)} />
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                        <Typography size={hp(2)} title={'Details'} ff={"OpenSans-Regular"} color={"#202020"} lh={hp(3)} />
                        <Entypo name='chevron-down' color={"#202020"} size={hp(2.5)} />
                    </View>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/building.png")} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Typography size={hp(2)} title={'Delivering to: '} ff={"OpenSans-Regular"} color={"#000"} lh={hp(3)} fw={300} />
                    <Typography size={hp(2)} title={'Raybit Technologies'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} fw={600} />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4), padding: wp(3), borderBottomWidth: wp(0.1) }}>
                <View>
                    <Image style={{ height: 30, width: 30, objectFit: "contain" }} source={require("../../assets/images/motorcycle.png")} />
                </View>
                <View>
                    <Typography size={hp(3)} title={'Hi i am Aslam'} ff={"OpenSans-Medium"} color={"#000"} lh={hp(3)} />
                    <Typography maxW={wp(60)} size={hp(1.5)} title={'Your Delivery Partner'} ff={"OpenSans-Regular"} color={"#000"} lh={hp(2)} />
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Feather name='phone-call' size={wp(4)} color={"#000"} />
                </View>
            </View>
        </View >
    )
}