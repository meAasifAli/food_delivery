import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import SearchInput from '../../SearchInput'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSavedAddresses } from '../../../store/addressSlice'
import { getUser, } from '../../../store/authSlice'



const TopBar = () => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state?.auth)
    const { address, savedUserAddresses } = useSelector(state => state?.address)
    const navigation = useNavigation()


    // console.log("Address: ", address);

    useEffect(() => {
        dispatch(fetchSavedAddresses({ token }))
    }, [dispatch])



    const selectedAddress = savedUserAddresses?.find((address) => address?.selected === 1)
    // console.log("selectedAddress: ", selectedAddress);


    const handleFocus = () => {
        navigation.navigate("SearchedRestaurants", { query: "" })
        // setIsOpen(prev => !prev)
        Keyboard.dismiss()
    }

    const { user } = useSelector(state => state?.auth)


    useEffect(() => {
        dispatch(getUser({ token }))
    }, [])

    return (
        <>
            <View
                style={styles.topBar}
            >
                {/* heading */}
                <View style={styles.topBarHeading}>
                    <View style={styles.topBarHeadingLeft}>
                        {/* <Ionicons name='location' size={24} color={"#FA4A0C"} /> */}

                        {
                            savedUserAddresses?.length > 0 ?
                                <TouchableOpacity style={{ width: "90%" }} onPress={() => navigation.navigate("AddAddress")}>

                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                        <View >
                                            <Image style={{ height: 25, width: 25 }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/11202/11202939.png" }} />
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", color: "#fff" }}>{`${selectedAddress?.type}`}</Text>
                                            <Entypo name='chevron-small-down' size={16} color={"#fff"} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12, fontFamily: "OpenSans-Regular", color: "#fff", marginTop: 5, maxWidth: "100%" }}>{`${selectedAddress?.house_no}, ${selectedAddress?.area}, ${selectedAddress?.state ? selectedAddress?.state : ""}`}</Text>
                                    </View>

                                </TouchableOpacity>

                                :

                                <TouchableOpacity onPress={() => navigation.navigate("AddAddress")}>

                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                        <View>
                                            <Image style={{ height: 25, width: 25 }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/11202/11202939.png" }} />
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", color: "#fff" }}>{address?.split(",")[0]}</Text>
                                            <Entypo name='chevron-small-down' size={16} color={"#fff"} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12, fontFamily: "OpenSans-Regular", color: "#fff", marginTop: 5, maxWidth: "100%" }}>{address?.split(",")?.slice(0, 3).join(",")}</Text>
                                    </View>

                                </TouchableOpacity>
                        }
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                        <Image
                            source={{ uri: user?.profile ? user?.profile : "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                            style={styles.profileAvatar} />
                    </TouchableOpacity>
                </View>
                {/* search input */}
                <View style={{ marginBottom: 10 }}>
                    <SearchInput handleFocus={handleFocus} placeholder={"Search for Biryani"} />
                </View>
            </View>
            <View style={{ padding: 15, display: "flex", gap: 5, flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#000", textTransform: "uppercase", fontFamily: "OpenSans-Regular", fontSize: 12 }}>{user?.username}, What&apos;s on your mind?</Text>
                <View style={{ borderColor: "#ccc", borderWidth: 0.2, flex: 1 }}></View>
            </View>
        </>
    )
}

export default TopBar

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: "#202020",
        borderBottomStartRadius: wp(12),
        borderBottomEndRadius: wp(12),
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
    },
    topBarHeading: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // paddingRight: 10

    },
    topBarHeadingLeft: {
        display: "flex",
        flexDirection: "row",
    },
    profileAvatar: {
        height: hp(6),
        width: hp(6),
        borderRadius: wp(10),
        borderColor: "#fff",
        borderWidth: 1,
        resizeMode: "cover",

    },
    contentWrapper: {
        marginTop: hp(3),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
})