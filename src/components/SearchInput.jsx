import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Evil from 'react-native-vector-icons/EvilIcons'


const SearchInput = ({ placeholder, val, onValueChange, handleFocus, isAddress, onPress }) => {

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
                <TextInput
                    onFocus={handleFocus}
                    value={val}
                    onChangeText={onValueChange}
                    placeholderTextColor={isAddress ? "#FA4A0C" : "#000"}
                    style={{
                        paddingLeft: 10,
                        fontSize: 16,
                        fontFamily: "OpenSans-Regular",
                        color: "#000"
                    }}
                    placeholder={placeholder}
                />
                <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
                    <Evil name='search' size={24} color={isAddress ? "#FA4A0C" : "#000"} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: "#F8F8F8",
        position: "relative",
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: "auto",

    },
    iconWrapper: {
        position: "absolute",
        right: 10,
        top: 15,

    }
})