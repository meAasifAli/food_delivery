import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typography from '../../Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import SearchInput from '../../SearchInput'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const TopBar = () => {
    const navigation = useNavigation()
    const { user, verificationWindow, phone, otp: storeOtp, token } = useSelector((state) => state?.auth)
    console.log(user);

    console.log(token);


    return (
        <View
            style={styles.topBar}
        >
            {/* heading */}
            <View style={styles.topBarHeading}>
                <View style={styles.topBarHeadingLeft}>
                    <Image resizeMode='contain' source={require("../../../assets/images/arrow.png")} />
                    <Pressable onPress={() => navigation.navigate("AddAddress")} style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: wp(1),
                        alignItems: "flex-start"
                    }}>
                        <Typography
                            title={"Kursu, Rajbagh 190008"}
                            fw={700}
                            ff={"OpenSans-Regular"}
                            size={16}
                            lh={21.62}
                            ls={0.05}
                            color={"#fff"}
                            maxW={131}
                        />
                        <Entypo name='chevron-small-down' size={16} color={"#fff"} />
                    </Pressable>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                    <Image
                        source={require("../../../assets/images/profile.png")}
                        style={styles.profileAvatar} />
                </TouchableOpacity>
            </View>
            {/* Text */}
            <View
                style={styles.contentWrapper}
            >
                <Typography
                    title={"Embark on a culinary adventure"}
                    maxW={298}
                    ff={"OpenSans-Italic"}
                    size={16}
                    lh={21.62}
                    ls={0.07}
                    ta={"center"}
                    color={"#fff"}
                />
                <Typography
                    title={" Let's find your next Flavor Sensation!"}
                    maxW={298}
                    ff={"OpenSans-Italic"}
                    size={16}
                    lh={21.62}
                    ls={0.07}
                    ta={"center"}
                    color={"#fff"}
                />
            </View>
            {/* search input */}
            <View style={{ marginBottom: 10 }}>
                <SearchInput placeholder={"Search for Biryani"} />
            </View>

        </View>
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
        gap: wp(5),
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