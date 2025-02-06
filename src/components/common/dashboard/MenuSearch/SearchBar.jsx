import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = ({ restaurantName, searchQuery, setSearchQuery }) => {
    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ position: "relative", }}>
                    <TouchableOpacity onPress={() => navigation.goBack(1)} style={{ position: "absolute", zIndex: 1, top: 10, left: 5 }}>
                        <Entypo name='chevron-left' color={"#fff"} size={25} />
                    </TouchableOpacity>
                    <TextInput value={searchQuery} onChangeText={(text) => setSearchQuery(text)} style={{ backgroundColor: "#000", color: "#FA4A0C", paddingLeft: 35, borderRadius: 10, fontFamily: "OpenSans-Regular", fontSize: 16 }} placeholderTextColor={"#FA4A0C"} placeholder={`Search in ${restaurantName}`} />
                    <TouchableOpacity style={{ position: "absolute", zIndex: 1, top: 15, right: 10 }}>
                        <AntDesign name='search1' size={20} color={"#fff"} />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default SearchBar

const styles = StyleSheet.create({})