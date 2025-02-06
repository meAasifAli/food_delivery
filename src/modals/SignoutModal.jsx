import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { useDispatch } from 'react-redux'
import { setAuthenticated, setOtp, setUser, setToken } from '../store/authSlice'

const SignoutModal = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(setAuthenticated())
        dispatch(setUser(null))
        dispatch(setToken(null))
        dispatch(setOtp(null))
    }
    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(false)}
            style={styles.modal2}
            animationIn="fadeInUp"
            animationInTiming={1000}
            animationOut={"fadeOutDown"}
            animationOutTiming={1000}
        >
            <View style={styles.drawer2}>
                <Text style={{ fontSize: 18, fontFamily: "OpenSans-Medium", textAlign: "center", color: "#fff", lineHeight: 25, marginBottom: 10 }}>Are you sure you want to signout?</Text>
                <View>
                    <TouchableOpacity onPress={() => setIsOpen(prev => !prev)} style={{ marginTop: 20, borderRadius: 10, height: 50, backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "#000" }}>
                        <Text style={{ color: "#000", fontFamily: "OpenSans-Regular", fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20, borderRadius: 10, height: 50, backgroundColor: "#FA4A0C", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>Signout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default SignoutModal


const styles = StyleSheet.create({
    modal2: {
        flex: 1,
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal
    }
    ,
    drawer2: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        padding: 20
    },
})
