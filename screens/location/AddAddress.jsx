import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useEffect, useState } from 'react';
import Header from '../../components/common/address/addAddress/Header';
import CenterBox from '../../components/common/address/addAddress/CenterBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSavedAddresses } from '../../store/addressSlice';
import SavedAddress from '../../components/common/address/addAddress/SavedAddress';





const AddAddress = () => {
    const dispatch = useDispatch()
    const [searchVal, setSearchVal] = useState("")
    const { token } = useSelector((state) => state.auth)
    const { savedUserAddresses } = useSelector((state) => state.address)

    useEffect(() => {
        dispatch(fetchSavedAddresses({ token }))
    }, [])

    // console.log(savedUserAddresses);

    // console.log("searchVal: ", searchVal);

    // useEffect(() => {
    //     const fetchAdressByString = async () => {
    //         try {
    //             const res = await axios.get(`https://api.locationiq.com/v1/autocomplete?key=pk.8f2a73d9ff72a2b8a7fc9626d06d6e12&q=${searchVal}`)
    //             console.log(res.data)

    //         } catch (error) {
    //             Alert.alert("Error: ", error?.message)
    //         }
    //     }
    //     fetchAdressByString()

    // }, [searchVal])
    return (
        <View style={styles.container}>
            <Header searchVal={searchVal} setSearchVal={setSearchVal} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <CenterBox />
                <View style={{ paddingVertical: hp(4), display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2), width: wp(80), marginHorizontal: "auto" }}>
                    <View style={{ borderTopColor: "#D6D6D6", borderTopWidth: hp(0.15), flex: 1 }}></View>
                    <Text style={{ fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(3), fontSize: hp(2.5), letterSpacing: wp(0.2) }}>Saved Addresses</Text>
                    <View style={{ borderTopColor: "#D6D6D6", borderTopWidth: hp(0.15), flex: 1 }}></View>
                </View>
                <View style={{ width: wp(80), marginHorizontal: "auto", elevation: 1, backgroundColor: "#fff", borderRadius: wp(3), marginTop: hp(2), padding: wp(5) }}>
                    {
                        savedUserAddresses.map((item, id) => (
                            <SavedAddress item={item} key={id} />
                        ))
                    }
                </View>
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






