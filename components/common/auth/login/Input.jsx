import { KeyboardAvoidingView, Platform, Text, TextInput, } from 'react-native'


const Input = ({ mobile, setMobile }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "padding"} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: 10 }}>
            <Text style={{ color: "#fff", marginLeft: 20, fontSize: 16, lineHeight: 21, fontFamily: "OpenSans-Regular", fontWeight: "300" }}>Mobile Number</Text>
            <TextInput
                value={mobile}
                onChangeText={(text) => setMobile(text)}
                keyboardType='phone-pad' placeholderTextColor={"white"} placeholder='Enter Mobile Number' style={{ padding: 15, borderColor: "#fff", borderWidth: 1, width: "90%", borderRadius: 15, marginVertical: 10, color: "#fff", marginHorizontal: "auto", fontFamily: "OpenSans-Regular", fontSize: 16 }} />
        </KeyboardAvoidingView>
    )
}

export default Input

