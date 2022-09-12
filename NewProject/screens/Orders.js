import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecommendedProduct from '../components/recommendedProduct'
import { Skeleton } from "native-base";
import { IP_ADDRESS } from "@env"



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
    await fetch(`http://${IP_ADDRESS}:5000/sql/recommend/${obj}`)
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
    // <ScrollView>

    //   <View>
    //     <Text>RecommendedProduct</Text>

    //     <TouchableOpacity onPress={removeValue}>
    //       <View>
    //         <Text style={{ borderBottomWidth: 1, borderColor: "grey", marginVertical: 10 }}>delete</Text>
    //       </View>
    //     </TouchableOpacity>

    //   </View>


    //   <View>
    //       <RecommendedProduct productData={allObject} />
    //   </View>
    // </ScrollView>

    // <View style={{width:"100%",height:"100%",backgroundColor:"white"}}>
    <View style={{ width: "100%", backgroundColor: "#F0F3F4", height: "100%", alignItems: 'center' }}>


      <TouchableOpacity activeOpacity={0.9} style={{ marginVertical: "2%", width: "90%", height: '25%',  justifyContent: 'center', borderRadius: 4, backgroundColor:'#AED6F1' }} >

        <View style={{ flexDirection: 'row' }}>



          <View style={{ width: '40%', alignItems: 'center' }}>
            <Skeleton h="110" w='100' rounded='10' />
          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>

            <View style={{ flexDirection: 'column' }}>
              <Skeleton.Text lines={3} />
            </View>


            <View style={{ flexDirection: 'row' }}>
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
            </View>

            <View style={{ width: '90%' }}>
              <Skeleton h="3" rounded="full" startColor="indigo.300" />
            </View>
          </View>




        </View>

      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} style={{ marginVertical: "2%", width: "90%", height: '25%',  justifyContent: 'center', borderRadius: 4, backgroundColor:'#AED6F1' }} >

        <View style={{ flexDirection: 'row' }}>



          <View style={{ width: '40%', alignItems: 'center' }}>
            <Skeleton h="110" w='100' rounded='10' />
          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>

            <View style={{ flexDirection: 'column' }}>
              <Skeleton.Text lines={3} />
            </View>


            <View style={{ flexDirection: 'row' }}>
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
            </View>

            <View style={{ width: '90%' }}>
              <Skeleton h="3" rounded="full" startColor="indigo.300" />
            </View>
          </View>




        </View>

      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} style={{ marginVertical: "2%", width: "90%", height: '25%',  justifyContent: 'center', borderRadius: 4, backgroundColor:'#AED6F1' }} >

        <View style={{ flexDirection: 'row' }}>



          <View style={{ width: '40%', alignItems: 'center' }}>
            <Skeleton h="110" w='100' rounded='10' />
          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>

            <View style={{ flexDirection: 'column' }}>
              <Skeleton.Text lines={3} />
            </View>


            <View style={{ flexDirection: 'row' }}>
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
            </View>

            <View style={{ width: '90%' }}>
              <Skeleton h="3" rounded="full" startColor="indigo.300" />
            </View>
          </View>




        </View>

      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} style={{ marginVertical: "2%", width: "90%", height: '25%',  justifyContent: 'center', borderRadius: 4, backgroundColor:'#AED6F1' }} >

        <View style={{ flexDirection: 'row' }}>

          <View style={{ width: '40%', alignItems: 'center' }}>
            <Skeleton h="110" w='100' rounded='10' />
          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>

            <View style={{ flexDirection: 'column' }}>
              <Skeleton.Text lines={3} />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
              <Skeleton h="4" w="4" startColor="amber.300" rounded="20" marginRight='2' />
            </View>

            <View style={{ width: '90%' }}>
              <Skeleton h="3" rounded="full" startColor="indigo.300" />
            </View>
          </View>

        </View>

      </TouchableOpacity>

    </View>

    // </View>
  )
}

export default Orders;

const styles = StyleSheet.create({

})