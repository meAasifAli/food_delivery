import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Typography from '../../Typography'
import InputField from '../../InputField'
import Button from '../../Button'
import CustomLink from '../../CustomLink'

const { width } = Dimensions.get("window")

const LoginForm = ({ navigation }) => {
    return (
        <ScrollView>
            <Typography
                title={"Sign In"}
                color="#fff"
                ff="OpenSans-Regular"
                fw={700}
                size={40}
                lh={54.47}
                ls={0.05}
                ta={"center"}
                mv={16}
            />

            <View
                style={{
                    marginVertical: 16
                }}
            >
                <Typography
                    title={"Feast on convenience,"}
                    color="#fff"
                    ff="OpenSans-Regular"
                    fw={300}
                    size={20}
                    lh={27.24}
                    ls={0.05}
                    ta={"center"}
                    maxW={364}
                    mh={"auto"}

                />
                <Typography
                    title={"Login to indulge in culinary delights!"}
                    color="#fff"
                    ff="OpenSans-Regular"
                    fw={300}
                    size={20}
                    lh={27.24}
                    ls={0.05}
                    ta={"center"}
                    maxW={364}
                    mh={"auto"}

                />
            </View>

            <InputField type={"numeric"} label={"Mobile Number"} placeholder={"Enter Your Mobile Number"} />
            <Button bgColor={"#FA4A0C"} color={"#fff"} size={32} heightVal={64} widthVal={280} onHandlePress={() => navigation.navigate("otp")} title={"Signin"} />
            <View style={styles.optionContainer}>
                <View>
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
                    title={"Doesn't have an account?"}
                    size={16}
                    lh={21.79}
                    ls={0.05}
                    fw={400}
                    ff={"OpenSans-Regular"}
                    color={"#fff"}
                />
                <CustomLink title={"Signup"} href={"signup"} size={16}
                    lh={21.79}

                    ls={0.05}
                    fw={700}
                    ff={"OpenSans-Regular"}
                    color={"#FA4A0C"} />
            </View>
        </ScrollView>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    optionContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: width * (350 / width),
        marginVertical: 30,
        // marginHorizontal: "auto"
    },
    googleWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "flex-start"
    },
    navWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        marginLeft: 35,
        marginTop: 30
    }
})