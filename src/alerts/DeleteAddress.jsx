import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import useDeleteAddress from '../hooks/useDeleteAddress'

const DeleteAddress = ({ isOpen, setIsOpen, item }) => {
    const { loading, handleDeleteAddress } = useDeleteAddress()
    const onDelete = async () => {
        await handleDeleteAddress(item?.id)
        setIsOpen(false)
    }
    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(false)}
        >
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                <View>
                    <Text style={{ fontSize: 18, marginBottom: 10, fontFamily: "OpenSans-Medium", textAlign: "center", color: "#000" }}>Are you sure?</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 14, marginBottom: 10, fontFamily: "OpenSans-Regular", textAlign: "center", color: "#000", maxWidth: "80%", marginHorizontal: "auto", letterSpacing: 0.15 }}>You are about to delete this address. This action is irreversible.</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={() => setIsOpen(false)} style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#000", padding: 15, borderRadius: 15, marginBottom: 10 }}>
                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium" }}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDelete} style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#FA4A0C", padding: 15, borderRadius: 15, marginBottom: 10 }}>
                        <Text style={{ color: "#fff", fontFamily: "OpenSans-Medium" }}>{
                            loading ? <ActivityIndicator color={"#fff"} size={"small"} /> : "Yes"
                        }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteAddress

