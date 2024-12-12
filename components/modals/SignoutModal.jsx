import { Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { useDispatch } from 'react-redux'
import { setAuthenticated, setOtp, setUser, setToken } from '../../store/authSlice'

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
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }} // Center modal on screen
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
                marginHorizontal: "auto"

            }}>
                <Text style={{ fontSize: 18, fontFamily: "OpenSans-Medium", textAlign: "center", color: "#000", lineHeight: 25, marginBottom: 10 }}>Are you sure you want to signout?</Text>
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

