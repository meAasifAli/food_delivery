import { Text, View } from 'react-native'


const SecondaryHeading = () => {
    return (
        <View
            style={{
                marginVertical: 16
            }}
        >
            <Text style={{
                fontFamily: "OpenSans-Medium",
                color: "#fff",
                fontSize: 20,
                lineHeight: 25,
                textAlign: "center",
                maxWidth: "80%",
                marginHorizontal: "auto"
            }}>
                Feast on Convenience Login to indulge in culinary delights!
            </Text>
        </View>
    )
}

export default SecondaryHeading

