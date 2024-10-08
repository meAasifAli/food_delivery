import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

const Button = ({ title, onHandlePress }) => {
    return (
        <TouchableOpacity
            onPress={onHandlePress}
            style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FA4A0C",
        height: height * (64 / height),
        width: width * (280 / width),
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