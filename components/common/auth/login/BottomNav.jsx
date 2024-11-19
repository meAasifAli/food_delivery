import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'

const BottomNav = () => {
    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1%",
            marginLeft: 52,
            marginTop: 20
        }}>
            <Text style={{
                color: "#fff",
                fontSize: 16,
                lineHeight: 21.79,
                letterSpacing: 0.05,
                fontFamily: "OpenSans-Regular"
            }}>Doesn&apos;t have an account? {" "}</Text>
            <Link style={{
                color: "#FA4A0C",
                fontFamily: "OpenSans-Bold",
                fontSize: 16,
                lineHeight: 21.79,
                letterSpacing: 0.05,
            }} to={"/signup"}>Signup</Link>
        </View>
    )
}

export default BottomNav

const styles = StyleSheet.create({})