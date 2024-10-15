import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputField from '../../InputField'
import Button from '../../Button'
import Typography from '../../Typography'
import CustomLink from '../../CustomLink'
const { width } = Dimensions.get("window")

const SignupForm = () => {
    return (
        <ScrollView style={styles.content}>
            <Text style={styles.formHeading}>Sign Up</Text>
            <InputField label={"Name"} placeholder={"Enter Your Name"} />
            <InputField label={"Email"} placeholder={"Enter Your Email"} />
            <InputField type={"numeric"} label={"Mobile Number"} placeholder={"Enter Your Mobile Number"} />

            <Button bgColor={"#FA4A0C"} color={"#fff"} size={32} heightVal={64} widthVal={280} title={"Signup"} />


            <View style={styles.optionContainer}>
                <View >
                    <Typography
                        title={"or Continue with"}
                        size={16}
                        lh={21.79}
                        ls={0.05}
                        fw={400}
                        ff={"OpenSans-Regular"}
                        color={"#fff"}
                    />
                </View>
                <View style={styles.googleWrapper}>
                    <Image source={require("../../../assets/images/google.png")} />
                    <Typography
                        title={"Google"}
                        size={16}
                        lh={18.05}
                        ls={0.05}
                        fw={700}
                        ff={"OpenSans-Regular"}
                        color={"#fff"}
                    />
                </View>
            </View>

            <View style={styles.navWrapper}>
                <Typography
                    title={"Already have an account?"}
                    size={16}
                    lh={21.79}
                    ls={0.05}
                    fw={400}
                    ff={"OpenSans-Regular"}
                    color={"#fff"}
                />
                <CustomLink
                    title={"Login"}
                    href={"signin"}
                    size={16}
                    lh={21.79}
                    ls={0.05}
                    fw={700}
                    ff={"OpenSans-Regular"}
                    color={"#FA4A0C"}
                />
            </View>
        </ScrollView>
    )
}

export default SignupForm

const styles = StyleSheet.create({
    content: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: '#202020',
        overflow: "scroll"
    },
    formHeading: {
        flex: 1,
        color: '#fff',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 54.47,
        letterSpacing: 0.05,
        textAlign: 'center',
        marginTop: 10,

    },
    optionContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: width * (350 / width),
        marginVertical: 20,
    },
    googleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'flex-start',
    },
    navWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        marginLeft: 30
    },
})