import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {Skeleton,NativeBaseProvider} from 'native-base'
const items = [
  {
    image: require("../assets/fonts/images/samsung.png"),
    text: "Pick-up",
  },

];

const VendorSlider = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [skeleton,setSkeleton]=useState(false)
  useEffect(() => {
    fetch('http://192.168.1.24:5000/sql/allVenders')
      .then((response) => response.json())

      .then((json) => setApiData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>

    <View style={{
      width:"100%",
      padding: "2.5%",
    }}>
      <Text style={{fontSize:19,fontWeight:'bold', color:'black'}}>Popular Vendors</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {skeleton===true? apiData.map((item, index) => (
          <TouchableOpacity key={index} style={{ alignItems: 'center', marginRight: 20,marginTop:5 }} onPress={() => {
            navigation.navigate('AllVendorProducts', {vendorId:item.vendorsId,
               vendorName: item.vendorName})
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


        )):
        <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:"100%"}}>

    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
    </View>
    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
    </View>
    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
    </View>
    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
    </View>
    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
    </View>
    
    </View>
        }
      </ScrollView>
    </View>
    </NativeBaseProvider>
  )
}

export default VendorSlider

