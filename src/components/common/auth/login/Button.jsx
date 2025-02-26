import { ActivityIndicator, Dimensions, Text, TouchableOpacity } from 'react-native'


const { height, width } = Dimensions.get("window")

const Button = ({ loading, handleLogin }) => {
    return (
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#FA4A0C", height: height * (54 / height), borderRadius: 10, width: "90%", alignItems: "center", marginTop: 16, marginHorizontal: "auto", justifyContent: "center" }}>
            {
                loading ? <ActivityIndicator size={"small"} color={"#fff"} /> : <Text style={{ color: "#fff", fontSize: 16, lineHeight: 24, fontWeight: "400", fontFamily: "OpenSans-Bold" }}>Signin</Text>
            }
        </TouchableOpacity>
    )
}

export default Button

