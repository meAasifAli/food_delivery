import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Typography from '../../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FormInput = ({ label, placeholder, btnText, inputName, formData, setFormData }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ width: wp(90), marginHorizontal: "auto", marginVertical: hp(2) }}>
                    <View>
                        <Typography title={label} color={"#202020"} fw={300} ff={"OpenSans-Regular"} size={hp(2)} lh={hp(2.5)} />
                    </View>
                    <View style={{ position: "relative" }}>
                        <TextInput
                            value={formData[inputName]} // Access the value dynamically
                            onChangeText={(text) => setFormData({ ...formData, [inputName]: text })} // Update the correct field dynamically
                            placeholderTextColor={"#000000"} placeholder={placeholder} style={{ borderBottomWidth: wp(0.5), borderTopWidth: 0, borderLeftWidth: 0, borderWidth: 0, color: "#000000", fontFamily: "OpenSans-Regular", fontSize: wp(5) }} />
                        <TouchableOpacity style={{ position: "absolute", right: 0, top: hp(2.5) }}>
                            <Text style={{ color: "#FA4A0C", fontWeight: "400", fontSize: hp(2) }}>{btnText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default FormInput

const styles = StyleSheet.create({})