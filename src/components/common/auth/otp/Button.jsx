import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'


const Button = ({ handlePress, loading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                backgroundColor: '#FA4A0C',
                padding: 15,
                borderRadius: 15,
                width: "90%",
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
                        fontSize: 16,
                        fontWeight: '500',
                        fontFamily: 'OpenSans-Bold',
                    }}>
                    Continue
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default Button

