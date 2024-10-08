import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Typography from '../components/Typography';
import CustomLink from '../components/CustomLink';
const { width, height } = Dimensions.get('window');

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../assets/images/bg.png")} />
      </View>
      <View
        style={styles.formContainer}
      >
        <Text
          style={styles.formHeading}
        >Sign Up</Text>
        <InputField label={"Name"} placeholder={"Enter Your Name"} />
        <InputField label={"Email"} placeholder={"Enter Your Email"} />
        <InputField type={"numeric"} label={"Mobile Number"} placeholder={"Enter Your Mobile Number"} />
        <Button title={"Signup"} />
        <View style={styles.optionContainer}>
          <View>
            <Typography
              title={"or Continue with"}
              size={16}
              lh={21.79}
              ls={0.05}
              fw={400}
              ff={"OpenSans-Regular"}
              color={"#fff"}
            />
          </View>
          <View style={styles.googleWrapper}>
            <Image source={require("../assets/images/google.png")} />
            <Typography
              title={"Google"}
              size={16}
              lh={18.05}
              ls={0.05}
              fw={700}
              ff={"OpenSans-Regular"}
              color={"#fff"}
            />
          </View>
        </View>
        <View style={styles.navWrapper}>
          <Typography
            title={"Already have an account?"}
            size={16}
            lh={21.79}
            ls={0.05}
            fw={400}
            ff={"OpenSans-Regular"}
            color={"#fff"}
          />
          <CustomLink title={"Login"} href={"signin"} size={16}
            lh={21.79}

            ls={0.05}
            fw={700}
            ff={"OpenSans-Regular"}
            color={"#FA4A0C"} />
        </View>
      </View>

    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: "relative"
  },
  imgWrapper: {
    position: "absolute",
    top: -40,
    right: 0,

  },
  img: {
    height: height * (282 / height),
    width: width * (235 / width),
    resizeMode: "contain"
  },
  formContainer: {
    backgroundColor: "#202020",
    height: height * (628 / height),
    width: width * 1,
    marginTop: height * (224 / height),
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 10

  },
  formHeading: {
    color: "#fff",
    fontFamily: "OpenSans-Regular",
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 54.47,
    letterSpacing: 0.05,
    textAlign: "center",
    marginVertical: 15
  },
  optionContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: width * (350 / width),
    marginVertical: 20,
    // marginHorizontal: "auto"
  },
  googleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start"
  },
  navWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  }

});
