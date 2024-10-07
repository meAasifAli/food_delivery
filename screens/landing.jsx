import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bgImg}>
        <Image source={require("../assets/images/bg.png")} />
      </View>
      <View style={styles.contentContainer}>
        <Text
          style={styles.textHeading}
        >FOOD
          KART</Text>
      </View>
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  bgImg: {
    position: "absolute",
    top: 0,
    right: 0
  },
  textHeading: {
    fontFamily: "OpenSans-Regular",
    fontSize: 40,
    fontWeight: "bold",
    color: "#FA4A0C",
    textAlign: "center"
  }
})