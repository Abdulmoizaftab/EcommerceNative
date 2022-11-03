import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Skeleton, NativeBaseProvider, Center } from 'native-base'
const items = [
  {
    image: require("../assets/fonts/images/samsung.png"),
    text: "Pick-up",
  },

];

const VendorSlider = ({ popular, setPopular }) => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(false)
  useEffect(() => {
    setSkeleton(true)
<<<<<<< HEAD
    fetch('http://192.168.1.7:5000/sql/allVenders')
=======
    fetch('http://192.168.1.17:5000/sql/allVenders')
>>>>>>> 9900784c6e90442354009d7c77d6e8d034ed71ff
      .then((response) => response.json())
      .then((json) => {
        setApiData(json)
        setSkeleton(false)
      })
      .catch((error) => {console.error(error)
        Alert.alert(
          "Network Error",
          "Please check your network connection.",
          [
        {
          text: "Ok",
          onPress: () => console.log("Ok"),
        }
      ]
      );
      })
    setPopular(false)
  }, [popular]);
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>

      <View style={{
        width: "100%",
        padding: "2.5%",
      }}>
        <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'black' }}>Popular Vendors</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {skeleton === false ? apiData.map((item, index) => (
            <TouchableOpacity key={index} style={{ alignItems: 'center', marginRight: 20, marginTop: 5 }} onPress={() => {
              navigation.navigate('AllVendorProducts', {
                vendorId: item.vendorsId,
                vendorName: item.vendorName
              })
              // console.log(item.vendorsId)
              // VendorId={apiData.vendorsId}
            }}  >

                <Image source={{ uri: item.vendorLogo }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius:50,
                    borderWidth:1,
                    borderColor:'#ddd',
                    resizeMode:'contain',
                    backgroundColor:'white'
                  }} />



              {/*below code is optional if you want to add text below the logos */}

              {/* <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.vendorName}</Text> */}

            </TouchableOpacity>


          )) :
            <View style={{ width: "100%", flexDirection: "row", height: "87%" }}>

              <View activeOpacity={0.9} style={{ padding: 5 }}>
                <Skeleton borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
              </View>
              <View activeOpacity={0.9} style={{ padding: 5 }}>
                <Skeleton borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
              </View>
              <View activeOpacity={0.9} style={{ padding: 5 }}>
                <Skeleton borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
              </View>
              <View activeOpacity={0.9} style={{ padding: 5 }}>
                <Skeleton borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
              </View>
              <View activeOpacity={0.9} style={{ padding: 5 }}>
                <Skeleton borderColor="coolGray.200" mb="3" w="57" h="57" rounded="30" startColor="coolGray.300" />
              </View>

            </View>
          }
        </ScrollView>
      </View>
    </NativeBaseProvider>
  )
}

export default VendorSlider