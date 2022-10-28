import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



const SearchDropdown = ({ dataSource, searchTextInSearch }) => {

  const navigate = useNavigation();
  const [asyncStorageData, setAsyncStorageData] = useState([])
  console.log(dataSource);

  const addSuggestionWord = async (paramData) => {
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
      navigate.navigate("Product_detail",paramData)

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

  useEffect(() => {
    getData()
  }, [])

  return (


    <View>
      {
        dataSource.map((item, key) => {
          return (

            <View style={{backgroundColor:'#fff'}}>

              <TouchableOpacity onPress={()=>addSuggestionWord(item)}>
                <View key={key}>
                  <Text style={{ borderBottomWidth: 1, borderColor: "grey", marginVertical: 10,color:"black",padding:5 }}>{item.name}</Text>
                </View>
              </TouchableOpacity>

            </View>

          )
        })
      }

    </View>
  )
}

export default SearchDropdown;