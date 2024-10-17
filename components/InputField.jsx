import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const InputField = ({ label, placeholder, secure, type }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={200}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        {label}
                    </Text>
                    <TextInput
                        keyboardType={type}
                        placeholder={placeholder}
                        placeholderTextColor={"#D6D6D6"}
                        secureTextEntry={secure}
                        style={styles.input}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default InputField

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 2,
        marginBottom: hp(2),
    },
    label: {
        marginLeft: wp(1),
        color: "#fff",
        fontFamily: "OpenSans-Regular",
        fontWeight: "300",
        fontSize: hp(1.8),
        lineHeight: hp(2.5),
        letterSpacing: wp(0.05)
    },
    input: {
        height: hp(7),
        width: wp(90),
        margin: "auto",
        borderWidth: wp(0.15),
        borderColor: "#fff",
        borderRadius: wp(2),
        paddingLeft: wp(2),
        color: "#fff"
    }
})