import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Typography from '../../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ActionButtons from './ActionButtons';
import axios from 'axios';
import { BASE_URI } from '../../../../config/uri';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import EditProfileModal from '../../../modals/EditProfileModal';

const FormInput = ({ label, placeholder, btnText, inputName, formData, setFormData }) => {
    const { token } = useSelector((state) => state.auth)
    const [isEditable, setIsEditable] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const editProfile = async () => {
        try {
            const res = await axios.post(`${BASE_URI}/api/user/userEditProfileOTP`, {
                phone_no: formData?.phone,
                email: formData?.email,
                name: formData?.name
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                setIsOpen(true)
                console.log(res?.data);
            }

        } catch (error) {
            Alert.alert(error?.message)
            console.log(error);
        }

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
                        {!isEditable && <TouchableOpacity onPress={() => setIsEditable(prev => !prev)} style={{ position: "absolute", right: 0, top: hp(2.5) }}>
                            <Text style={{ color: "#FA4A0C", fontWeight: "400", fontSize: hp(2) }}>{btnText}</Text>
                        </TouchableOpacity>}
                    </View>
                    {isEditable && <ActionButtons setIsEditable={setIsEditable} onPress={editProfile} />}
                    <EditProfileModal isOpen={isOpen} setIsOpen={setIsOpen} formData={formData} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default FormInput

const styles = StyleSheet.create({})