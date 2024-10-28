import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.bgImgContainer}>
        <Image
          style={styles.bgImg}
          source={require("../../assets/images/bg.png")}
          resizeMode="contain" // Ensures the image scales without cutting corners
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.primaryHeading}>FOOD KART</Text>
        <Text style={styles.secondaryHeading}>Satisfy your cravings with just a tap. Order, Eat, Repeat!</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("signup")} style={{ backgroundColor: "#FA4A0C", padding: wp(5), borderRadius: wp(3), width: wp(80), alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Get started</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bgImgContainer: {
    position: 'absolute',
    top: 0,
    right: wp(-10),
    width: wp(55), // Adjust width for fitting the right side properly
    height: hp(20), // Adjust the height proportionally
    overflow: 'hidden', // Ensure no overflow issues
    zIndex: -1, // Ensure it's behind other components
  },
  bgImg: {
    width: '100%', // Make sure the image fits the container fully
    height: '100%',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(10),
  },
  primaryHeading: {
    color: "#FA4A0C",
    fontFamily: "OpenSans-Regular",
    fontWeight: "700",
    fontSize: 48,
    lineHeight: 65,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  secondaryHeading: {
    color: "#00030F",
    fontFamily: "OpenSans-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0.5,
    textAlign: "center",
    maxWidth: wp(80),
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#202020",
    height: hp(25),
    width: wp(100),
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});
