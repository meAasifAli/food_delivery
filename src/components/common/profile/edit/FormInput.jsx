import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Typography from '../../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ActionButtons from './ActionButtons';
import axios from 'axios';
import { BASE_URI } from '../../../../config/uri';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import EditProfileModal from '../../../modals/EditProfileModal';
import { useNavigation } from '@react-navigation/native';
import { getUser } from '../../../../store/authSlice';



const FormInput = ({ label, placeholder, btnText, inputName, formData, setFormData, isPhone, isName, isEmail }) => {
    const dispatch = useDispatch()
    const { token, file, setToken } = useSelector((state) => state.auth)
    const [isEditable, setIsEditable] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const navigation = useNavigation()


    const editProfile = async () => {

        try {
            if (isPhone) {
                const res = await axios.post(`${BASE_URI}/api/user/userEditProfileOTP`, {
                    phone_no: formData?.phone,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                console.log(res?.data);

                if (res?.data) {
                    setIsOpen(pre => !pre)
                }
            }

            else if (isName) {
                const res = await axios.patch(`${BASE_URI}/api/user/editProfile/name`, {
                    name: formData?.name
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (res?.data) {
                    Alert.alert("Name Updated Successfully")
                    dispatch(getUser({ token }))
                    navigation.goBack()
                }
            }
            else if (isEmail) {
                const res = await axios.patch(`${BASE_URI}/api/user/editProfile/email`, {
                    name: formData?.email
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (res?.data) {
                    Alert.alert("Email Updated Successfully")
                    dispatch(getUser({ token }))
                    navigation.goBack()
                }
            }
            else {
                const data = new FormData()
                data.append("profile", data.append("profile", {
                    uri: file?.uri,
                    type: file.type,
                    name: file.name
                }))
                const res = await fetch(`${BASE_URI}/api/user/editProfile/profile`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    },
                    body: data
                })

                if (res?.ok) {
                    Alert.alert("Profile Updated Successfully")
                    dispatch(getUser({ token }))
                    navigation.goBack()
                }
            }


        } catch (error) {
            Alert.alert(error?.message)
            console.log(error?.response?.data?.message);
        }

    }



    const handleUpdate = () => {
        setIsEditable(pre => !pre)
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ width: wp(90), marginHorizontal: "auto", marginVertical: hp(2) }}>
                    <View>
                        <Typography title={label} color={"#202020"} fw={300} ff={"OpenSans-Regular"} size={hp(2)} lh={hp(2.5)} />
                    </View>
                    <View style={{ position: "relative" }}>
                        <TextInput
                            editable={isEditable}
                            value={formData[inputName]} // Access the value dynamically
                            onChangeText={(text) => setFormData({ ...formData, [inputName]: text })} // Update the correct field dynamically
                            placeholderTextColor={"#000000"} placeholder={placeholder} style={{ borderBottomWidth: wp(0.5), borderTopWidth: 0, borderLeftWidth: 0, borderWidth: 0, color: "#000000", fontFamily: "OpenSans-Regular", fontSize: wp(5) }} />
                        {!isEditable && <TouchableOpacity onPress={handleUpdate} style={{ position: "absolute", right: 0, top: hp(2.5) }}>
                            <Text style={{ color: "#FA4A0C", fontWeight: "400", fontSize: hp(2) }}>{btnText}</Text>
                        </TouchableOpacity>}
                    </View>
                    {isEditable && <ActionButtons setIsEditable={setIsEditable} onPress={editProfile} />}
                    <EditProfileModal isOpen={isOpen} setIsOpen={setIsOpen} phone={formData?.phone} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default FormInput

const styles = StyleSheet.create({})