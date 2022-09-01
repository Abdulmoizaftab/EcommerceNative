import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import NumericInput from 'react-native-numeric-input'
import FlatButton from './Button';
import { addProduct } from '../redux/CartRedux'
import { useDispatch } from 'react-redux'


const BottomSheet = ({ reference, prodData }) => {

  const dispatch = useDispatch()
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState(prodData);

  const onAddCart = () => {
    reference.current.close();
    const payload = {
      product,
      qty
    }
    dispatch(addProduct(payload))
  }

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
        <FlatButton text='Add To Cart' onPress={onAddCart} />
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
  QtyView: {
    alignItems: 'center',
    paddingVertical: 25
  }
})