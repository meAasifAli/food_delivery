
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width, height } = Dimensions.get("window")



const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bgImg}>
        <Image resizeMode='contain' source={require("../assets/images/bg.png")} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.primaryHeading}>FOOD KART</Text>
        <Text style={styles.secondaryHeading}>Satisfy your cravings with just a tap
          Order, Eat, Repeat!</Text>
      </View>
      <View style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "#202020",
        width: width * (393 / width),
        height: height * (192 / height),
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <TouchableOpacity style={{
          height: height * (64 / height),
          width: width * (280 / width),
          borderRadius: 10,
          backgroundColor: "#FA4A0C",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text style={{
            fontFamily: "Open-Sans",
            fontWeight: "400",
            fontSize: 32,
            color: "#FFFFFF"
          }}>Get Started!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgImg: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  // img: {
  //   height: height * (404 / height),
  //   width: width * (336 / width)
  // },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  primaryHeading: {
    fontFamily: "Open-Sans",
    fontWeight: "700",
    fontSize: 48,
    color: "#FA4A0C",
    textAlign: "center"
    // lineHeight: 65.37,
    // letterSpacing: 5
  },
  secondaryHeading: {
    fontFamily: "Open-Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    maxWidth: width * (290 / width),
    lineHeight: 25
  }

});

