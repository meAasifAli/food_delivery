import { Image } from "react-native"
import Typography from "../../../Typography"
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Wallet = ({ title, img }) => {
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: hp(1), borderBottomColor: "#D6D6D6", borderBottomWidth: hp(0.15), paddingTop: hp(2) }}>
            <View style={{ display: "flex", alignItems: "center", gap: wp(10), flexDirection: "row" }}>
                <Image style={{ height: hp(5), width: wp(10), objectFit: "contain" }} source={img} />
                <Typography color={"#000"} size={hp(2)} title={title} ff={"OpenSans-Regular"} />
            </View>
            <View style={{ borderColor: "#FA4A0C", borderWidth: wp(0.2), padding: wp(1.5), borderRadius: wp(2) }}>
                <AntDesign name='plus' color={"#FA4A0C"} size={hp(3)} />
            </View>
        </View>
    )
}
export default Wallet
