import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');


const LandingPage = () => {

  const { isAuthenticated, user, token, otp } = useSelector(state => state.auth)
  console.log('user : ', user);
  console.log('IsAuthenticated: ', isAuthenticated);
  console.log('token: ', token);
  console.log('otp: ', otp);




  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.bgImgContainer}>
        <Image
          style={styles.bgImg}
          source={require("../../assets/images/bg.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.primaryHeading}>FOOD KART</Text>
        <Text style={styles.secondaryHeading}>Satisfy your cravings with just a tap. Order, Eat, Repeat!</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("signup")} style={{ backgroundColor: "#FA4A0C", height: height * (64 / height), borderRadius: 10, width: width * (280 / width), alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "#fff", fontSize: 24, lineHeight: 43.58, fontWeight: "500", fontFamily: "OpenSans-Regular" }}>Get started</Text>
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
    top: hp(-3),
    right: wp(-10),
    width: wp(55),
    height: hp(30),
    overflow: 'hidden',
    zIndex: -1,
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
    height: hp(20),
    width: wp(100),
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});
