import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Heading from '../../components/common/auth/otp/Heading';
import SecondaryHeading from '../../components/common/auth/otp/SecondaryHeading';
import OtpInputs from '../../components/common/auth/otp/OtpInputs';
import Option from '../../components/common/auth/otp/Option';
import Button from '../../components/common/auth/otp/Button';
import { useSelector } from 'react-redux';
import useOtp from '../../hooks/useOtp';



const OtpScreen = () => {
  const { loading, handleVerify } = useOtp()
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  const {
    user,
    otp: storeOtp,
  } = useSelector(state => state?.auth);

  console.log(user);

  console.log('storeOtp', storeOtp);

  const handleVerifyOtp = async () => {
    if (!otp) {
      return Alert.alert("please enter otp")
    }
    await handleVerify({ otp })
  }


  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../../assets/images/bg.png")} />
      </View>
      <View
        style={styles.formContainer}
      >
        <ScrollView>
          <Heading />
          <SecondaryHeading />
          <OtpInputs setOtp={setOtp} />
          <Option />
          <Button
            loading={loading}
            handlePress={handleVerifyOtp}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default OtpScreen;

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
    height: 200,
    width: 200,
    resizeMode: "contain"
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#202020",
    // height: height * (628 / height),
    width: "100%",
    marginTop: "70%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 10,
  },


});
