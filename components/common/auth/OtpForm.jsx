import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typography from '../../Typography'
import { OtpInput } from 'react-native-otp-entry'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const OtpForm = () => {
    return (
        <ScrollView>
            <Heading />
            <SecondaryHeading />
            <OtpInputs />
            <Option />
            <ButtonComponent />
        </ScrollView>
    )
}

export default OtpForm

const styles = StyleSheet.create({
    otpWrapper: {
        paddingHorizontal: 12,
        paddingVertical: 16
    },
    otpPinCodeContainer: {
        backgroundColor: "#fff",
        height: 70,
        width: 70
    },
    pinCodeText: {
        color: "#FA4A0C",
        fontWeight: "400",
        fontSize: 40,
        lineHeight: 45.12,
        letterSpacing: 0.05,

    },
    optionWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingLeft: wp(7),
        paddingVertical: hp(2),
        marginBottom: hp(1)
    }
})

const Heading = () => {
    return (
        <Typography
            title={"Verify OTP"}
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
                marginVertical: hp(2)
            }}
        >
            <Typography
                title={"OTP! sent!"}
                color="#fff"
                ff="OpenSans-Regular"
                fw={300}
                size={wp(5)}
                lh={hp(4)}
                ls={wp(0.05)}
                ta={"center"}
                maxW={wp(60)}
                mh={"auto"}

            />
            <Typography
                title={"Secure your taste journey, one code at a time!"}
                color="#fff"
                ff="OpenSans-Regular"
                fw={300}
                size={wp(5)}
                lh={hp(4)}
                ls={wp(0.05)}
                ta={"center"}
                maxW={wp(65)}
                mh={"auto"}

            />
        </View>
    )
}

const OtpInputs = () => {
    return (
        <View style={styles.otpWrapper}>
            <OtpInput
                focusColor={"#fff"} theme={{
                    pinCodeContainerStyle: styles.otpPinCodeContainer,
                    pinCodeTextStyle: styles.pinCodeText
                }} numberOfDigits={4} onTextChange={(text) => console.log(text)} />
        </View>
    )
}

const Option = () => {
    return (
        <View style={styles.optionWrapper}>
            <Typography
                title={"Didn’t get the code? Resend in:"}
                color="#fff"
                ff="OpenSans-Regular"
                fw={300}
                size={16}
                lh={21}
                ls={0.05}
            />
            <Typography
                title={"0.59"}
                color="#FA4A0C"
                ff="OpenSans-Regular"
                fw={300}
                size={16}
                lh={21}
                ls={0.05}

            />
        </View>
    )
}

const ButtonComponent = () => {
    return (
        <TouchableOpacity onPress={() => { }} style={{ backgroundColor: "#FA4A0C", padding: wp(4), borderRadius: wp(3), width: wp(80), alignItems: "center", marginHorizontal: "auto" }}>
            <Text style={{ color: "#fff", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Continue</Text>
        </TouchableOpacity>
    )
}