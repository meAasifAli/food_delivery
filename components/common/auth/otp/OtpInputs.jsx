import { StyleSheet, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

const OtpInputs = ({ setOtp }) => {
    return (
        <View style={styles.otpWrapper}>
            <OtpInput
                focusColor={'#fff'}
                theme={{
                    pinCodeContainerStyle: styles.otpPinCodeContainer,
                    pinCodeTextStyle: styles.pinCodeText,
                }}
                numberOfDigits={4}
                onTextChange={text => setOtp(text)}
            />
        </View>
    );
};

export default OtpInputs;

const styles = StyleSheet.create({
    otpWrapper: {
        paddingHorizontal: 12,
        paddingVertical: 16,
    },
    otpPinCodeContainer: {
        backgroundColor: '#fff',
        height: 70,
        width: 70,
    },
    pinCodeText: {
        color: '#FA4A0C',
        fontWeight: '400',
        fontSize: 40,
        lineHeight: 45.12,
        letterSpacing: 0.05,
    },
})