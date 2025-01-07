import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'


const Button = ({ loading, handleLogin }) => {
    return (
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#FA4A0C", padding: 15, borderRadius: 15, width: "90%", alignItems: "center", marginTop: 16, marginHorizontal: "auto" }}>
            {
                loading ? <ActivityIndicator size={"small"} color={"#fff"} /> : <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500", fontFamily: "OpenSans-Bold" }}>Signin</Text>
            }
        </TouchableOpacity>
    )
}

export default Button

