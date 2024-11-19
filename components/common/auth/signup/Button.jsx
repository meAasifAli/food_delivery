import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'


const Button = ({ handlePress, loading }) => {
    return (
        <TouchableOpacity onPress={handlePress} style={{ backgroundColor: "#FA4A0C", padding: 20, borderRadius: 15, width: "80%", alignItems: "center", marginTop: 16, marginHorizontal: "auto" }}>
            {
                loading ? <ActivityIndicator size={"small"} color={"#fff"} /> : <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Sign Up</Text>
            }
        </TouchableOpacity>
    )
}

export default Button

