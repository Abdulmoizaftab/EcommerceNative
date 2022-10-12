import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import NumericInput from 'react-native-numeric-input'
import FlatButton from './Button';
import { addProduct } from '../redux/CartRedux'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import {addToCart} from '../redux/apiCalls'


const BottomSheet = ({ reference, prodData }) => {

  const dispatch = useDispatch()
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState(prodData);
  const reduxDataProd = useSelector(state => state.cart.products);
  const reduxDataQty = useSelector(state => state.cart.quantity);


  // useEffect(()=>{

  //   axios.post('http://192.168.1.29:5000/addCartItem', data={})
  //   .then()
  //   .catch()
  //   console.log('getting fro redux',reduxDataProd,reduxDataQty)
  // },[])


  const onAddCart = () => {
    reference.current.close();
    const payload = {
      product_id: product.product_id,
      quantity:qty
    }


    console.log(payload)

      //  dispatch(addProduct(payload))
      addToCart(dispatch,payload)
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