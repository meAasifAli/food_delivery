import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'

const CustomLink = ({ href, size, color, lh, ls, fw, ff, maxW, title }) => {
    return (
        <Link style={{
            fontSize: size,
            color: color,
            lineHeight: lh,
            letterSpacing: ls,
            fontWeight: fw,
            fontFamily: ff,
            maxWidth: maxW
        }} to={{ screen: href }} >{title}</Link>
    )
}

export default CustomLink

const styles = StyleSheet.create({})