import { StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal'

const ItemCustomizationModal = ({ isOpen, setIsOpen }) => {
    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => setIsOpen(prev => !prev)}
            // swipeDirection="down"
            // onSwipeComplete={toggleFirstDrawer}
            style={styles.modal}
            backdropColor='transparent'
            backdropOpacity={0.50}
            animationIn={"slideInUp"}
            animationInTiming={1000}
            animationOut={"slideOutDown"}
            animationOutTiming={1000}

        >
            <View style={styles.drawer}>
            </View>
        </Modal>
    )
}

export default ItemCustomizationModal

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end', // Align modal at the bottom
        margin: 0, // Removes default margin from modal
    },
    drawer: {
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "75%",
        width: "100%"
    },
})