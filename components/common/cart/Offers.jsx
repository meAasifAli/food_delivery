import { Pressable, StyleSheet, Text, View } from 'react-native'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useEffect } from 'react';
import useGetOffers from '../../../hooks/useGetOffers';

const Offers = () => {
    const { handleFetchOffers, loading, offers } = useGetOffers()
    useEffect(() => {
        handleFetchOffers()
    }, [])

    // console.log(offers);

    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ marginLeft: "2%" }}>
                <Typography title={"Offers for you"} ff={"OpenSans_Regular"} lh={32} size={24} fw={400} color={"#000"} />
            </View>
            {
                offers?.length > 0 && offers?.map((offer, id) => {
                    return (
                        <View key={id}>
                            <View style={{ width: "95%", height: hp(15), marginHorizontal: "auto", borderTopEndRadius: 10, borderTopStartRadius: 10, borderStyle: "dashed", borderColor: "#D6D6D6", marginTop: 30, borderWidth: 1, padding: hp(4) }}>
                                <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 16, color: "#000" }}>{offer?.code}</Text>
                                <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 12, color: "#000" }}>{offer?.description}</Text>
                            </View>
                        </View>
                    )
                })
            }
            <Pressable style={{ width: "95%", height: hp(7), marginHorizontal: "auto", backgroundColor: "#FA4A0C", borderBottomEndRadius: 10, borderBottomStartRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <Typography title={"Apply"} ff={"OpenSans_Regular"} lh={32} size={20} color={"#fff"} fw={300} />
            </Pressable>
        </View>

    )
}

export default Offers

const styles = StyleSheet.create({})