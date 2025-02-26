import { Image, Text, View } from 'react-native'


const GoogleNav = () => {
    return (
        <View style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            maxWidth: "100%",
            marginTop: 30
        }}>
            <View>
                <Text style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 16,
                    lineHeight: 21.79,
                    letterSpacing: 0.05,
                    color: "#fff",
                }}>or continue with</Text>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                justifyContent: "flex-start"
            }}>
                <Image source={require("../../../../assets/images/google.png")} />
                <Text style={{
                    fontFamily: "OpenSans-Bold",
                    fontSize: 16,
                    lineHeight: 18.05,
                    letterSpacing: 0.05,
                    color: "#fff"
                }}>Google</Text>

            </View>
        </View >
    )
}

export default GoogleNav

