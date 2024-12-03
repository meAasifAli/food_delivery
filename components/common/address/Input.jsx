import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Input = ({ placeholder, onValueChange, value }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ paddingVertical: hp(1) }}>
            <TextInput value={value} onChangeText={onValueChange} placeholderTextColor={"#fff"} style={{ paddingVertical: hp(2), paddingHorizontal: wp(2), borderWidth: wp(0.1), borderColor: "#D6D6D680", fontFamily: "OpenSans-Regular", lineHeight: hp(3), fontSize: hp(2), color: "#fff", borderRadius: wp(3) }} placeholder={placeholder} />
        </KeyboardAvoidingView>
    )
}

export default Input

const styles = StyleSheet.create({})