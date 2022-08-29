import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState,  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Item = () => (
  <View >
    <Text >hello</Text>
  </View>
);


const Orders = () => {

  useEffect(()=>{
    getProductData()
  },[])


  const [asyncStorageData,setAsyncStorageData]= useState([])
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ file: Orders.js ~ line 22 ~ Orders ~ products", products)



  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@searchItems')
      setAsyncStorageData(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      alert('Something went wrong');
    }
  }

  const getProductData = async () => {
    await fetch(`http://192.168.1.7:5000/sql/recommend/women`)
    .then((response) => response.json())
      .then((json) => { setProducts(json) })
      .catch((error) => console.error(error))
  }



  return (
    <View>
      <Text>Orders</Text>
    </View>
  )
}

export default Orders;