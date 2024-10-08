import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Typography from '../components/Typography';
import CustomLink from '../components/CustomLink';
const { width, height } = Dimensions.get('window');

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../assets/images/bg.png")} />
      </View>
      <View
        style={styles.formContainer}
      >
        <Typography
          title={"Sign In"}
          color="#fff"
          ff="OpenSans-Regular"
          fw={700}
          size={40}
          lh={54.47}
          ls={0.05}
          ta={"center"}
          mv={16}
        />

        <View
          style={{
            marginVertical: 16
          }}
        >
          <Typography
            title={"Feast on convenience,"}
            color="#fff"
            ff="OpenSans-Regular"
            fw={300}
            size={20}
            lh={27.24}
            ls={0.05}
            ta={"center"}
            maxW={364}
            mh={"auto"}

          />
          <Typography
            title={"Login to indulge in culinary delights!"}
            color="#fff"
            ff="OpenSans-Regular"
            fw={300}
            size={20}
            lh={27.24}
            ls={0.05}
            ta={"center"}
            maxW={364}
            mh={"auto"}

          />
        </View>

        <InputField type={"numeric"} label={"Mobile Number"} placeholder={"Enter Your Mobile Number"} />
        <Button title={"Signin"} />
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
            title={"Doesn't have an account?"}
            size={16}
            lh={21.79}
            ls={0.05}
            fw={400}
            ff={"OpenSans-Regular"}
            color={"#fff"}
          />
          <CustomLink title={"Signup"} href={"signup"} size={16}
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

export default SigninScreen;

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
    padding: 10,


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
    gap: 10,
    flex: 0.9
  }

});
