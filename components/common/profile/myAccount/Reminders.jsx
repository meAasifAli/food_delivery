import { View } from "react-native"
import Typography from "../../../Typography"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Reminders = () => {
    return (
        <View style={{ padding: wp(5), borderBottomWidth: wp(0.2), borderBottomColor: "#D6D6D6" }}>
            <View>
                <Typography title={"Reminders"} color={"#202020"} fw={400} size={wp(4)} ff={"OpenSans-Regular"} />
            </View>
            <View style={{ marginTop: hp(2) }}>
                <Typography title={"Keep these on to receive offer recommendations & timely reminders"} color={"#000"} fw={400} size={wp(3)} ff={"OpenSans-Regular"} />
            </View>
        </View>
    )
}

export default Reminders