import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Orders = () => {

  const [asyncStorageData, setAsyncStorageData] = useState([])
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ file: Orders.js ~ line 11 ~ Orders ~ products", products)

  useEffect(() => {
    getData()
   
  }, [])

  useEffect(()=>{
    asyncStorageData.length >=0 && asyncStorageData.map((obj) => {
      getProductData(obj)
    })
  },[asyncStorageData])



  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@searchItems')
      const asyncData = JSON.parse(jsonValue);
      setAsyncStorageData(asyncData)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      alert('Something went wrong');
    }
  }
//console.log("data==>",asyncStorageData);
  const getProductData = async (obj) => {
    await fetch(`http://192.168.1.7:5000/sql/recommend/${obj}`)
      .then((response) => response.json())
      .then((json) => { setProducts([...products,json]) })
      .catch((error) => console.error(error))
  }



  return (
    <View>
      <Text>ll</Text>
    </View>
  )
}

export default Orders;