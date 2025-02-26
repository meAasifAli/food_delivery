import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Fa5 from 'react-native-vector-icons/FontAwesome5'
import Input from '../components/common/address/Input'
import Entypo from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux'
import { useContext, useEffect, useState } from 'react'
import { LocationContext } from '../context/LocationContext'
import { fetchSavedAddresses } from '../store/addressSlice'
import useEditAddress from '../hooks/useEditAddress'
const { height, width } = Dimensions.get('window')

const EditAddress = ({ openModal, setOpenModal, item }) => {
    const dispatch = useDispatch()
    const { location } = useContext(LocationContext)
    const { state, fullAddress, city } = useSelector((state) => state.address)
    const { token } = useSelector((state) => state.auth)
    const { handleEditAddress } = useEditAddress(item?.id)
    const [inputs, setInputs] = useState({
        houseNo: "",
        city: "",
        state: "",
        area: "",
        name: "",
        number: "",
        type: "home"
    })

    useEffect(() => {
        if (item) {
            setInputs({
                houseNo: item.house_no,
                city: item.city,
                state: item.state,
                area: item.area,
                name: item.R_name,
                number: item.R_phone_no,
                type: item.type
            })
        }
    }, [item])






    const onUpdateAddress = async () => {
        await handleEditAddress({
            state: inputs?.state,
            city: inputs.city,
            area: inputs.area,
            house_no: inputs.houseNo,
            R_name: inputs.name,
            R_phone_no: inputs.number,
            type: inputs.type,
            lat: location?.latitude,
            lon: location?.longitude,
            addressId: item?.id
        })
        setOpenModal((prev) => !prev)
        dispatch(fetchSavedAddresses({ token }))
    }
    return (
        <Modal
            avoidKeyboard={true}
            backdropColor='transparent'
            backdropOpacity={0.50}
            animationIn={"slideInUp"}
            animationInTiming={1000}
            animationOut={"slideOutDown"}
            animationOutTiming={1000}
            isVisible={openModal}
            onBackdropPress={() => setOpenModal(false)}
            style={{ justifyContent: 'flex-end', margin: 0 }}
        >
            <View
                style={{ width: "100%", backgroundColor: "#202020", borderTopLeftRadius: wp(3), borderTopRightRadius: wp(3), height: height * (550 / height) }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 30 }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(10) }}>
                        <View>
                            <Fa5 name='location-arrow' color={"#FA4A0C"} size={hp(3)} />
                        </View>
                        <View>
                            <Text style={{ fontFamily: "OpenSans-Bold", color: "#fff", lineHeight: hp(2.5), fontSize: hp(1.7), letterSpacing: wp(0.2) }}>{fullAddress?.slice(0, 19)}</Text>
                            <Text style={{ fontFamily: "OpenSans-Regular", color: "#fff", lineHeight: hp(2.8), fontSize: hp(1.5), letterSpacing: wp(0.2) }}>{state}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: hp(2), display: "flex", justifyContent: "center", alignItems: "center", maxWidth: wp(75), marginHorizontal: "auto" }}>
                        <Text style={{ fontFamily: "OpenSans-Italic", textAlign: "center", color: "#fff", lineHeight: hp(2.5), fontSize: hp(2), letterSpacing: wp(0.2) }}>Please Provide Your Full Address for Fast and Accurate Delivery!</Text>
                    </View>
                    <View style={{ marginTop: hp(2) }}>
                        <Input value={inputs.area} onValueChange={(text) => setInputs({ ...inputs, area: text })} placeholder={"Area / Sector / Locality"} />
                        <Input value={inputs.city} onValueChange={(text) => setInputs({ ...inputs, city: text })} placeholder={"City / District"} />
                        <Input value={inputs.state} onValueChange={(text) => setInputs({ ...inputs, state: text })} placeholder={"State"} />
                        <Input value={inputs.houseNo} onValueChange={(text) => setInputs({ ...inputs, houseNo: text })} placeholder={"House / Flat / Floor no"} />
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: hp(2), gap: wp(4) }}>
                            <View style={{ flex: 1, borderBlockColor: "#fff", borderStyle: "dashed", borderBottomWidth: wp(0.2) }}></View>
                            <Text style={{ color: "white", fontFamily: "OpenSans-Regular", fontSize: hp(1.7) }}>May be Used to assist Delivery</Text>
                            <View style={{ flex: 1, borderBlockColor: "#fff", borderStyle: "dashed", borderBottomWidth: wp(0.2) }}></View>
                        </View>
                        <Input value={inputs.name} onValueChange={(text) => setInputs({ ...inputs, name: text })} placeholder={"Receiver’s Name (OPTIONAL)"} />
                        <Input value={inputs.number} onValueChange={(text) => setInputs({ ...inputs, number: text })} placeholder={"Receiver’s Number (OPTIONAL)"} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: hp(1.5) }}>
                        <TouchableOpacity onPress={() => setInputs({ ...inputs, type: "home" })} style={{ backgroundColor: inputs.type === "home" ? "#FA4A0C" : "#fff", paddingVertical: hp(1.5), paddingHorizontal: wp(5), borderRadius: wp(2), display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                            <Fa5 name="home" color={inputs?.type === "home" ? "#fff" : "#FA4A0C"} size={hp(2)} />
                            <Text style={{ color: inputs?.type === "home" ? "#fff" : "#000", fontFamily: "OpenSans-Medium", fontSize: hp(1.8) }}>home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setInputs({ ...inputs, type: "office" })} style={{ backgroundColor: inputs?.type === "office" ? "#FA4A0C" : "#fff", paddingVertical: hp(1.5), paddingHorizontal: wp(5), borderRadius: wp(2), display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                            <Fa5 name="building" color={inputs?.type === "office" ? "#fff" : "#FA4A0C"} size={hp(2)} />
                            <Text style={{ color: inputs?.type === "office" ? "#fff" : "#000", fontFamily: "OpenSans-Medium", fontSize: hp(1.8) }}>office</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={onUpdateAddress} style={{ backgroundColor: "#FA4A0C", paddingVertical: hp(2), paddingHorizontal: wp(5), borderRadius: wp(2), marginTop: hp(1) }}>
                        <Text style={{ color: "#fff", textAlign: "center", fontFamily: "OpenSans-Medium", fontSize: hp(1.8) }}>
                            Update Address
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default EditAddress

