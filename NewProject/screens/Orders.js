import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecommendedProduct from '../components/recommendedProduct'


const Orders = () => {

  const [asyncStorageData, setAsyncStorageData] = useState([])
  const [products, setProducts] = useState([]);
  
  const [allObject, setAllObject] = useState([]);

  useEffect(async () => {
    await getData();
    //  if(asyncStorageData.length>0){
    //   getProductData()
    // }
  }, [])


  useEffect(() => {
    asyncStorageData.length >= 0 && asyncStorageData.map((obj) => {
      getProductData(obj)
    })
  }, [asyncStorageData >= 0])


  const getProductData = async (obj) => {
    await fetch(`http://192.168.1.10:5000/sql/recommend/${obj}`)
      .then((response) => response.json())
      .then((json) => { setProducts(current => [...current, json]) })
      .catch((error) => console.error(error))

  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@searchItems')
      const asyncData = JSON.parse(jsonValue);
      setAsyncStorageData(asyncData)
      //return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      alert('Something went wrong');
    }
  }

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@searchItems')
    } catch (e) {
      // remove error
    }
    console.log('Done.')
  }

  useEffect(() => {
    getDataFromArray()
  }, [products])

  const getDataFromArray = () => {
    var arr = []
    products && products.map((obj) => {
      obj && obj.map((object) => {
        arr.push(object)
      })
    })
    setAllObject(arr)
  }

  return (
    <ScrollView>

      <View>
        <Text>RecommendedProduct</Text>

        <TouchableOpacity onPress={removeValue}>
          <View>
            <Text style={{ borderBottomWidth: 1, borderColor: "grey", marginVertical: 10 }}>delete</Text>
          </View>
        </TouchableOpacity>

      </View>


      <View>
          <RecommendedProduct productData={allObject} />
      </View>
    </ScrollView>
  )
}

export default Orders;