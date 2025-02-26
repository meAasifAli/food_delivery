import { Dimensions, KeyboardAvoidingView, Text, TextInput } from "react-native"

const { width, height } = Dimensions.get("window")

const Input = ({ label, placeholder, type, value, onChange }) => {
    return (
        <KeyboardAvoidingView style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: 10 }}>
            <Text style={{ color: "#fff", marginLeft: "5%", fontFamily: "OpenSans-Regular", fontWeight: "300" }}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChange}
                keyboardType={type} placeholderTextColor={"white"} placeholder={placeholder} style={{ fontFamily: "OpenSans-Regular", fontSize: 16, height: height * (54 / height), borderColor: "#fff", borderWidth: 1, width: "90%", borderRadius: 10, marginVertical: 5, color: "#fff", marginHorizontal: "auto", paddingLeft: 10 }} />
        </KeyboardAvoidingView>
    )
}

export default Input