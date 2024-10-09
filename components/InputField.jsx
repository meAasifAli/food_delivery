import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window")

const InputField = ({ label, placeholder, secure, type }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputContainer} keyboardVerticalOffset={200}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 2,
        marginBottom: 15
    },
    label: {
        marginLeft: 15,
        color: "#fff",
        fontFamily: "OpenSans-Regular",
        fontWeight: "300",
        fontSize: 20,
        lineHeight: 27.24,
        letterSpacing: 0.05
    },
    input: {
        height: height * (50 / height),
        width: width * (350 / width),
        margin: "auto",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
        paddingLeft: 10,
        color: "#fff"
    }
})