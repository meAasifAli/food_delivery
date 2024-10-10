import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Restaurant = ({ route }) => {

    const { restaurantId } = route.params;

    console.log(restaurantId);

    return (
        <View>
            <Text>Restaurant</Text>
        </View>
    )
}

export default Restaurant

const styles = StyleSheet.create({})