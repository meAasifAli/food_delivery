import { ActivityIndicator, Dimensions, Text, TouchableOpacity } from 'react-native'

const { height, width } = Dimensions.get("window")
const Button = ({ handlePress, loading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                backgroundColor: '#FA4A0C',
                height: height * (54 / height),
                borderRadius: 15,
                width: "80%",
                alignItems: 'center',
                marginHorizontal: 'auto',
                marginTop: 10,
                justifyContent: "center"
            }}>
            {loading ? (
                <ActivityIndicator color={'#fff'} size={'small'} />
            ) : (
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '500',
                        fontFamily: 'OpenSans-Bold',
                        lineHeight: 43.58
                    }}>
                    Continue
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default Button

