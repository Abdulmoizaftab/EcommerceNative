import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const SearchDropdown = (props) => {
    const {dataSource,navigate} = props
  return (
    <View>
      {
        dataSource.map((item, key) => {
          return (<TouchableOpacity key={key} style={{width:"100%",borderBottomWidth:1,borderColor: "black"}} onPress={()=>{
              navigate.navigate('Product_detail',item);
            }}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
          )
        })
      }
      
    </View>
   
    
  )
}
const Style=StyleSheet.create({
  
})

export default SearchDropdown