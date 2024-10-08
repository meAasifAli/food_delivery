import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

const Button = ({ title, onHandlePress }) => {
    return (
        <TouchableOpacity
            onPress={onHandlePress}
            style={{
                backgroundColor: "#FA4A0C",
                height: height * (64 / height),
                width: width * (280 / width),
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text style={{
                color: "#fff",
                fontFamily: "Open-Sans",
                fontWeight: "400",
                fontSize: 32,
                lineHeight: 43,
                letterSpacing: 0.43,
                textAlign: "center"
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})