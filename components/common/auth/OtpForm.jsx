import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Typography from '../../Typography'
import { OtpInput } from 'react-native-otp-entry'
import Button from '../../Button'

const OtpForm = () => {
    return (
        <ScrollView>
            <Typography
                title={"Verify Code"}
                color="#fff"
                ff="OpenSans-Regular"
                fw={700}
                size={40}
                lh={54.47}
                ls={0.05}
                ta={"center"}
                mv={16}
            />

            <View
                style={{
                    marginVertical: 16
                }}
            >
                <Typography
                    title={"OTP! sent!"}
                    color="#fff"
                    ff="OpenSans-Regular"
                    fw={300}
                    size={20}
                    lh={27.24}
                    ls={0.05}
                    ta={"center"}
                    maxW={364}
                    mh={"auto"}

                />
                <Typography
                    title={"Secure your taste journey, one code at a time!"}
                    color="#fff"
                    ff="OpenSans-Regular"
                    fw={300}
                    size={20}
                    lh={27.24}
                    ls={0.05}
                    ta={"center"}
                    maxW={273}
                    mh={"auto"}

                />
            </View>
            <View style={styles.otpWrapper}>
                <OtpInput
                    focusColor={"#fff"} theme={{
                        pinCodeContainerStyle: styles.otpPinCodeContainer,
                        pinCodeTextStyle: styles.pinCodeText
                    }} numberOfDigits={4} onTextChange={(text) => console.log(text)} />
            </View>
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
            <Button bgColor={"#FA4A0C"} color={"#fff"} size={32} widthVal={280} heightVal={64} onHandlePress={() => { }} title={"Continue"} />
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
        paddingLeft: 12,
        paddingVertical: 10
    }
})