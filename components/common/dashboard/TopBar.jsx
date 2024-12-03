import { Image, Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Typography from '../../Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import SearchInput from '../../SearchInput'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import SearchModal from '../../modals/SearchModal'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'


const TopBar = () => {
    const { postcode, suburb, city, } = useSelector(state => state?.address)
    const navigation = useNavigation()
    const [isOpen, setIsOpen] = useState(false)


    const handleFocus = () => {
        setIsOpen(prev => !prev)
        Keyboard.dismiss()
    }

    const { user } = useSelector(state => state?.auth)
    // console.log(fullAddress);


    return (
        <>
            <View
                style={styles.topBar}
            >
                {/* heading */}
                <View style={styles.topBarHeading}>
                    <View style={styles.topBarHeadingLeft}>
                        <Ionicons name='location' size={24} color={"#FA4A0C"} />
                        <TouchableOpacity onPress={() => navigation.navigate("AddAddress")} style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: wp(1),
                            alignItems: "flex-start"
                        }}>

                            <View>
                                <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", color: "#fff" }}>{`${suburb} ${city}`}</Text>
                                <Text style={{ fontSize: 12, fontFamily: "OpenSans-Bold", color: "#fff" }}>{postcode}</Text>

                            </View>
                            <Entypo name='chevron-small-down' size={16} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                        <Image
                            source={require("../../../assets/images/profile.png")}
                            style={styles.profileAvatar} />
                    </TouchableOpacity>
                </View>
                {/* search input */}
                <View style={{ marginBottom: 10 }}>
                    <SearchInput isOpen={isOpen} handleFocus={handleFocus} placeholder={"Search for Biryani"} />
                    <SearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
                </View>
            </View>
            <View style={{ padding: 15, marginTop: 10, display: "flex", gap: 5, flexDirection: "row", alignItems: "center" }}>
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
        justifyContent: "space-between"
    },
    topBarHeadingLeft: {
        display: "flex",
        flexDirection: "row",
        gap: "15%",
        alignItems: "center",
        flexWrap: "wrap"
    },
    profileAvatar: {
        height: hp(7),
        width: hp(7),
        borderRadius: wp(10),
        borderColor: "#fff",
        borderWidth: 1,
        resizeMode: "cover"
    },
    contentWrapper: {
        marginTop: hp(3),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
})