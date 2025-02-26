import { Pressable, Text, View } from 'react-native'
import Typography from '../../Typography'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOffers } from '../../../store/cartSlice';


const Offers = ({ offerCode, setOfferCode }) => {

    const dispatch = useDispatch()
    const { offers } = useSelector((state) => state?.cart)

    // console.log(offers);

    useEffect(() => {
        dispatch(fetchOffers())
    }, [dispatch])

    const handleAvailOffer = (code) => {
        setOfferCode(code)

    }


    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ marginLeft: "2%" }}>
                <Typography title={"Offers for you"} ff={"OpenSans-Medium"} lh={32} size={18} fw={400} color={"#000"} />
            </View>
            {
                offers?.length > 0 && offers?.map((offer, id) => {

                    return id === 0 && (
                        <View key={id} style={{ marginTop: 10 }}>
                            <View style={{ width: "95%", marginHorizontal: "auto", borderTopEndRadius: 10, borderTopStartRadius: 10, borderStyle: "dashed", borderColor: "#D6D6D6", borderWidth: 1, padding: hp(2) }}>
                                <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 16, color: "#000" }}>{offer?.code}</Text>
                                <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 12, color: "#000" }}>{offer?.description}</Text>
                            </View>
                            {
                                offerCode === offer?.code ? <Pressable style={{ width: "95%", paddingVertical: 5, marginHorizontal: "auto", backgroundColor: "#000", borderBottomEndRadius: 10, borderBottomStartRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                                    <Typography title={"Congrats! you saved ₹100"} ff={"OpenSans-Medium"} lh={32} size={16} color={"#fff"} fw={300} />
                                </Pressable> : <Pressable onPress={() => handleAvailOffer(offer?.code)} style={{ width: "95%", paddingVertical: 5, marginHorizontal: "auto", backgroundColor: "#FA4A0C", borderBottomEndRadius: 10, borderBottomStartRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                                    <Typography title={"Apply"} ff={"OpenSans-Medium"} lh={32} size={16} color={"#fff"} fw={300} />
                                </Pressable>
                            }

                        </View>
                    )
                })
            }

        </View>

    )
}

export default Offers

