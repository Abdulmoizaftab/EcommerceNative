import { StyleSheet, Text, View, TextInput, Touchable } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { addAddress } from '../redux/AddressRedux'

const AddressBottomSheet = ({reference}) => {
    const [title, setTttle] = useState("")
    const [recipent, setRecipent] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState(0)

    // const handlePress = () => {
    //     const payload = {
    //         title,
    //         recipent,
    //         address,
    //         phone
    //     }
    //     dispatchEvent(addAddress(payload))
    //}
    return (
        <View style={styles.main}>
            <Text style={styles.inputLabelStyle}><MaterialCommunityIcons name='card-text-outline' color='gray' size={20} /> Address Title</Text>
            <TextInput selectionColor='black' style={styles.inputStyle} onChangeText={setTttle} value={title} />

            <Text style={styles.inputLabelStyle}><MaterialCommunityIcons name='account-outline' color='gray' size={20} /> Recipent Name</Text>
            <TextInput selectionColor='black' style={styles.inputStyle} onChangeText={setRecipent} value={recipent} />

            <Text style={styles.inputLabelStyle}><MaterialCommunityIcons name='map-marker-outline' color='gray' size={20} /> Address</Text>
            <TextInput selectionColor='black' style={styles.inputStyle} onChangeText={setAddress} value={address}/>

            <Text style={styles.inputLabelStyle} ><MaterialCommunityIcons name='phone-outline' color='gray' size={20} /> Phone #</Text>
            <TextInput selectionColor='black' style={styles.inputStyle} keyboardType='numeric' onChangeText={setPhone} value={phone}/>

            <TouchableOpacity style={styles.btnStyle} >
                <Text style={styles.btnText}>Add Address</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddressBottomSheet

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