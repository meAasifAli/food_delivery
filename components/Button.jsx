import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

const Button = ({ title, bgColor, rounded, size, btnWidth, btnHeight }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: bgColor,
            borderRadius: rounded,
            width: width * (btnWidth / width),
            height: height * (btnHeight / height),
        }}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})