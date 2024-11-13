import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Typography from '../../Typography';
import { OtpInput } from 'react-native-otp-entry';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { setAuthenticated, setToken, setUser } from '../../../store/authSlice';
import { BASE_URI } from '../../../config/uri';

const OtpForm = ({ isDelivery, navigation }) => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    user,
    verificationWindow,
    phone,
    otp: storeOtp,
  } = useSelector(state => state?.auth);

  console.log(user);

  console.log('storeOtp', storeOtp);

  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      if (verificationWindow === 'signup') {
        const res = await axios.post(
          `${BASE_URI}/api/user/userSignUp/${user?.data.phone_no}/${user?.data.username}/${user?.data.email}`,
          {
            givenOTP: otp,
          },
        );
        if (res?.data) {
          dispatch(setAuthenticated());
          dispatch(setToken(res?.data?.token));
        }
      }
      if (verificationWindow === 'signin') {
        const res = await axios.post(
          `${BASE_URI}/api/user/userLogin/${phone}`,
          {
            givenOTP: otp,
          },
        );
        if (res?.data) {
          dispatch(setAuthenticated());
          dispatch(setUser(res?.data?.userData));
          dispatch(setToken(res?.data?.token));
          //Todo : store coming token in a state
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <Heading />
      <SecondaryHeading />
      <OtpInputs setOtp={setOtp} />
      <Option />
      <ButtonComponent
        loading={loading}
        handlePress={handleVerifyOtp}
        isDelivery={isDelivery}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default OtpForm;

const styles = StyleSheet.create({
  otpWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  otpPinCodeContainer: {
    backgroundColor: '#fff',
    height: 70,
    width: 70,
  },
  pinCodeText: {
    color: '#FA4A0C',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 45.12,
    letterSpacing: 0.05,
  },
  optionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingLeft: wp(7),
    paddingVertical: hp(2),
    marginBottom: hp(1),
  },
});

const Heading = () => {
  return (
    <Typography
      title={'Verify OTP'}
      color="#fff"
      ff="OpenSans-Bold"
      fw={600}
      size={wp(10)}
      lh={hp(8)}
      ls={wp(0.05)}
      ta={'center'}
      mv={hp(0.5)}
    />
  );
};

const SecondaryHeading = () => {
  return (
    <View
      style={{
        marginVertical: hp(2),
      }}>
      <Typography
        title={'OTP! sent!'}
        color="#fff"
        ff="OpenSans-Regular"
        fw={300}
        size={wp(5)}
        lh={hp(4)}
        ls={wp(0.05)}
        ta={'center'}
        maxW={wp(60)}
        mh={'auto'}
      />
      <Typography
        title={'Secure your taste journey, one code at a time!'}
        color="#fff"
        ff="OpenSans-Regular"
        fw={300}
        size={wp(5)}
        lh={hp(4)}
        ls={wp(0.05)}
        ta={'center'}
        maxW={wp(65)}
        mh={'auto'}
      />
    </View>
  );
};

const OtpInputs = ({ setOtp }) => {
  return (
    <View style={styles.otpWrapper}>
      <OtpInput
        focusColor={'#fff'}
        theme={{
          pinCodeContainerStyle: styles.otpPinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
        }}
        numberOfDigits={4}
        onTextChange={text => setOtp(text)}
      />
    </View>
  );
};

const Option = () => {
  return (
    <View style={styles.optionWrapper}>
      <Typography
        title={'Didn’t get the code? Resend in:'}
        color="#fff"
        ff="OpenSans-Regular"
        fw={300}
        size={16}
        lh={21}
        ls={0.05}
      />
      <Typography
        title={'0.59'}
        color="#FA4A0C"
        ff="OpenSans-Regular"
        fw={300}
        size={16}
        lh={21}
        ls={0.05}
      />
    </View>
  );
};

const ButtonComponent = ({ handlePress, loading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: '#FA4A0C',
        padding: wp(4),
        borderRadius: wp(3),
        width: wp(80),
        alignItems: 'center',
        marginHorizontal: 'auto',
      }}>
      {loading ? (
        <ActivityIndicator color={'#fff'} size={'small'} />
      ) : (
        <Text
          style={{
            color: '#fff',
            fontSize: wp(5),
            fontWeight: '500',
            fontFamily: 'OpenSans-Medium',
          }}>
          Continue
        </Text>
      )}
    </TouchableOpacity>
  );
};
