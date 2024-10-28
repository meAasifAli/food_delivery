import { Dimensions, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
const { height, width } = Dimensions.get("window")
import { useNavigation } from '@react-navigation/native'
import OtpForm from '../../components/common/auth/OtpForm'

const VerifyMobile = () => {
    const navigation = useNavigation()
    return (
        <KeyboardAvoidingView
            behavior={null}
            keyboardVerticalOffset={50}
            style={styles.container}>
            <View>
                <Image source={require("../../assets/images/pana.png")} style={{ height: height * 0.40, width: "100%", resizeMode: "contain" }} />
            </View>
            <View
                style={styles.bottomContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <OtpForm isDelivery={true} navigation={navigation} />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

export default VerifyMobile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    bottomContainer: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        height: "55%",
        width: "100%",
        backgroundColor: "#202020",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

