import { Dimensions, KeyboardAvoidingView, Platform, Text, TextInput, } from 'react-native'


const { width, height } = Dimensions.get('window')

const Input = ({ mobile, setMobile }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "padding"} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: 10 }}>
            <Text style={{ color: "#fff", marginLeft: 20, fontSize: 16, lineHeight: 21, fontFamily: "OpenSans-Regular", fontWeight: "300" }}>Mobile Number</Text>
            <TextInput
                value={mobile}
                onChangeText={(text) => setMobile(text)}
                keyboardType='phone-pad' placeholderTextColor={"white"} placeholder='Enter Mobile Number' style={{ height: height * (54 / height), borderColor: "#fff", borderWidth: 1, width: "90%", borderRadius: 10, marginVertical: 10, color: "#fff", marginHorizontal: "auto", fontFamily: "OpenSans-Regular", fontSize: 16, paddingHorizontal: 10 }} />
        </KeyboardAvoidingView>
    )
}

export default Input

