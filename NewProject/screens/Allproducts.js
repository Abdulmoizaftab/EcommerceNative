import { SafeAreaView, StyleSheet, Text, View,StatusBar,FlatList } from 'react-native';
import React, { useState,useEffect } from 'react';


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Allproducts = ({route}) => {
  const renderItem = ({ item }) => (
    <Item title={item.product_id} />
    
  );
  const [VendorId, setVendorId] =useState([])
  //console.log("🚀 ~ file: Allproducts.js ~ line 6 ~ Allproducts ~ VendorId", VendorId)
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://192.168.1.19:5000/sql/venderProduct/${route.params}`)
      .then((response) => response.json())

      .then((json) => setVendorId(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  // const hello = route.params
  // console.log(hello);
  return (
    // <Text>
    //   {VendorId.map((item)=>(
    //     <Text >{item.product_id}</Text>
    //   ))}
    // </Text>
   VendorId.map((item)=>(
    <SafeAreaView style={styles.container}>
    <FlatList
      data={VendorId}
      renderItem={renderItem}
      keyExtractor={item => item.product_id}
    />
  </SafeAreaView>
   ))
  
  )
}

export default Allproducts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});