import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const SearchDropdown = ({ dataSource, searchTextInSearch }) => {
  // const { dataSource,searchText } = props

  const addSuggestionWord = async () => {
    try {
      let asyncData = await AsyncStorage.getItem('@searchItems');
      asyncData = JSON.parse(asyncData);
      if (asyncData) {
        let cartItem = asyncData;
        cartItem.push(searchTextInSearch);
        await AsyncStorage.setItem('@searchItems', JSON.stringify(cartItem));
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

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@searchItems')
    } catch (e) {
      // remove error
    }
    console.log('Done.')
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@searchItems')
      console.log("🚀 ~ file: Home_inside.js ~ line 167 ~ getData ~ jsonValue", jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      alert('Something went wrong');
    }
  }




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

      <TouchableOpacity onPress={removeValue} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
        {/* <Feather name="delete" style={Style.middle2_2_icon} /> */}
        <Text>delete</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={getData} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
        {/* <Feather name="delete" style={Style.middle2_2_icon} /> */}
        <Text>get data</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SearchDropdown