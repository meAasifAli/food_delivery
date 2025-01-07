import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Typography from '../../../../Typography'
import useAddCard from '../../../../../hooks/useAddCard'

const Form = () => {
    const { loading, handleAddCard } = useAddCard()
    const [cardInputs, setCardInputs] = useState({
        cardNumber: "",
        cardExpiry: "",
        cardCVV: "",
        cardName: "",
        cardNickName: ""
    })
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    const formatCardNumber = (text) => {
        // Remove any non-numeric characters
        const sanitizedText = text.replace(/\D/g, '');
        // Limit to 16 digits
        const limitedText = sanitizedText.slice(0, 16);
        // Add spaces after every 4 digits
        const formattedText = limitedText.replace(/(\d{4})(?=\d)/g, '$1 ');
        return formattedText;
    };


    const handleCardExpiryChange = (text) => {
        // Remove non-digit characters
        let formattedText = text.replace(/\D/g, '');
        if (formattedText?.length > 5) return

        formattedText = formattedText.replace(/(\d{2})(?=\d)/g, '$1/');
        setCardInputs({ ...cardInputs, cardExpiry: formattedText })


    }

    const handleChange = (text) => {
        const formattedText = formatCardNumber(text);
        setCardInputs({ ...cardInputs, cardNumber: formattedText });
    };
    const handleAdd = async () => {
        if (toggleCheckBox) {
            await handleAddCard({
                card_no: cardInputs.cardNumber?.trim(),
                valid: cardInputs.cardExpiry,
                cvv: cardInputs.cardCVV,
                name_on_card: cardInputs.cardName,
                name_on_card: cardInputs.cardNickName
            })
        }
        else {
            return Alert.alert("Please accept terms and conditions")
        }
    }
    return (
        <View style={{ display: "flex", flexDirection: "column", gap: hp(3), marginTop: hp(5) }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput
                    value={cardInputs.cardNumber}
                    onChangeText={handleChange}
                    placeholderTextColor={"#202020B2"}
                    keyboardType='number-pad'
                    placeholder='Enter Card Number'
                    style={{ padding: wp(4), borderRadius: 8, fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5) }} />
            </KeyboardAvoidingView>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 0.65 }}>
                    <TextInput
                        value={cardInputs.cardExpiry}
                        onChangeText={handleCardExpiryChange}
                        placeholderTextColor={"#202020B2"}
                        keyboardType='number-pad'
                        placeholder='Valid (MM/YYYY)'
                        style={{ padding: wp(4), borderRadius: 8, fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5), }} />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 0.35 }}>
                    <TextInput value={cardInputs.cardCVV} onChangeText={(text) => setCardInputs({ ...cardInputs, cardCVV: text })} placeholderTextColor={"#202020B2"} keyboardType='number-pad' placeholder='CVV' style={{ padding: wp(4), borderRadius: 8, fontFamily: "OpenSans-Regular", fontSize: 16, color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5), }} />
                </KeyboardAvoidingView>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput value={cardInputs.cardName} onChangeText={(text) => setCardInputs({ ...cardInputs, cardName: text })} placeholderTextColor={"#202020B2"} keyboardType='default' placeholder='Name on Card' style={{ padding: wp(4), borderRadius: 8, fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5) }} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput value={cardInputs.cardNickName} onChangeText={(text) => setCardInputs({ ...cardInputs, cardNickName: text })} placeholderTextColor={"#202020B2"} keyboardType='default' placeholder='Nickname(For Easy Identification)' style={{ padding: wp(4), borderRadius: 8, fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5) }} />
            </KeyboardAvoidingView>

            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    tintColors={{ true: "#FA4A0C", false: "" }}
                />
                <Typography title={"Securely save this card for future use"} color={"#000"} fw={300} size={14} lh={19} ff={"OpenSans-Regular"} />
            </View>
            <TouchableOpacity
                onPress={handleAdd}
                style={{
                    backgroundColor: '#FA4A0C',
                    padding: 15,
                    borderRadius: 15,
                    width: "100%",
                    alignItems: 'center',
                    marginHorizontal: 'auto',
                    marginTop: 10
                }}>

                {
                    loading ? <ActivityIndicator size="small" color="#fff" /> : <Text
                        style={{
                            color: '#fff',
                            fontSize: 20,
                            lineHeight: 35,
                            fontWeight: '500',
                            fontFamily: 'OpenSans-Medium',
                        }}>
                        Add Card
                    </Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({})