import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'

const AddTip = ({ isOpen, setIsOpen, tipAmt, setTipAmt }) => {
    const handleAddTip = (val) => {
        setTipAmt(val)
        setIsOpen(pre => !pre)
    }
    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(false)}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            animationIn="fadeInUp"
            animationInTiming={1000}
            animationOut={"fadeOutDown"}
            animationOutTiming={1000}
        >
            <View style={{
                backgroundColor: "#fff",
                borderRadius: 15,
                padding: "5%",
                width: "100%",
                marginHorizontal: "auto",
                justifyContent: "center",
                alignItems: "center"

            }}>
                <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", textAlign: "center", color: "#000", }}>Day and night , our delivery partners bring your favorite meals. thank them with a tip</Text>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginTop: 10 }}>
                    <TouchableOpacity onPress={() => handleAddTip(10)} style={{ padding: 5, backgroundColor: tipAmt === 10 ? "#FA4A0C" : "transparent", borderRadius: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", textAlign: "center", color: tipAmt === 10 ? "#fff" : "#000" }}>₹10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAddTip(20)} style={{ padding: 5, backgroundColor: tipAmt === 20 ? "#FA4A0C" : "transparent", borderRadius: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", textAlign: "center", color: tipAmt === 20 ? "#fff" : "#000" }}>₹20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAddTip(30)} style={{ padding: 5, backgroundColor: tipAmt === 30 ? "#FA4A0C" : "transparent", borderRadius: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", textAlign: "center", color: tipAmt === 30 ? "#fff" : "#000" }}>₹30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAddTip(40)} style={{ padding: 5, backgroundColor: tipAmt === 40 ? "#FA4A0C" : "transparent", borderRadius: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", textAlign: "center", color: tipAmt === 40 ? "#fff" : "#000" }}>₹40</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAddTip(50)} style={{ padding: 5, backgroundColor: tipAmt === 50 ? "#FA4A0C" : "transparent", borderRadius: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: "OpenSans-Medium", textAlign: "center", color: tipAmt === 50 ? "#fff" : "#000" }}>₹50</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default AddTip

const styles = StyleSheet.create({})