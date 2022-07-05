import { View, Text } from 'react-native'
import React from 'react'

const SearchDropdown = (props) => {
    const {dataSource} = props
  return (
    <View>
          {

              dataSource.map((item , key) => {
                  return ( <View key={key}>
                        <Text style={{borderBottomWidth:1, borderColor:"grey" , marginVertical:10}}>{item}</Text>
                        </View>
                  )
              })
          }
    </View>
  )
}

export default SearchDropdown