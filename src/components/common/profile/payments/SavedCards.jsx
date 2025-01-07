import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../../../Typography'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import useFetchCards from '../../../../hooks/useFetchCards';
import { useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SavedCards = () => {
    const navigation = useNavigation()
    const { handleGetCards, loading, cards } = useFetchCards()

    useEffect(() => {
        handleGetCards()
    }, [])



    return (
        <View style={{ padding: wp(5) }}>
            <View>
                <Typography ff={"OpenSans-Medium"} title={"Saved Cards"} color={"#202020"} fw={400} size={16} />
            </View>
            <ScrollView>
                {
                    cards && cards.map((item, id) => {

                        console.log(item);

                        return (
                            <View key={id} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10, elevation: 3, borderRadius: 10, backgroundColor: "#fff", padding: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 16, fontFamily: "OpenSans-Bold", color: "#000" }}>{item?.name_on_card}</Text>
                                    <Text style={{ fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", marginTop: 5 }}>{item?.card_no}</Text>
                                </View>
                                <View>
                                    <FontAwesome name='cc-visa' size={25} color={"blue"} />
                                </View>
                            </View>
                        )

                    })
                }
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate("AddCard")} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(7), marginTop: hp(4), paddingBottom: hp(1.5), borderBottomColor: "#D6D6D6", borderBottomWidth: wp(0.15) }}>
                <View style={{ borderColor: "#FA4A0C", borderWidth: wp(0.2), padding: wp(2), borderRadius: wp(2) }}>
                    <AntDesign name='plus' color={"#FA4A0C"} size={hp(3)} />
                </View>
                <View>
                    <Typography ff={"OpenSans-Regular"} title={"ADD NEW CARD"} color={"#FA4A0C"} fw={400} size={wp(5)} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SavedCards

const styles = StyleSheet.create({})