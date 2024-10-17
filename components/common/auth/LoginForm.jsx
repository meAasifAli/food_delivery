import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Typography from '../../Typography'
import CustomLink from '../../CustomLink'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const LoginForm = () => {
    return (
        <ScrollView>
            <Heading />
            <SecondaryHeading />
            <Input />
            <ButtonComponent />
            <GoogleNav />
            <BottomNav />
        </ScrollView>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    optionContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: wp(100),
        marginVertical: hp(3),
        // marginHorizontal: "auto"
    },
    googleWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(1),
        justifyContent: "flex-start"
    },
    navWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: wp(1),
        marginLeft: wp(12),
        marginTop: hp(5)
    }
})


const Heading = () => {
    return (
        <Typography
            title={"Sign In"}
            color="#fff"
            ff="OpenSans-Bold"
            fw={600}
            size={wp(10)}
            lh={hp(8)}
            ls={wp(0.05)}
            ta={"center"}
            mv={hp(0.5)}
        />
    )
}

const SecondaryHeading = () => {
    return (
        <View
            style={{
                marginVertical: 16
            }}
        >
            <Typography
                title={"Feast on convenience,"}
                color="#fff"
                ff="OpenSans-Regular"
                fw={300}
                size={wp(5)}
                lh={hp(3)}
                ls={wp(0.05)}
                ta={"center"}
                maxW={wp(55)}
                mh={"auto"}

            />
            <Typography
                title={"Login to indulge in culinary delights!"}
                color="#fff"
                ff="OpenSans-Regular"
                fw={300}
                size={wp(5)}
                lh={hp(3)}
                ls={wp(0.05)}
                ta={"center"}
                maxW={wp(100)}
                mh={"auto"}
            />

        </View>
    )
}
const Input = () => {
    return (
        <KeyboardAvoidingView style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: hp(1) }}>
            <Text style={{ color: "#fff", marginLeft: wp(5), fontFamily: "OpenSans-Regular", fontWeight: "300" }}>Mobile Number</Text>
            <TextInput keyboardType='phone-pad' placeholderTextColor={"white"} placeholder='Enter Mobile Number' style={{ padding: wp(3), borderColor: "#fff", borderWidth: wp(0.5), width: wp(90), borderRadius: wp(3), marginVertical: wp(2), color: "#fff", marginHorizontal: "auto" }} />
        </KeyboardAvoidingView>
    )
}

const ButtonComponent = () => {
    const navigation = useNavigation()
    return (
        <View style={{ marginTop: hp(2), marginHorizontal: "auto" }}>
            <TouchableOpacity onPress={() => navigation.navigate("otp")} style={{ backgroundColor: "#FA4A0C", padding: wp(4), borderRadius: wp(3), width: wp(80), alignItems: "center" }}>
                <Text style={{ color: "#fff", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const GoogleNav = () => {
    return (
        <View style={styles.optionContainer}>
            <View>
                <Typography
                    title={"or Continue with"}
                    size={16}
                    lh={21.79}
                    ls={0.05}
                    fw={400}
                    ff={"OpenSans-Regular"}
                    color={"#fff"}
                />
            </View>
            <View style={styles.googleWrapper}>
                <Image source={require("../../../assets/images/google.png")} />
                <Typography
                    title={"Google"}
                    size={16}
                    lh={18.05}
                    ls={0.05}
                    fw={700}
                    ff={"OpenSans-Regular"}
                    color={"#fff"}
                />
            </View>
        </View>
    )
}

const BottomNav = () => {
    return (
        <View style={styles.navWrapper}>
            <Typography
                title={"Doesn't have an account?  "}
                size={16}
                lh={21.79}
                ls={0.05}
                fw={400}
                ff={"OpenSans-Regular"}
                color={"#fff"}
            />
            <CustomLink title={"Signup"} href={"signup"} size={16}
                lh={21.79}
                ls={0.05}
                fw={700}
                ff={"OpenSans-Regular"}
                color={"#FA4A0C"} />
        </View>
    )
}