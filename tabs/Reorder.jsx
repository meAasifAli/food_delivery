import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const Reorder = () => {
    return (
        <View style={{ padding: 15, flex: 1, backgroundColor: "#fff" }}>
            <View>
                <Text style={{ fontSize: 16, color: "#202020", fontFamily: "OpenSans-Medium" }}>Reorder</Text>
            </View>
            <ScrollView style={{ marginTop: 40 }} showsVerticalScrollIndicator={false}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 15,
                    backgroundColor: "#fff",
                    borderLeftColor: "#FA4A0C",
                    borderLeftWidth: 1,
                    elevation: 2,
                    shadowColor: "#FA4A0C",
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 10,

                    // backgroundColor: "#fff",
                    // shadowColor: "#FA4A0C",
                    // shadowOpacity: 0.1,
                    // shadowOffset: { width: 0, height: 0 },
                    // shadowRadius: 10,

                }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 14, color: "#202020", fontFamily: "OpenSans-Bold", lineHeight: 25, letterSpacing: 0.1 }}>Chicken Grilled Burger</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontSize: 12, color: "#202020", fontFamily: "OpenSans-Regular", lineHeight: 20, letterSpacing: 0.1 }}>Ratings</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                                <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                                <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ width: "50%", backgroundColor: "#FA4A0C", height: 25, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 15, marginTop: 5 }}>
                                <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium", fontSize: 12 }}>Order again</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={require("../assets/images/burgers.png")} />
                    </View>
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 15,
                    backgroundColor: "#fff",
                    borderLeftColor: "#FA4A0C",
                    borderLeftWidth: 1,
                    elevation: 2,
                    shadowColor: "#FA4A0C",
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 10,
                    marginTop: 20

                    // backgroundColor: "#fff",
                    // shadowColor: "#FA4A0C",
                    // shadowOpacity: 0.1,
                    // shadowOffset: { width: 0, height: 0 },
                    // shadowRadius: 10,

                }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 14, color: "#202020", fontFamily: "OpenSans-Bold", lineHeight: 25, letterSpacing: 0.1 }}>Chicken Grilled Burger</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontSize: 12, color: "#202020", fontFamily: "OpenSans-Regular", lineHeight: 20, letterSpacing: 0.1 }}>Ratings</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                                <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                                <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ width: "50%", backgroundColor: "#FA4A0C", height: 25, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 15, marginTop: 5 }}>
                                <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium", fontSize: 12 }}>Order again</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={require("../assets/images/burgers.png")} />
                    </View>
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 15,
                    backgroundColor: "#fff",
                    borderLeftColor: "#FA4A0C",
                    borderLeftWidth: 1,
                    elevation: 2,
                    shadowColor: "#FA4A0C",
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 10,
                    marginTop: 20

                    // backgroundColor: "#fff",
                    // shadowColor: "#FA4A0C",
                    // shadowOpacity: 0.1,
                    // shadowOffset: { width: 0, height: 0 },
                    // shadowRadius: 10,

                }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 14, color: "#202020", fontFamily: "OpenSans-Bold", lineHeight: 25, letterSpacing: 0.1 }}>Chicken Grilled Burger</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontSize: 12, color: "#202020", fontFamily: "OpenSans-Regular", lineHeight: 20, letterSpacing: 0.1 }}>Ratings</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                                <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                                <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require("../assets/images/star.png")} />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ width: "50%", backgroundColor: "#FA4A0C", height: 25, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 15, marginTop: 5 }}>
                                <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium", fontSize: 12 }}>Order again</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={require("../assets/images/burgers.png")} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Reorder

const styles = StyleSheet.create({})