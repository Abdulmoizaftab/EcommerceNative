import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState,  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



const SearchDropdown = ({ dataSource, searchTextInSearch }) => {

  const [asyncStorageData,setAsyncStorageData]= useState([])
  // const { dataSource,searchText } = props

  const addSuggestionWord = async () => {
    try {
      let asyncData = await AsyncStorage.getItem('@searchItems');
      asyncData = JSON.parse(asyncData);
      if (asyncData) {
        let cartItem = asyncData;
        cartItem.push(searchTextInSearch);
        let uniqueChars = [...new Set(cartItem)];
        await AsyncStorage.setItem('@searchItems', JSON.stringify(uniqueChars));
      }
      else {
        let cartItem = [];
        cartItem.push(searchTextInSearch);
        await AsyncStorage.setItem('@searchItems', JSON.stringify(cartItem));
      }
    } catch (error) {
      alert('Something went wrong');
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@searchItems')
      setAsyncStorageData(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      alert('Something went wrong');
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (


    <View>
      {
        dataSource.map((item, key) => {
          return (
            <TouchableOpacity onPress={addSuggestionWord}>
              <View key={key}>
                <Text style={{ borderBottomWidth: 1, borderColor: "grey", marginVertical: 10 }}>{item}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }

    </View>
  )
}

export default SearchDropdown