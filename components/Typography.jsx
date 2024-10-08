import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Typography = ({ title, size, color, lh, ls, fw, ff, maxW, ta, mv, mh }) => {
    return (
        <Text style={{
            fontSize: size,
            color: color,
            lineHeight: lh,
            letterSpacing: ls,
            fontWeight: fw,
            fontFamily: ff,
            maxWidth: maxW,
            textAlign: ta,
            marginVertical: mv,
            marginHorizontal: mh

        }}>{title}</Text>
    )
}

export default Typography

const styles = StyleSheet.create({})