import { Dimensions, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Evil from 'react-native-vector-icons/EvilIcons'

const { height, width } = Dimensions.get("window")

const SearchMenu = () => {
    return (

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <TextInput
                        placeholderTextColor={"#FA4A0C"}
                        style={{
                            paddingLeft: 10
                        }}
                        placeholder='Search Menu'
                    />
                    <View style={styles.iconWrapper}>
                        <Evil name='search' size={24} color={"#FA4A0C"} />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>

    )
}

export default SearchMenu

const styles = StyleSheet.create({
    container: {
        width: width * 0.70,
        height: height * 0.06,
        backgroundColor: "#fff",
        position: "relative",
        borderRadius: 10,
        marginHorizontal: "auto",
        borderColor: "#D6D6D6",
        borderWidth: 1,

    },
    iconWrapper: {
        position: "absolute",
        right: 10,
        top: 10
    }
})
