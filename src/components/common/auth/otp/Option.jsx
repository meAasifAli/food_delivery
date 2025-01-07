import { Text, View } from 'react-native'


const Option = () => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            paddingLeft: 10,
            paddingVertical: 10,
            marginBottom: 5,
        }}>

            <Text style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 16,
                lineHeight: 21,
                letterSpacing: 0.05,
                color: "#fff",
                marginLeft: 10
            }}>Didn't get the code? Resend in <Text style={{ color: '#FA4A0C' }}>0:59</Text></Text>

        </View>
    );
};

export default Option
