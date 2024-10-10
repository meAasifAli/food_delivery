import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Evil from 'react-native-vector-icons/EvilIcons'


const SearchInput = () => {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputWrapper}>
                <TextInput
                    placeholderTextColor={"#FA4A0C"}
                    style={{
                        paddingLeft: 10
                    }}
                    placeholder='Search for ‘Biryani’'
                />
                <View style={styles.iconWrapper}>
                    <Evil name='search' size={24} color={"#FA4A0C"} />
                </View>

            </KeyboardAvoidingView>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 299,
        height: 41,
        backgroundColor: "#fff",
        position: "relative",
        borderRadius: 10,
        marginTop: 30,
        marginHorizontal: "auto"
    },
    iconWrapper: {
        position: "absolute",
        right: 10,
        top: 10
    }
})