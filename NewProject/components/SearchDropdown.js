import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const SearchDropdown = (props) => {
    const {dataSource,navigate} = props
  return (
    <View>
      {

        dataSource.map((item, key) => {
          return (<TouchableOpacity key={key} onPress={()=>navigate.navigate('Product_detail',item)}>
            <Text style={{ borderBottomWidth: 1, borderColor: "grey", marginVertical: 10 }}>{item.name}</Text>
          </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default SearchDropdown