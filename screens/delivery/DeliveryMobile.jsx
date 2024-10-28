import { Dimensions, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
const { height, width } = Dimensions.get("window")
import { useNavigation } from '@react-navigation/native'


const DeliveryMobile = () => {
    const navigation = useNavigation()
    return (
        <KeyboardAvoidingView
            behavior={null}
            keyboardVerticalOffset={50}
            style={styles.container}>
            <View>
                <Image source={require("../../assets/images/pana.png")} style={{ height: height * 0.60, width: "100%", resizeMode: "contain" }} />
            </View>
            <View
                style={styles.bottomContainer}>
                <View
                >
                    <View>
                        <Text style={{
                            fontFamily: "OpenSans-Regular",
                            fontSize: 12,
                            color: "#fff"
                        }}>Mobile</Text>
                    </View>
                    <View
                    >
                        <TextInput
                            keyboardType='numeric'
                            placeholderTextColor={"white"}
                            style={{
                                width: width * 0.90,
                                marginHorizontal: "auto",
                                height: height * 0.075,
                                borderColor: "#fff",
                                borderWidth: 2,
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginTop: 10,
                                fontSize: 16,
                                fontFamily: "OpenSans-Regular",
                            }}
                            placeholder='Enter your mobile number' />
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("verify")} style={{ backgroundColor: "#FA4A0C", height: height * 0.075, width: "70%", borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginTop: height * 0.035 }}>
                    <Text style={{
                        fontFamily: "OpenSans-Medium",
                        fontSize: 32,
                        color: "#fff"
                    }}>Continue</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default DeliveryMobile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    bottomContainer: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        height: "35%",
        width: "100%",
        backgroundColor: "#202020",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})