import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const items = [
  {
    image: require("../assets/fonts/images/samsung.png"),
    text: "Pick-up",
  },

];

const VendorSlider = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://192.168.1.14:5000/sql/allVenders')
      .then((response) => response.json())

      .then((json) => setApiData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const navigation = useNavigation();
  return (
    <View style={{
      marginTop: 5,
      // backgroundColor:'',
      padding: 10,
      paddingLeft: 20,

    }}>
      <Text style={{fontSize:19,fontWeight:'bold', color:'black',marginBottom:9,marginLeft:-10}}>Popular Vendors</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {apiData.map((item, index) => (
          <TouchableOpacity key={index} style={{ alignItems: 'center', marginRight: 20 }} onPress={() => {
            navigation.navigate('AllVendorProducts', item.vendorsId)
            // console.log(item.vendorsId)
            // VendorId={apiData.vendorsId}
          }}  >
            <Image source={require('../assets/fonts/images/samsung.png')}
              style={{
                width: 70,
                height: 60,
                resizeMode: 'contain'
              }} />



            {/* below code is optional if you want to add text below the logos */}

            {/* <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.vendorName}</Text> */}

          </TouchableOpacity>


        ))}
      </ScrollView>
    </View>
  )
}

export default VendorSlider

