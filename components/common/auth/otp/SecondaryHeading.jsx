import { Text, View } from 'react-native'


const SecondaryHeading = () => {
    return (
        <View
            style={{
                marginVertical: 16
            }}
        >
            <Text style={{
                fontFamily: "OpenSans-Medium",
                color: "#fff",
                fontSize: 20,
                lineHeight: 25,
                textAlign: "center",
                maxWidth: "70%",
                marginHorizontal: "auto"
            }}>
                OTP sent!
            </Text>
            <Text style={{
                fontFamily: "OpenSans-Medium",
                color: "#fff",
                fontSize: 20,
                lineHeight: 25,
                textAlign: "center",
                maxWidth: "70%",
                marginHorizontal: "auto"
            }}
            >
                Secure your taste journey,
                one code at a time!
            </Text>
        </View>
    )
}

export default SecondaryHeading
