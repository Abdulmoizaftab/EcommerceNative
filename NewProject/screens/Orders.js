import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Orders = () => {

  const [asyncStorageData, setAsyncStorageData] = useState([])
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ file: Orders.js ~ line 11 ~ Orders ~ products", products)

  const [start, setStart] = useState(true)

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
  }, [asyncStorageData >=0])


  const getProductData = async (obj) => {
    setStart(false)
    let arr = []
    await fetch(`http://192.168.1.7:5000/sql/recommend/${obj}`)
      .then((response) => response.json())
      .then((valueIndex=> {console.log('==>',valueIndex)}))
      // .then((json) => { setProducts(current => [...current,json]) })
      .then(setStart(true))
      .catch((error) => console.error(error))

  }


  // const getProductData=async()=>{

  //     for (let index = 0; index < asyncStorageData.length; index++) {
  //       await fetch(`http://192.168.1.7:5000/sql/recommend/${asyncStorageData[index]}`)
  //       .then(async (response) =>await response.json())
  //       // .then((response) => {console.log('json data=>',response[0])})
  //       .then((json) => {   
  //         setProducts([...products,json])}
  //         )
  //         .catch((error) => console.error(error))
  //       }

  //   }



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


  // const getProductData = async (obj) => {
  //   let arr = []
  //   await fetch(`http://192.168.1.7:5000/sql/recommend/${obj}`)
  //   .then(async (response) =>await response.json())
  //   // .then((response) => {console.log('json data=>',response[0])})
  //   .then((json) => {   
  //   setProducts([...products,json])}
  //   )

  //   .catch((error) => console.error(error))
  // }


  // const fetchData = () => {
  //   let response = await getAllPokemon(initialURL)
  //   setNextUrl(response.next);
  //   setPrevUrl(response.previous);
  //   await loadPokemon(response.results);
  //   setLoading(false);
  // }

  return (
    <ScrollView>

      <View>
        <Text>order</Text>

        <TouchableOpacity onPress={removeValue}>
          <View>
            <Text style={{ borderBottomWidth: 1, borderColor: "grey", marginVertical: 10 }}>delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Orders;