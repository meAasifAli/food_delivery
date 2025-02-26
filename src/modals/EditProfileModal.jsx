import axios from 'axios'
import { useState } from 'react'
import { Alert, ToastAndroid } from 'react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { OtpInput } from 'react-native-otp-entry'
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';
import { BASE_URI } from '../config/uri'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../store/authSlice'

const EditProfileModal = ({ isOpen, setIsOpen, phone }) => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state?.auth)
    const [otp, setOtp] = useState("")


    //



    const updateProfile = async () => {

        try {
            const res = await axios.patch(`${BASE_URI}/api/user/editProfile/phone`, {
                phone_no: phone,
                givenOTP: otp
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })


            if (res?.data) {
                ToastAndroid.show("Profile Updated Successfully", ToastAndroid.LONG)
                dispatch(setToken(res?.data?.token))
                setIsOpen(pre => !pre)
            }

        } catch (error) {
            console.log(error?.response?.data?.message);
            Alert.alert(error?.response?.data?.message)

        }
    }
    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(pre => !pre)}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }} // Center modal on screen
            animationIn="bounceInUp"
            animationInTiming={1000}
            animationOut={"bounceOutDown"}
            animationOutTiming={1000}
        >
            <View style={{
                backgroundColor: "#fff",
                borderRadius: wp(3),
                height: 250,
                padding: "5%",
                width: "90%",
                marginHorizontal: "auto"

            }}>

                <Text style={{ fontSize: 16, fontFamily: "OpenSans-Regular", textAlign: "center", color: "#000", lineHeight: 25, marginBottom: 10 }}>Please Enter your 4 digit otp sent to your mobile number +91xxxxxxxx64</Text>
                <OtpInput
                    focusColor={'#FA4A0C'}
                    theme={{
                        pinCodeContainerStyle: {
                            padding: 10
                        },
                        pinCodeTextStyle: {
                            color: "black",
                            fontFamily: "OpenSans-Bold",
                            fontSize: 16
                        },
                    }}
                    numberOfDigits={4}
                    onTextChange={text => setOtp(text)}
                />
                <TouchableOpacity onPress={updateProfile} style={{ marginTop: 20, borderRadius: 10, height: 50, backgroundColor: "#FA4A0C", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>Update</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default EditProfileModal

const styles = StyleSheet.create({})