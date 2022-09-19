import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { updateAddress } from '../redux/AddressRedux'
import { useDispatch,useSelector } from 'react-redux'

const AddressUpdateBottomSheet = ({reference,modifying_id}) => {
    //console.log(modifying_id);
    const dispatch = useDispatch()
    const state = useSelector(state => state.address)
    const toModify = state.addresses.filter(item => item.id === modifying_id)
    //console.log(toModify[0].title);
    const [title, setTttle] = useState(toModify[0].title)
    const [recipent, setRecipent] = useState(toModify[0].recipent)
    const [address, setAddress] = useState(toModify[0].address)
    const [phoneInput, setPhoneInput] = useState(toModify[0].phone.toString())
    const [id ,setId] = useState(modifying_id)


    const handlePress = () => {
        reference.current.close();
        const phone = parseInt(phoneInput)
        const payload = {
            id,
            address,
            phone,
            recipent,
            title,
        }
        dispatch(updateAddress(payload))
    }

    return (
        <View style={styles.main}>
            <Text style={styles.inputLabelStyle}><MaterialCommunityIcons name='card-text-outline' color='gray' size={20} /> Address Title</Text>
            <TextInput selectionColor='black' style={styles.inputStyle} onChangeText={setTttle} value={title} />

            <Text style={styles.inputLabelStyle}><MaterialCommunityIcons name='account-outline' color='gray' size={20} /> Recipent Name</Text>
            <TextInput selectionColor='black' style={styles.inputStyle} onChangeText={setRecipent} value={recipent} />

            <Text style={styles.inputLabelStyle}><MaterialCommunityIcons name='map-marker-outline' color='gray' size={20} /> Address</Text>
            <TextInput selectionColor='black' style={styles.inputStyle} onChangeText={setAddress} value={address}/>

            <Text style={styles.inputLabelStyle} ><MaterialCommunityIcons name='phone-outline' color='gray' size={20} /> Phone #</Text>
            <TextInput selectionColor='black' style={styles.inputStyle} keyboardType='numeric' onChangeText={setPhoneInput} value={phoneInput}/>

            <TouchableOpacity style={styles.btnStyle} onPress={handlePress}>
                <Text style={styles.btnText}>Update Address</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddressUpdateBottomSheet

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 15,

    },
    inputLabelStyle: {
        fontSize: 18,
    },
    inputStyle: {
        borderBottomWidth: 1,
        height: '10%',
        marginBottom: '5%',
        borderBottomColor: 'gray'
    },
    btnStyle: {
        backgroundColor: "#5A56E9",
        width: '50%',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: '4%',
        borderRadius: 13,
        marginTop: 3
    },
    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'whitesmoke'

    }
})