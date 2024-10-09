import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typography from '../../Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import SearchInput from '../../SearchInput'

const { height } = Dimensions.get("window")
const TopBar = () => {
    return (
        <View
            style={styles.topBar}
        >
            {/* heading */}
            <View style={styles.topBarHeading}>
                <View style={styles.topBarHeadingLeft}>
                    <Image resizeMode='contain' source={require("../../../assets/images/arrow.png")} />
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
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
                    </View>
                </View>
                <View>
                    <Image
                        source={require("../../../assets/images/profile.png")}
                        style={styles.profileAvatar} />
                </View>
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
            <SearchInput />

        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    topBar: {
        height: height * 0.25,
        backgroundColor: "#202020",
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 24
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
        gap: 20,
        alignItems: "center"
    },
    profileAvatar: {
        height: 50,
        width: 50,
        borderRadius: 30,
        borderColor: "#fff",
        borderWidth: 1,
        resizeMode: "cover"
    },
    contentWrapper: {
        marginTop: 10
    },
})