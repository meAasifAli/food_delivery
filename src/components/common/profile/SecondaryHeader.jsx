import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typography from '../../Typography'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const SecondaryHeader = ({ user }) => {
    const navigation = useNavigation()
    return (
        <View style={{
            marginTop: hp(2), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"
        }}>
            <View>
                <Typography title={user?.username} ff={"OpenSans-Medium"} color={"#000"} fw={400} size={hp(3)} lh={hp(3.5)} />
                <Typography title={`+91${user?.phone_no}`} ff={"OpenSans-Regular"} color={"#202020B2"} fw={400} size={hp(2)} lh={hp(3)} />
                <Typography title={user?.email} ff={"OpenSans-Regular"} color={"#202020B2"} fw={400} size={hp(2)} lh={hp(2.5)} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                <Typography title={"Edit Profile"} ff={"OpenSans-Regular"} color={"#FA4A0C"} fw={400} size={hp(2.5)} lh={hp(3.5)} />
            </TouchableOpacity>
        </View>
    )
}

export default SecondaryHeader

const styles = StyleSheet.create({})