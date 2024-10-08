
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from '../components/Button';


const { width, height } = Dimensions.get("window")


const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bgImg}>
        <Image source={require("../assets/images/bg.png")} />
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
        height: height * (192 / height),
        width: width * (393 / width),
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FA4A0C",
            height: height * (64 / height),
            width: width * (280 / width),
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{
            color: "#fff",
            fontFamily: "Open-Sans",
            fontWeight: "400",
            fontSize: 32,
            lineHeight: 43,
            letterSpacing: 0.43,
            textAlign: "center"
          }}>Get Started</Text>
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
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  primaryHeading: {
    color: "#FA4A0C",
    fontFamily: "Open-Sans",
    fontWeight: "700",
    fontSize: 48,
    lineHeight: 65,
    letterSpacing: 0.5,
    textAlign: "center"
  },
  secondaryHeading: {
    color: "#00030F",
    fontFamily: "Open-Sans",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0.5,
    textAlign: "center",
    maxWidth: width * (290 / width)
  }

});

