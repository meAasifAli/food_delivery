import { KeyboardAvoidingView, } from 'react-native'
import { useState } from 'react';
import Header from '../../components/common/address/Header';
import Map from '../../components/common/address/Map';
import Bottom from '../../components/common/address/Bottom';


const Address = () => {
    const [openModal, setOpenModal] = useState(false)
    // const { location } = useContext(LocationContext)
    return (
        <KeyboardAvoidingView style={{ flex: 1, position: "relative" }}>
            <Header isHidden={openModal} />
            <Map />
            <Bottom openModal={openModal} setOpenModal={setOpenModal} />
        </KeyboardAvoidingView>
    )
}

export default Address

