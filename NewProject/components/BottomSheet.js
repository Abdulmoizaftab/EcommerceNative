import {StyleSheet, Text, View,FlatList,ScrollView } from 'react-native'
import React,{useState} from 'react'
import NumericInput from 'react-native-numeric-input'
import FlatButton from './Button';



const BottomSheet = ({reference}) => {

   const [qty,setQty] = useState(1);
    
    return (
        <ScrollView>
        <View>
            <Text style={styles.QuantityHeading}>Select Quantity:</Text>
            <View style={styles.QtyView}>
              <NumericInput
                value={qty}
                onChange={(value) => setQty(value)}
                minValue={1}
                totalWidth={250}
                totalHeight={50}
                iconSize={25}
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#5A56E9'
                leftButtonBackgroundColor='#E9565A' />
            </View>
            <FlatButton text='Add To Cart' onPress={() => reference.current.close()}/>
        </View>
        </ScrollView>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    
    QuantityHeading: {
        fontSize: 25,
        paddingTop: 20,
        paddingLeft: 20,
        color: 'black',
        fontWeight: '900'
      },
      QtyView:{
        alignItems:'center',
        paddingVertical:25
      }
})