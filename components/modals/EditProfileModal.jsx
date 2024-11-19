import axios from 'axios'
import { useState } from 'react'
import { Alert } from 'react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { OtpInput } from 'react-native-otp-entry'
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';
import { BASE_URI } from '../../config/uri'
import { useSelector } from 'react-redux'

const EditProfileModal = ({ isOpen, setIsOpen, formData }) => {
    const [otp, setOtp] = useState("")
    const { token } = useSelector(state => state?.auth)
    const updateProfile = async () => {
        try {
            const res = await axios.patch(`${BASE_URI}/api/user/editProfile/${formData?.name}/${formData.email}/${formData?.phone}`, {
                givenOTP: otp
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                Alert.alert("Profile Updated Successfully")
                setIsOpen(false)
            }
        } catch (error) {
            console.log(error);
            Alert.alert(error)

        }
    }
    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(false)}
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
                        pinCodeContainerStyle: styles.otpPinCodeContainer,
                        pinCodeTextStyle: styles.pinCodeText,
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