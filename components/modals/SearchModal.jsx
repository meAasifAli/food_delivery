
import { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Modal from 'react-native-modal'
import IonIcons from 'react-native-vector-icons/Ionicons'

const SearchModal = ({ isOpen, setIsOpen }) => {
    const [searchVal, setSearchVal] = useState("")
    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(false)}
            style={{
                margin: 0,
                justifyContent: "flex-start",
                flex: 1,
                backgroundColor: "#fff",
                borderBottomStartRadius: 25,
                borderBottomEndRadius: 25,
                width: "100%",
                marginHorizontal: "auto",
                position: "absolute",
                top: 0
            }}
            animationIn={"slideInDown"}
            animationInTiming={300}
            animationOut={"slideOutUp"}
            animationOutTiming={300}
        >
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ padding: 10 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity onPress={() => setIsOpen(false)}>
                                <IonIcons name='arrow-back' size={20} color={"#000"} />
                            </TouchableOpacity>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000" }}>Search for Dishes and Restaurants</Text>
                            </View>
                        </View>
                        <TextInput style={{ paddingLeft: 10, marginTop: 10, height: 50, width: "100%", borderColor: "#ccc", borderWidth: 1, borderRadius: 10, fontFamily: "OpenSans-Regular", color: "#000", fontSize: 16 }} placeholder={"Try Cake"} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default SearchModal

const styles = StyleSheet.create({})