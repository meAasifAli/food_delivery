import { useState } from "react";
import Typography from "../../../Typography";
import { Switch, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WhatsApp = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: wp(5), borderBottomWidth: wp(0.2), borderBottomColor: "#D6D6D6" }}>
            <Typography title="WhatsApp" ff={"OpenSans-Bold"} fw={500} color={"#000"} size={hp(2.2)} />
            <Switch
                trackColor={{ false: '#D6D6D6', true: '#FA4A0C' }}
                thumbColor={"#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default WhatsApp