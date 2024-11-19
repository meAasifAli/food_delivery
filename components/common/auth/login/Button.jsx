import { ActivityIndicator, Alert, Text, TouchableOpacity } from 'react-native'


const Button = ({ loading, handleLogin }) => {
    return (
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#FA4A0C", padding: 20, borderRadius: 15, width: "80%", alignItems: "center", marginTop: 16, marginHorizontal: "auto" }}>
            {
                loading ? <ActivityIndicator size={"small"} color={"#fff"} /> : <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Sign In</Text>
            }
        </TouchableOpacity>
    )
}

export default Button

