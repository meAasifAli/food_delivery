import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Button = ({ title, onHandlePress, heightVal, widthVal, size, bgColor, color }) => {
    return (
        <TouchableOpacity
            onPress={onHandlePress}
            style={[styles.container, {
                height: hp(heightVal),
                width: wp(widthVal),
                backgroundColor: bgColor
            }]}>
            <Text style={[styles.text, {
                fontSize: size,
                color: color

            }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FA4A0C",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "auto",
        marginTop: 20
    },
    text: {
        color: "#fff",
        fontFamily: "OpenSans-Regular",
        fontWeight: "400",
        fontSize: 32,
        lineHeight: 43,
        letterSpacing: 0.43,
        textAlign: "center"
    }
})