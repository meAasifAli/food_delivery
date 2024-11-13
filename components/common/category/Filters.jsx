import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typography from '../../Typography'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import IonIcons from 'react-native-vector-icons/Ionicons'

const Filters = () => {
    return (
        <View style={styles.filterWrapper}>
            <TouchableOpacity style={styles.filterBtn}>
                <Typography
                    ff={"OpenSans-Regular"}
                    title={"filter"}
                    color={"#202020"}
                />
                <IonIcons name='filter' color={"#202020"} ff={'OpenSans-Regular'} size={12} lh={16} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.filterBtn}
            >
                <Typography title={"sort"} color={"#202020"} ff={'OpenSans-Regular'} size={12} lh={16} />
                <FA5 name='sort' color={"#202020"} />
            </TouchableOpacity>
        </View>
    )
}

export default Filters

const styles = StyleSheet.create({
    filterWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: "#D6D6D6",
        borderBottomWidth: 1
    },
    filterBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 5,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        borderRadius: 15

    },
})