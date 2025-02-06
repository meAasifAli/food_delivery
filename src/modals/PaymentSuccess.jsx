import { StyleSheet, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Text } from 'react-native'



const PaymentSuccess = ({ isOpen, setIsOpen }) => {
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
                justifyContent: "center", alignItems: "center"
            }}>
                <AntDesign name='checkcircle' size={100} color={"green"} />
                <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "OpenSans-Bold", color: "#000", marginTop: 10 }}>Payment Successful</Text>

            </View>
        </Modal>
    )
}

export default PaymentSuccess

const styles = StyleSheet.create({})