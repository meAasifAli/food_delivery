import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useContext, useState } from 'react';
import Heading from '../../components/common/auth/login/Heading';
import SecondaryHeading from '../../components/common/auth/login/SecondaryHeading';
import Input from '../../components/common/auth/login/Input';
import Button from '../../components/common/auth/login/Button';
import GoogleNav from '../../components/common/auth/login/GoogleNav';
import BottomNav from '../../components/common/auth/login/BottomNav';
import useSignin from '../../hooks/useSignin';

const { height, width } = Dimensions.get("window")

const SigninScreen = () => {


  const [mobile, setMobile] = useState("")
  const { loading, handleSigninUser } = useSignin()

  const handleLogin = async () => {
    await handleSigninUser(mobile)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../../assets/images/bg.png")} />
      </View>
      <View
        style={styles.formContainer}
      >

        <ScrollView contentContainerStyle={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
          <Heading />
          <SecondaryHeading />
          <Input value={mobile} setMobile={setMobile} />
          <Button loading={loading} handleLogin={handleLogin} />
          <GoogleNav />
          <BottomNav />
        </ScrollView>
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
    position: 'absolute',
    top: "-6%",
    right: 0,
    zIndex: -10,
  },
  img: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    marginTop: height * 0.3,
    backgroundColor: '#202020',
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingVertical: 20
  },
});
