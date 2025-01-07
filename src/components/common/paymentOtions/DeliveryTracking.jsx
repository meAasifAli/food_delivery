import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typography from '../../Typography'

const DeliveryTracking = () => {
    return (
        <View style={styles.deliveryWrapper}>
            <View>
                <Typography title={"2 Items - Total : RS 294"} ff={"OpenSans-Regular"} fw={400} size={14} ls={0.05} color={"#6D6D6D"} lh={19} />
            </View>
            <View style={styles.deliveryTrackerWrapper}>
                <View style={styles.deliveryTacker}>
                    <View style={styles.trackerDot}></View>
                    <View style={styles.trackerLine}></View>
                    <View style={styles.trackerDot}></View>
                </View>
                <View style={styles.deliveryTackerRightWrapper}>
                    <View style={styles.deliveryTextWrapper}>
                        <Typography title={"Cafe Ertugrul | "} ff={"OpenSans-Medium"} fw={400} size={14} ls={0.05} color={"#000"} lh={19} />
                        <Typography title={"Delivery in 35-40 mins"} ff={"OpenSans-Regular"} fw={400} size={14} ls={0.05} color={"#000"} lh={19} />
                    </View>
                    <View style={styles.deliveryTextWrapper}>
                        <Typography title={"Work | "} ff={"OpenSans-Medium"} fw={400} size={14} ls={0.05} color={"#000"} lh={19} />
                        <Typography title={"Kursu Rajbagh Sgr. 190008"} ff={"OpenSans-Regular"} fw={400} size={14} ls={0.05} color={"#000"} lh={19} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DeliveryTracking

const styles = StyleSheet.create({
    deliveryWrapper: { marginLeft: 20, marginTop: 20, display: "flex", flexDirection: "column", gap: 10, justifyContent: "flex-start" },
    deliveryTrackerWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    }
    , deliveryTacker: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
    trackerDot: { backgroundColor: "#FA4A0C", height: 10, width: 10, borderRadius: 25 },
    trackerLine: { width: 2, height: 35, backgroundColor: "#FA4A0C" },
    deliveryTackerRightWrapper: { display: "flex", flexDirection: "column", gap: 20 },
    deliveryTextWrapper: { display: "flex", flexDirection: "row", alignItems: "center" }
})