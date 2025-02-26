import { ActivityIndicator, Dimensions, Text, TouchableOpacity } from 'react-native'
const { height } = Dimensions.get("window")

const Button = ({ handlePress, loading }) => {
    return (
        <TouchableOpacity onPress={handlePress} style={{ backgroundColor: "#FA4A0C", height: height * (54 / height), borderRadius: 10, width: "90%", alignItems: "center", marginTop: 30, marginHorizontal: "auto", justifyContent: "center", }}>
            {
                loading ? <ActivityIndicator size={"small"} color={"#fff"} /> : <Text style={{ color: "#fff", fontSize: 16, lineHeight: 24, fontWeight: "400", fontFamily: "OpenSans-Bold" }}>Signup</Text>
            }
        </TouchableOpacity>
    )
}

export default Button

