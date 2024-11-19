import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import Header from '../../components/common/address/addAddress/Header';
import CenterBox from '../../components/common/address/addAddress/CenterBox';
import SavedAddresses from '../../components/common/address/addAddress/SavedAddresses';
import SearchItems from '../../components/common/address/addAddress/SearchItems';




const AddAddress = () => {
    const [searchVal, setSearchVal] = useState("")
    return (
        <View style={styles.container}>
            <Header searchVal={searchVal} setSearchVal={setSearchVal} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    searchVal === "" ? <>
                        <CenterBox />
                        <View style={{ paddingVertical: hp(4), display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2), width: wp(80), marginHorizontal: "auto" }}>
                            <View style={{ borderTopColor: "#D6D6D6", borderTopWidth: hp(0.15), flex: 1 }}></View>
                            <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(3), fontSize: hp(2.5), letterSpacing: wp(0.2) }}>Saved Addresses</Text>
                            <View style={{ borderTopColor: "#D6D6D6", borderTopWidth: hp(0.15), flex: 1 }}></View>
                        </View>
                        <SavedAddresses />
                    </> : <SearchItems />
                }
            </ScrollView>
        </View>
    )
}

export default AddAddress

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})






