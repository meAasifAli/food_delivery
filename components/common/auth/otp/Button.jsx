import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'


const Button = ({ handlePress, loading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                backgroundColor: '#FA4A0C',
                padding: 15,
                borderRadius: 15,
                width: "80%",
                alignItems: 'center',
                marginHorizontal: 'auto',
                marginTop: 10
            }}>
            {loading ? (
                <ActivityIndicator color={'#fff'} size={'small'} />
            ) : (
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                        lineHeight: 35,
                        fontWeight: '500',
                        fontFamily: 'OpenSans-Medium',
                    }}>
                    Continue
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default Button

