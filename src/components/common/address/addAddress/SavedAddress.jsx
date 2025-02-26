import { useContext, useEffect, useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Entypo from 'react-native-vector-icons/Entypo'
import FA from 'react-native-vector-icons/FontAwesome'
import RadioButton from 'react-native-radio-button'
import axios from 'axios'
import { BASE_URI } from '../../../../config/uri'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSavedAddresses } from '../../../../store/addressSlice'


const SavedAddress = ({ item }) => {

    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const [isSelected, setIsSelected] = useState(item?.selected === 1)
    // console.log(item);

    useEffect(() => {
        setIsSelected(item?.selected === 1);
    }, [item?.selected]);

    const handleChangeAddress = async () => {
        try {
            const response = await axios.patch(`${BASE_URI}/api/user/selectAddress/${item?.id}`, {
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (response?.data) {
                setIsSelected(!isSelected)
                dispatch(fetchSavedAddresses({ token }))
                Alert.alert("Address Updated Successfully")
            }
        } catch (error) {
            console.error("error in updating address: ", error?.response?.data?.message)
        }
    }

    return (
        <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: wp(0.1), borderRadius: wp(3), borderColor: "#202020", padding: wp(3), marginVertical: 10 }}>
            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                <View>
                    {item?.type?.includes("home") ? <Entypo name='home' size={hp(2.5)} color={"#FA4A0C"} /> : <FA name='building' size={hp(2.5)} color={"#FA4A0C"} />}
                </View>
                <View>
                    <Text style={{ fontFamily: "OpenSans-Medium", color: "#000000", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2), textTransform: "capitalize" }}>{item?.type}</Text>
                    <Text numberOfLines={1} style={{ overflow: "hidden", fontFamily: "OpenSans-Regular", color: "#000000", lineHeight: hp(2), fontSize: hp(1.8), letterSpacing: wp(0.2), textTransform: "capitalize" }}>{`${item?.area} `}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                <RadioButton
                    size={wp(2.5)}
                    color={"#FA4A0C"}
                    isSelected={item?.selected === 1}
                    onPress={handleChangeAddress}
                    innerColor={item?.selected === 1 ? "#FA4A0C" : "#000"}
                    outerColor={"#FA4A0C"}

                />
                <Text style={{ fontFamily: "OpenSans-Medium", fontSize: 16, color: "#FA4A0C" }}>{item?.selected === 1 ? "Selected" : "select"}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default SavedAddress

